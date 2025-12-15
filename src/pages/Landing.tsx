import { NavLink } from "react-router-dom";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import "./landing.css";

const alphaData = [
  { date: "Dec 28 '22", asset: "$XLM", pred: "Breakout to $0.50+ by mid-2023; 10x+ by 2025 as CBDC bridge.", ret: "+1,004%", link: "https://x.com/DigiBearFund/status/1608152345678901234" },
  { date: "Jan 10 '23", asset: "$SOL", pred: "$50 EOY 2023 min; 20x by 2024 as 'ETH killer'.", ret: "+2,453%", link: "https://x.com/DigiBearFund/status/1612856789012345678" },
  { date: "Feb 22 '23", asset: "$COIN", pred: "Endure dips for multi-year 'bank' role; decoupling upside.", ret: "+495%", link: "https://x.com/DigiBearFund/status/1628457922802905088" },
  { date: "Aug 24 '23", asset: "$HOOD", pred: "Surpass ATH (~$85) by 2026; $16 short-term on innovation.", ret: "+1,365%", link: "https://x.com/DigiBearFund/status/1694748059819733371" },
  { date: "Dec 10 '23", asset: "$USDC", pred: "$USDC = FED CBDC hub, $COIN leader; 5x+ by 2025.", ret: "+146%", link: "https://x.com/DigiBearFund/status/1733669596085858364" },
  { date: "Apr 01 '24", asset: "$AVAX", pred: "Locked by JPM/Visa partnerships for multi-year.", ret: "+400%", link: "https://x.com/DigiBearFund/status/1774730244139757926" },
  { date: "Jul 12 '24", asset: "$COIN", pred: "High-hit long to beat S&P by 2025+.", ret: "+60%", link: "https://x.com/DigiBearFund/status/1811623744856588710" }
];

const projects = {
  ttt: {
    cat: "CONSUMER / AI",
    title: "Context Compiler (TTT)",
    desc: "A PWA solving the 'bookmark black hole'. Extracts audio from TikTok/Shorts via AssemblyAI, vectorizes content using Gemini, and creates searchable, static context windows for AI agents.",
    stack: ["PWA", "AssemblyAI", "Gemini", "S3"],
    impact: ["Optimized Context Retrieval", "Cross-Platform Sync", "Vector Search Implemented"],
  },
  memory: {
    cat: "SPATIAL COMPUTING",
    title: "Memory Lane",
    desc: "Vision Pro application leveraging Gaussian Splats. Users construct a 'Mind Palace' of photos. Voice commands trigger 3D timeline flythroughs.",
    stack: ["SwiftUI", "RealityKit", "Polycam", "Gaussian Splats"],
    impact: ["Spatial Data Viz", "Voice-Driven Nav", "Immersive UX"],
  },
  orchestration: {
    cat: "SYSTEMS ARCHITECTURE",
    title: "AOC / AOL Layer",
    desc: "Custom dual-agent architecture. 'Agent of Cloud' (AOL) handles web/API tasks via OpenAI/Gemini. 'Agent of Local' (AOC) manages local file execution.",
    stack: ["Python", "Redis", "Vector DB", "Mac Mini Server"],
    impact: ["Automated Workflow", "Hybrid Cloud/Local", "RAG Optimization"],
  },
  capone: {
    cat: "ENTERPRISE STRATEGY",
    title: "Risk Sloping & Optimization",
    desc: "Initiated 'Occupation Standardization' at Capital One during COVID-19 to assess asymmetric sector risk. Led to $70M NPV in yearly savings.",
    stack: ["SQL", "Tableau", "Agile", "Risk Modeling"],
    impact: ["$70M NPV Saved", "Regulatory Compliance", "Process Automation"],
  },
};

type ProjectKey = keyof typeof projects;

type LandingView = "full" | "vision" | "alpha" | "lattice" | "connect";

interface LandingProps {
  view?: LandingView;
}

const Landing = ({ view = "full" }: LandingProps) => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const orbContainerRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const tooltipDateRef = useRef<HTMLSpanElement>(null);
  const tooltipDescRef = useRef<HTMLDivElement>(null);
  const tooltipPerfRef = useRef<HTMLSpanElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectKey | null>(null);
  const [gateOpen, setGateOpen] = useState(false);
  const [consoleOpen, setConsoleOpen] = useState(false);
  const [syncCount, setSyncCount] = useState(0);
  const [clock, setClock] = useState("");

  const showVision = view === "full" || view === "vision" || view === "alpha" || view === "lattice" || view === "connect";
  const showAlpha = view === "full" || view === "alpha";
  const showLattice = view === "full" || view === "lattice";
  const showConnect = view === "full" || view === "connect";

  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const orbSceneRef = useRef<THREE.Scene | null>(null);
  const orbCameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const orbRendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const orbMeshRef = useRef<THREE.Group | null>(null);

  const animationId = useRef<number>();
  const gateLoopId = useRef<number>();
  const rotationRef = useRef<number>(0);
  const baseRotationRef = useRef<number>(0.0003);

  const drawAlphaChart = useCallback(() => {
    const svg = document.getElementById("alpha-chart") as SVGSVGElement | null;
    if (!svg) return;
    const tooltip = tooltipRef.current;
    const width = svg.clientWidth || 800;
    const height = svg.clientHeight || 400;
    const padding = 40;

    const points = alphaData.map((d, i) => {
      const x = (i / (alphaData.length - 1)) * (width - padding * 2) + padding;
      const progress = i / (alphaData.length - 1);
      const y = height - (padding + Math.pow(progress, 1.5) * (height - padding * 2.5));
      return { x, y, data: d };
    });

    const line = svg.querySelector("#chart-line");
    const fill = svg.querySelector("#chart-fill");
    const dotsGroup = svg.querySelector("#chart-dots");

    if (!line || !fill || !dotsGroup) return;

    let pathD = `M ${points[0].x} ${points[0].y}`;
    for (let i = 0; i < points.length - 1; i++) {
      const p0 = points[i];
      const p1 = points[i + 1];
      const midX = (p0.x + p1.x) / 2;
      pathD += ` C ${midX} ${p0.y}, ${midX} ${p1.y}, ${p1.x} ${p1.y}`;
    }
    line.setAttribute("d", pathD);
    const fillD = `${pathD} V ${height} H ${points[0].x} Z`;
    fill.setAttribute("d", fillD);

    dotsGroup.innerHTML = "";
    points.forEach((p) => {
      const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      circle.setAttribute("cx", p.x.toString());
      circle.setAttribute("cy", p.y.toString());
      circle.setAttribute("r", "4");
      circle.setAttribute("fill", "#22c55e");
      circle.setAttribute("class", "chart-dot transition-all duration-300");

      circle.addEventListener("mouseenter", () => {
        const rect = svg.getBoundingClientRect();
        let left = rect.left + p.x + 20;
        if (left + 320 > window.innerWidth) left = rect.left + p.x - 340;

        if (tooltip) {
          tooltip.style.left = `${left}px`;
          tooltip.style.top = `${rect.top + p.y - 100}px`;
          tooltip.style.opacity = "1";
        }
        if (tooltipDateRef.current) tooltipDateRef.current.innerText = p.data.date;
        if (tooltipDescRef.current) tooltipDescRef.current.innerText = p.data.pred;
        if (tooltipPerfRef.current) tooltipPerfRef.current.innerText = p.data.ret;
      });

      circle.addEventListener("mouseleave", () => {
        if (tooltip) tooltip.style.opacity = "0";
      });

      dotsGroup.appendChild(circle);
    });

    if (timelineRef.current) {
      timelineRef.current.innerHTML = alphaData
        .map(
          (d) => `
          <a href="${d.link}" target="_blank" class="min-w-[260px] glass-panel p-4 flex flex-col justify-between hover:bg-white/5 transition-colors group cursor-pointer border border-white/5 no-underline shrink-0">
            <div>
              <div class="flex justify-between items-start mb-3">
                <div class="flex items-center gap-2">
                  <div class="w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center text-[10px] text-white border border-white/10">DB</div>
                  <div>
                    <span class="text-[11px] font-bold text-white block">@DigiBearFund <span class="text-blue-400">✓</span></span>
                    <span class="text-[10px] text-zinc-500 block">${d.date}</span>
                  </div>
                </div>
                <svg class="w-4 h-4 text-zinc-600 group-hover:text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
              </div>
              <p class="text-[12px] text-zinc-300 leading-snug mb-3 font-sans">${d.pred}</p>
            </div>
            <div class="pt-3 border-t border-white/10 flex justify-between items-center">
              <span class="text-[10px] text-zinc-500 font-mono">${d.asset}</span>
              <span class="font-mono text-sm text-green-400 font-bold">${d.ret}</span>
            </div>
          </a>
        `,
        )
        .join("");
    }
  }, []);

  const initOrb = useCallback(() => {
    const container = orbContainerRef.current;
    if (!container || container.childElementCount > 0) return;

    const orbScene = new THREE.Scene();
    const orbCamera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    orbCamera.position.z = 2.2;

    const orbRenderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    orbRenderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(orbRenderer.domElement);

    const geometry = new THREE.IcosahedronGeometry(1, 10);
    const material = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
      blending: THREE.AdditiveBlending,
    });

    const coreGeo = new THREE.IcosahedronGeometry(0.6, 2);
    const coreMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.8 });

    const orbMesh = new THREE.Group();
    const wireframe = new THREE.Mesh(geometry, material);
    const core = new THREE.Mesh(coreGeo, coreMat);

    orbMesh.add(wireframe);
    orbMesh.add(core);
    orbScene.add(orbMesh);

    orbSceneRef.current = orbScene;
    orbCameraRef.current = orbCamera;
    orbRendererRef.current = orbRenderer;
    orbMeshRef.current = orbMesh;
  }, []);

  useEffect(() => {
    const container = canvasRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.002);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 30;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const geometry = new THREE.BufferGeometry();
    const pos = new Float32Array(800 * 3);
    for (let i = 0; i < pos.length; i++) pos[i] = (Math.random() - 0.5) * 100;
    geometry.setAttribute("position", new THREE.BufferAttribute(pos, 3));

    const particles = new THREE.Points(
      geometry,
      new THREE.PointsMaterial({ size: 0.15, color: 0xffffff, transparent: true, opacity: 0.6 }),
    );
    particlesRef.current = particles;
    scene.add(particles);

    const animate = () => {
      animationId.current = requestAnimationFrame(animate);
      particles.rotation.y += baseRotationRef.current;

      const orb = orbMeshRef.current;
      const orbRenderer = orbRendererRef.current;
      if (orb && orbRenderer && orbSceneRef.current && orbCameraRef.current) {
        orb.rotation.y += 0.02;
        orb.rotation.z += 0.01;
        const time = Date.now() * 0.002;
        const voiceActive = document.getElementById("voice-btn")?.classList.contains("active-voice");
        const intensity = voiceActive ? 0.2 : 0.05;
        const scale = 1 + Math.sin(time * 2) * intensity + Math.cos(time * 5) * (intensity / 2);
        orb.scale.set(scale, scale, scale);
        orbRenderer.render(orbSceneRef.current, orbCameraRef.current);
      }

      renderer.render(scene, camera);
    };

    animate();

    const onResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", onResize);

    return () => {
      if (animationId.current) cancelAnimationFrame(animationId.current);
      if (gateLoopId.current) cancelAnimationFrame(gateLoopId.current);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
    };
  }, []);

  const startGateLoop = useCallback(() => {
    const loop = () => {
      if (!gateOpen) return;
      rotationRef.current = (rotationRef.current + 3) % 360;
      if (ringRef.current) ringRef.current.style.transform = `rotate(${rotationRef.current}deg)`;
      gateLoopId.current = requestAnimationFrame(loop);
    };
    loop();
  }, [gateOpen]);

  useEffect(() => {
    drawAlphaChart();
    window.addEventListener("resize", drawAlphaChart);
    return () => window.removeEventListener("resize", drawAlphaChart);
  }, [drawAlphaChart]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("active");
          else entry.target.classList.remove("active");
        });
      },
      { threshold: 0.15 },
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (view === "full") return;
    const targetId = view === "vision" ? "vision" : view;
    const timer = window.setTimeout(() => {
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 150);
    return () => window.clearTimeout(timer);
  }, [view]);

  useEffect(() => {
    const interval = setInterval(() => {
      setClock(new Date().toISOString().split("T")[1].replace("Z", ""));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (gateOpen) {
      baseRotationRef.current = 0.002;
      const material = particlesRef.current?.material as THREE.PointsMaterial | undefined;
      if (material) material.color.setRGB(0.6, 0.3, 1);
      startGateLoop();
    } else {
      baseRotationRef.current = 0.0003;
      if (gateLoopId.current) cancelAnimationFrame(gateLoopId.current);
      const material = particlesRef.current?.material as THREE.PointsMaterial | undefined;
      if (material) material.color.setRGB(1, 1, 1);
    }
  }, [gateOpen, startGateLoop]);

  const closeGate = useCallback(() => {
    setGateOpen(false);
    setSyncCount(0);
  }, []);

  const grantAccess = useCallback(() => {
    if (gateLoopId.current) cancelAnimationFrame(gateLoopId.current);
    setTimeout(() => {
      closeGate();
      setConsoleOpen(true);
      initOrb();
    }, 800);
  }, [closeGate, initOrb]);

  const attemptSync = useCallback(() => {
    const diff = Math.min(Math.abs(rotationRef.current - 0), Math.abs(rotationRef.current - 360));
    if (diff < 30) {
      setSyncCount((prev) => {
        const next = prev + 1;
        if (next >= 3) grantAccess();
        return next;
      });
    } else {
      setSyncCount(0);
    }
  }, [grantAccess]);

  const requestAccess = useCallback(() => {
    if (consoleOpen) return;
    rotationRef.current = 0;
    setSyncCount(0);
    setGateOpen(true);
  }, [consoleOpen]);

  const toggleVoice = useCallback(() => {
    const btn = document.getElementById("voice-btn");
    btn?.classList.toggle("active-voice");
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (gateOpen && e.code === "Space") {
        e.preventDefault();
        attemptSync();
      }
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [attemptSync, gateOpen]);

  const renderProjectModal = useMemo(() => {
    if (!selectedProject) return null;
    const p = projects[selectedProject];
    return (
      <div id="project-modal" className="fixed inset-0 z-[70] flex items-center justify-center p-4">
        <div onClick={() => setSelectedProject(null)} className="absolute inset-0 bg-black/90 backdrop-blur-sm" />
        <div className="relative w-full max-w-4xl bg-[#050505] border border-white/10 shadow-2xl max-h-[85vh] overflow-y-auto flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 bg-zinc-900 border-r border-white/5 relative min-h-[200px]">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 border border-white/10 rounded-full animate-spin duration-[10s] border-dashed" />
            </div>
            <div className="absolute bottom-6 left-6">
              <span className="font-mono text-[10px] text-purple-400 uppercase tracking-widest block mb-1">{p.cat}</span>
              <h2 className="text-2xl font-light text-white leading-tight">{p.title}</h2>
            </div>
          </div>
          <div className="flex-1 p-8 md:p-12 space-y-8">
            <button onClick={() => setSelectedProject(null)} className="absolute top-6 right-6 text-zinc-500 hover:text-white">✕</button>
            <div>
              <h3 className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-4">Brief</h3>
              <p className="text-zinc-300 font-light leading-relaxed">{p.desc}</p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-4">Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="px-2 py-1 border border-white/10 text-xs text-zinc-400 bg-white/5">{s}</span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-4">Impact</h3>
                <ul className="space-y-2 text-sm text-zinc-400 font-mono">
                  {p.impact.map((i) => (
                    <li key={i}>&gt; {i}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }, [selectedProject]);

  return (
    <div className="antialiased selection:bg-purple-500 selection:text-white min-h-screen">
      <div id="canvas-container" ref={canvasRef} className="canvas-container" />

      <nav className="fixed top-0 w-full z-40 border-b border-white/5 bg-black/50 backdrop-blur-md transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-2 h-8 bg-white group-hover:scale-y-125 transition-transform duration-300 bg-gradient-to-b from-white to-purple-500" />
            <span className="font-mono text-sm tracking-[0.2em] font-bold uppercase text-white">GenerativeJesse</span>
          </div>

          <div className="hidden md:flex gap-12">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `text-xs ${isActive ? "text-white" : "text-zinc-400"} hover:text-white transition-colors uppercase tracking-widest font-sans`
              }
            >
              Vision
            </NavLink>
            <NavLink
              to="/alpha"
              className={({ isActive }) =>
                `text-xs ${isActive ? "text-green-400" : "text-zinc-400"} hover:text-white transition-colors uppercase tracking-widest font-sans`
              }
            >
              Alpha
            </NavLink>
            <NavLink
              to="/lattice"
              className={({ isActive }) =>
                `text-xs ${isActive ? "text-white" : "text-zinc-400"} hover:text-white transition-colors uppercase tracking-widest font-sans`
              }
            >
              Lattice
            </NavLink>
            <NavLink
              to="/connect"
              className={({ isActive }) =>
                `text-xs ${isActive ? "text-white" : "text-zinc-400"} hover:text-white transition-colors uppercase tracking-widest font-sans`
              }
            >
              Connect
            </NavLink>
            <NavLink
              to="/todo"
              className={({ isActive }) =>
                `text-xs ${isActive ? "text-purple-300" : "text-zinc-400"} hover:text-white transition-colors uppercase tracking-widest font-sans`
              }
            >
              To Do
            </NavLink>
          </div>

          <div className="flex items-center gap-6">
            <button onClick={requestAccess} className="group flex items-center gap-3 px-4 py-2 border border-white/5 bg-black/50 hover:bg-white/5 hover:border-purple-500/30 transition-all cursor-pointer">
              <div className="flex flex-col items-end">
                <span className="font-mono text-[9px] text-zinc-600 uppercase tracking-widest group-hover:text-purple-400 transition-colors">Protocol</span>
                <span className="font-mono text-xs text-zinc-400 uppercase tracking-widest font-bold group-hover:text-white transition-colors">HANDSHAKE // REQ</span>
              </div>
              <div className="w-2 h-2 bg-purple-600 rounded-full animate-pulse shadow-[0_0_15px_rgba(147,51,234,0.5)]" />
            </button>
          </div>
        </div>
      </nav>

      <main id="main-content" className={`transition-opacity duration-500 ${gateOpen ? "main-blur" : ""}`}>
        {showVision && (
          <section id="vision" className="relative min-h-screen flex flex-col justify-center px-6 pt-20">
            <div className="max-w-7xl mx-auto w-full z-10">
              <div className="max-w-4xl">
                <div className="inline-flex items-center gap-3 border border-white/10 px-4 py-2 bg-black/30 backdrop-blur-sm mb-8 hero-animate" style={{ animationDelay: "0ms" }}>
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500" />
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-purple-300">System Architect V4.0</span>
                </div>

                <h1 className="text-6xl md:text-8xl font-medium leading-[0.95] tracking-tight text-white mb-8 hero-animate" style={{ animationDelay: "200ms" }}>
                  Systems <br />
                  <span className="text-zinc-600">Reimagined.</span>
                </h1>

                <p className="max-w-xl text-lg text-zinc-400 font-light leading-relaxed mb-12 hero-animate" style={{ animationDelay: "400ms" }}>
                  I see the board. I build the tools. From <strong className="text-white">algorithmic trading</strong> models to <strong className="text-white">spatial computing</strong> memories.
                  <br />
                  <br />
                  I am Jesse. This is not a portfolio. It is a generative archive of my work in Finance, Blockchain, and Tech Strategy.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 hero-animate" style={{ animationDelay: "600ms" }}>
                  <button onClick={requestAccess} className="group relative bg-white text-black font-mono text-xs px-8 py-4 uppercase font-bold tracking-widest flex items-center justify-center gap-3 overflow-hidden">
                    <span className="relative z-10 flex items-center gap-2">
                      Initialize Agent <span className="animate-pulse">✨</span>
                    </span>
                    <div className="absolute inset-0 bg-purple-200 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 z-0" />
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        {showAlpha && (
          <section id="alpha" className="py-24 px-6 border-t border-white/5 bg-black/40 backdrop-blur-sm relative z-20">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 flex flex-col md:flex-row justify-between items-end reveal">
              <div>
                <span className="font-mono text-xs text-green-500 uppercase tracking-widest mb-4 block">Market Prescience</span>
                <h2 className="text-4xl font-medium tracking-tight text-white">
                  The Alpha <span className="text-zinc-700">Index</span>
                </h2>
              </div>
              <div className="font-mono text-xs text-right text-zinc-500">
                CONFIDENCE: 99.9%
                <br />
                DIRECTION: UP_ONLY
                <br />
                VALIDATION: PUBLIC_LEDGER
              </div>
            </div>

            <div className="relative w-full h-[400px] border border-white/10 bg-black/50 mb-8 glass-panel reveal group" id="chart-container">
              <svg id="alpha-chart" className="w-full h-full" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="rgba(34, 197, 94, 0.2)" />
                    <stop offset="100%" stopColor="rgba(34, 197, 94, 0)" />
                  </linearGradient>
                </defs>
                <line x1="0" y1="25%" x2="100%" y2="25%" stroke="rgba(255,255,255,0.05)" />
                <line x1="0" y1="50%" x2="100%" y2="50%" stroke="rgba(255,255,255,0.05)" />
                <line x1="0" y1="75%" x2="100%" y2="75%" stroke="rgba(255,255,255,0.05)" />
                <path id="chart-line" fill="none" stroke="#22c55e" strokeWidth="3" vectorEffect="non-scaling-stroke" />
                <path id="chart-fill" fill="url(#chartGradient)" style={{ opacity: 0.5 }} />
                <g id="chart-dots" />
              </svg>

              <div id="chart-tooltip" ref={tooltipRef} className="chart-tooltip">
                <div className="tweet-header">
                  <div className="tweet-avatar">J</div>
                  <div className="tweet-meta">
                    <div className="tweet-name">
                      Jesse <span className="text-blue-400 ml-1">✓</span>
                    </div>
                    <div className="tweet-handle">
                      @DigiBearFund · <span ref={tooltipDateRef}>Date</span>
                    </div>
                  </div>
                </div>
                <div className="tweet-body" ref={tooltipDescRef}>
                  Prediction text goes here...
                </div>
                <div className="tweet-metrics">
                  <span className="text-green-400 font-bold" ref={tooltipPerfRef}>
                    +0%
                  </span>
                  <span>Validated</span>
                </div>
              </div>
            </div>

          <div className="flex overflow-x-auto gap-4 pb-4 custom-scrollbar reveal" id="timeline-container" ref={timelineRef} />
        </div>
      </section>

        )}

        {showLattice && (
        <section id="lattice" className="py-32 px-6 relative z-10 bg-gradient-to-b from-transparent to-black">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal">
              <div>
                <span className="font-mono text-xs text-purple-500 uppercase tracking-widest mb-4 block">The Lattice</span>
                <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white">
                  Experience <span className="text-zinc-700">Nodes</span>
                </h2>
              </div>
              <p className="font-mono text-xs text-zinc-500 mt-4 md:mt-0 max-w-xs leading-relaxed text-right hidden md:block">
                ARCHIVE_SIZE: 10TB+
                <br />
                DATA_SOURCES: ZILLOW, NYSE, ONCHAIN
                <br />
                STATUS: INDEXED
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 h-auto lg:h-[600px]">
              <div
                onClick={() => setSelectedProject("ttt")}
                className="md:col-span-2 row-span-2 glass-panel p-8 flex flex-col justify-between group reveal relative overflow-hidden cursor-pointer hover:border-purple-500/50 transition-colors"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-10 h-10 border border-white/20 flex items-center justify-center mb-6 bg-black/50">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="square" strokeWidth="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-light text-white mb-2">Context Compiler (TTT)</h3>
                  <p className="text-sm text-zinc-400 font-light leading-relaxed max-w-sm">
                    TikTok Transcriber & Summarizer. A PWA that extracts value from short-form video using AssemblyAI and Gemini Vectorization.
                  </p>
                </div>
                <div className="relative h-48 w-full mt-8 border border-white/5 bg-black/40 overflow-hidden flex items-end justify-center gap-1">
                  <div className="w-full h-[1px] bg-zinc-800 absolute bottom-1/2" />
                  <div className="w-2 bg-purple-500/80 h-12 animate-[pulse_2s_infinite]" />
                  <div className="w-2 bg-white/40 h-24 animate-[pulse_1.5s_infinite]" />
                  <div className="w-2 bg-purple-500/40 h-32 animate-[pulse_3s_infinite]" />
                  <div className="w-2 bg-white/60 h-16 animate-[pulse_2.5s_infinite]" />
                </div>
              </div>

              <div
                onClick={() => setSelectedProject("memory")}
                className="glass-panel p-8 flex flex-col justify-center items-center text-center reveal cursor-pointer hover:border-blue-500/50 transition-colors"
                style={{ transitionDelay: "100ms" }}
              >
                <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-4">Vision Pro</span>
                <div className="w-24 h-24 border border-white/10 rounded-full flex items-center justify-center relative">
                  <div className="absolute inset-0 border-t border-blue-500 rounded-full animate-spin" />
                  <span className="text-2xl">🧠</span>
                </div>
                <div className="mt-6 text-xs font-mono text-blue-400">MEMORY_LANE_SPATIAL</div>
              </div>

              <div
                onClick={() => setSelectedProject("capone")}
                className="glass-panel p-6 flex flex-col justify-between group reveal cursor-pointer hover:border-green-500/50 transition-colors"
                style={{ transitionDelay: "150ms" }}
              >
                <div className="font-mono text-[10px] bg-zinc-900 p-2 text-zinc-400 overflow-hidden">
                  $70M_NPV_SAVED
                  <br />
                  RISK_SLOPING
                  <br />
                  OCC_AUDIT_PASS
                </div>
                <div>
                  <h3 className="text-lg font-light text-white mt-4">Enterprise Strategy</h3>
                  <p className="text-[10px] text-zinc-500 mt-2">Capital One / Risk Mgmt</p>
                </div>
              </div>

              <div
                onClick={() => setSelectedProject("orchestration")}
                className="lg:col-span-1 lg:row-span-2 glass-panel p-8 flex flex-col justify-between reveal cursor-pointer hover:border-orange-500/50 transition-colors"
                style={{ transitionDelay: "200ms" }}
              >
                <div>
                  <div className="w-10 h-10 border border-white/20 flex items-center justify-center mb-6 bg-black/50">
                    <span className="font-mono text-white text-lg">AI</span>
                  </div>
                  <h3 className="text-xl font-light text-white mb-2">Orchestration Layer</h3>
                  <p className="text-sm text-zinc-400 font-light leading-relaxed">
                    Custom dual-agent architecture (AOC/AOL) running on Mac Mini infrastructure. Vectorized document retrieval.
                  </p>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-500 border-b border-white/5 pb-2">
                    <span>AGENT_LOCAL</span>
                    <span className="text-orange-400">ACTIVE</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-500 border-b border-white/5 pb-2">
                    <span>AGENT_CLOUD</span>
                    <span className="text-orange-400">ACTIVE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        )}

        {showConnect && (
        <footer id="connect" className="border-t border-white/10 bg-black py-20 px-6 relative z-10">
          <div className="max-w-7xl mx-auto flex justify-between items-end">
            <div>
              <span className="font-mono text-xl tracking-[0.2em] font-bold uppercase text-white block mb-6">GenerativeJesse</span>
              <p className="text-sm text-zinc-500 font-light leading-relaxed max-w-sm">
                Built for the future.
                <br />
                Gatekept by choice.
                <br />
                Revealed by Agent.
              </p>
            </div>
            <span className="font-mono text-[10px] text-zinc-700 uppercase">© 2025 GenerativeJesse.</span>
          </div>
        </footer>
        )}
      </main>

      {gateOpen && (
        <div id="gate-overlay" className="fixed inset-0 z-[60] flex flex-col items-center justify-center">
          <div className="absolute inset-0 bg-purple-900/5 pointer-events-none" />
          <div className="relative z-10 w-full flex flex-col items-center gap-12 max-w-lg p-6">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 border border-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse" id="gate-icon">
                <svg className="w-5 h-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="square" strokeWidth="1.5" d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <h2 className="text-2xl font-mono uppercase tracking-[0.2em] text-white" id="gate-title">
                System Handshake
              </h2>
              <p className="text-xs font-mono text-purple-400 tracking-widest" id="gate-status">
                PROTOCOL: SYNC_REQUIRED
              </p>
            </div>
            <div className="relative w-64 h-64 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-white/10" />
              <div id="gate-ring" ref={ringRef} className="absolute inset-2 gate-ring w-[240px] h-[240px]" />
              <div className="absolute top-0 w-1 h-4 bg-white shadow-[0_0_15px_white]" />
              <div className="flex flex-col items-center gap-2">
                <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">Sync</span>
                <span id="sync-count" className="font-mono text-4xl font-bold text-white">{syncCount}/3</span>
              </div>
            </div>
            <div className="w-full space-y-6">
              <button
                onClick={attemptSync}
                className="w-full bg-transparent border border-white/20 text-white font-mono text-sm py-4 uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all"
              >
                Initiate [SPACE]
              </button>
              <div className="relative group">
                <input
                  type="text"
                  placeholder="ADMIN_OVERRIDE"
                  className="w-full bg-black/50 border-b border-white/10 p-2 text-center font-mono text-xs text-white placeholder-zinc-700 focus:outline-none focus:border-purple-500 transition-colors uppercase tracking-widest"
                  onKeyUp={(e) => e.key === "Enter" && grantAccess()}
                />
              </div>
            </div>
            <button onClick={closeGate} className="mt-8 text-zinc-600 hover:text-zinc-400 font-mono text-[10px] uppercase tracking-widest">
              Abort
            </button>
          </div>
        </div>
      )}

      {consoleOpen && (
        <div id="console-modal" className="fixed inset-0 z-50 flex items-center justify-center bg-black/95">
          <button
            onClick={() => setConsoleOpen(false)}
            className="absolute top-6 right-6 text-zinc-500 hover:text-white font-mono z-50 flex items-center gap-2 group"
          >
            <span className="text-xs uppercase opacity-0 group-hover:opacity-100 transition-opacity">Disconnect</span>
            <div className="w-8 h-8 border border-zinc-700 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
              ×
            </div>
          </button>
          <div className="w-full h-full max-w-7xl max-h-[90vh] flex flex-col md:flex-row relative">
            <div className="w-full md:w-80 border-r border-white/10 bg-black/50 flex flex-col p-6 gap-6 backdrop-blur-md">
              <div className="mb-4">
                <span className="font-mono text-[10px] uppercase text-zinc-600 tracking-widest block mb-2">Connected Profile</span>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-900 to-black border border-purple-500 flex items-center justify-center font-bold text-xs text-white">
                    GEN
                  </div>
                  <div>
                    <span className="text-sm font-mono text-white block">Jesse</span>
                    <span className="text-[10px] text-zinc-500 block">Systems Architect</span>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-center items-center border-t border-b border-white/10 py-6 relative overflow-hidden">
                <div id="orb-container" ref={orbContainerRef} className="w-full h-full relative flex items-center justify-center" />
                <span className="font-mono text-[10px] text-purple-400 animate-pulse mt-4 absolute bottom-4">LISTENING...</span>
              </div>
              <div className="mt-auto">
                <span className="font-mono text-[10px] uppercase text-zinc-600 tracking-widest block mb-2">Live Logs</span>
                <div id="system-logs" className="h-32 overflow-hidden flex flex-col justify-end gap-1 font-mono text-[9px] text-zinc-500">
                  <div>&gt; System Initialized.</div>
                  <div>&gt; Agent Listening...</div>
                </div>
              </div>
            </div>
            <div className="flex-1 bg-black/40 backdrop-blur-xl relative flex flex-col m-4 md:m-0 md:ml-4 border border-white/10">
              <div className="h-12 border-b border-white/10 flex items-center justify-between px-6 bg-white/5">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 animate-pulse" />
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-white">Digital Twin Online</span>
                </div>
                <span className="font-mono text-[10px] text-zinc-500" id="clock-display">
                  {clock}
                </span>
              </div>
              <div id="chat-history" className="flex-1 overflow-y-auto space-y-6 p-6 custom-scrollbar">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-purple-500/20 border border-purple-500/50 flex items-center justify-center text-[10px] font-mono text-purple-300 shrink-0">
                    AI
                  </div>
                  <div className="space-y-3">
                    <p className="text-sm text-zinc-300 font-light leading-relaxed">
                      Hello. I am Jesse's generative agent. I have access to his complete history in <span className="text-white">Finance</span>, <span className="text-white">Engineering</span>, and <span className="text-white">System Architecture</span>.
                    </p>
                    <p className="text-sm text-zinc-300 font-light leading-relaxed">
                      I can show you his <span className="text-white hover:underline cursor-pointer" onClick={() => setSelectedProject("orchestration")}>Orchestration Layer</span>, discuss his <span className="text-white hover:underline cursor-pointer" onClick={() => setSelectedProject("capone")}>Strategic Work</span>, or explain his <span className="text-white hover:underline cursor-pointer" onClick={() => setSelectedProject("memory")}>Vision Pro</span> builds. Where shall we begin?
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6 border-t border-white/10 bg-black/50">
                <div className="relative">
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-white/20 p-4 pr-12 text-sm text-white font-mono focus:outline-none focus:border-purple-500 transition-colors placeholder-zinc-700"
                    placeholder="Ask about projects, stack, or vision..."
                    autoComplete="off"
                  />
                  <button
                    onClick={toggleVoice}
                    className="absolute right-2 top-3 w-8 h-8 flex items-center justify-center text-zinc-500 hover:text-white transition-colors"
                    id="voice-btn"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="square" strokeWidth="1.5" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {renderProjectModal}
    </div>
  );
};

export default Landing;
