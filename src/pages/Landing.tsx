import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { NavLink } from "react-router-dom";

const alphaCalls = [
  {
    date: "Dec 28 '22",
    asset: "$XLM",
    thesis: "Bridge for CBDCs; liquidity flywheel via USDC rails.",
    outcome: "+1,004%",
    link: "https://x.com/DigiBearFund/status/1608152345678901234",
  },
  {
    date: "Jan 10 '23",
    asset: "$SOL",
    thesis: "Ethereum alternative with community-driven velocity; reclaim $50 EOY 2023.",
    outcome: "+2,453%",
    link: "https://x.com/DigiBearFund/status/1612856789012345678",
  },
  {
    date: "Feb 22 '23",
    asset: "$COIN",
    thesis: "Exchange as bank of last resort; upside in decoupling from BTC cycles.",
    outcome: "+495%",
    link: "https://x.com/DigiBearFund/status/1628457922802905088",
  },
  {
    date: "Aug 24 '23",
    asset: "$HOOD",
    thesis: "Product velocity + routing advantages point to ATH retest by 2026.",
    outcome: "+1,365%",
    link: "https://x.com/DigiBearFund/status/1694748059819733371",
  },
  {
    date: "Dec 10 '23",
    asset: "$USDC",
    thesis: "Future FED hub; Coinbase as distribution motor.",
    outcome: "+146%",
    link: "https://x.com/DigiBearFund/status/1733669596085858364",
  },
  {
    date: "Apr 01 '24",
    asset: "$AVAX",
    thesis: "Institutional settlement wins (JPM/Visa) lock multiyear upside.",
    outcome: "+400%",
    link: "https://x.com/DigiBearFund/status/1774730244139757926",
  },
  {
    date: "Jul 12 '24",
    asset: "$COIN",
    thesis: "Long COIN to outperform the S&P by 2025+.",
    outcome: "+60%",
    link: "https://x.com/DigiBearFund/status/1811623744856588710",
  },
];

const builds = [
  {
    title: "Context Compiler (TTT)",
    lane: "Consumer / AI",
    summary:
      "Pulls audio from Shorts/TikTok, vectorizes with Gemini, and builds searchable knowledge slices so agents never lose signal.",
    stack: "PWA · AssemblyAI · Gemini · S3",
  },
  {
    title: "Memory Lane",
    lane: "Spatial Computing",
    summary: "Vision Pro 'mind palace' with Gaussian splats and voice-driven 3D timelines.",
    stack: "SwiftUI · RealityKit · Polycam · Gaussian Splats",
  },
  {
    title: "AOC/AOL Orchestration",
    lane: "Systems Architecture",
    summary: "Dual-agent layer: Agent of Local handles file/CLI, Agent of Cloud handles web/API. Synced through Redis + vector DB.",
    stack: "Python · Redis · Vector DB · Mac Mini",
  },
  {
    title: "Risk Sloping (Capital One)",
    lane: "Enterprise",
    summary: "Occupation Standardization program during COVID; $70M NPV yearly savings and OCC-audit ready dashboards.",
    stack: "SQL · Tableau · Agile Delivery",
  },
];

const highlights = [
  {
    label: "Signals hit-rate",
    value: "7/7",
    detail: "Public alpha calls with receipts and outcomes logged in the ledger.",
  },
  {
    label: "Shipping cadence",
    value: "Weekly",
    detail: "Live demos, agent scripts, and spatial prototypes pushed on a fixed drumbeat.",
  },
  {
    label: "Operating lanes",
    value: "Finance · AI · Spatial",
    detail: "Strategy in capital markets, architecture for agents, and 3D computing for story and trust.",
  },
];

const careerMoments = [
  {
    year: "2025",
    title: "Generative Systems Architect",
    note: "Building public alpha ledger, dual-agent stack, and immersive portfolio surfaces.",
  },
  {
    year: "2022-2024",
    title: "Founder @ DigiBear Fund",
    note: "Thesis-driven calls on L1s, exchanges, and stablecoin rails with transparent receipts.",
  },
  {
    year: "2020-2022",
    title: "Capital One",
    note: "Risk sloping + automation program delivering $70M NPV savings across regulated ops.",
  },
];

type LandingView = "full" | "vision" | "alpha" | "signals" | "builds" | "lattice" | "career" | "connect" | "about";

const sectionByView: Record<LandingView, string> = {
  full: "hero",
  vision: "vision",
  about: "vision",
  alpha: "signals",
  signals: "signals",
  builds: "builds",
  lattice: "builds",
  career: "career",
  connect: "connect",
};

const ThreeBackdrop = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef<number>();

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 26;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    const starGeo = new THREE.BufferGeometry();
    const starPositions = new Float32Array(1200 * 3);
    for (let i = 0; i < starPositions.length; i++) {
      starPositions[i] = (Math.random() - 0.5) * 120;
    }
    starGeo.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
    const starMaterial = new THREE.PointsMaterial({ color: 0x8b5cf6, size: 0.35, transparent: true, opacity: 0.5 });
    const stars = new THREE.Points(starGeo, starMaterial);
    scene.add(stars);

    const glowGeo = new THREE.IcosahedronGeometry(8, 3);
    const glowMat = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true, transparent: true, opacity: 0.12 });
    const glow = new THREE.Mesh(glowGeo, glowMat);
    scene.add(glow);

    const light = new THREE.PointLight(0x7c3aed, 2, 80);
    light.position.set(10, 10, 20);
    scene.add(light);

    const tick = () => {
      frameRef.current = requestAnimationFrame(tick);
      stars.rotation.y += 0.0008;
      glow.rotation.x += 0.0012;
      glow.rotation.y += 0.0009;
      renderer.render(scene, camera);
    };

    tick();

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="fixed inset-0 -z-10" aria-hidden />;
};

const Landing = ({ view = "full" }: { view?: LandingView }) => {
  const targetSection = sectionByView[view];

  const navItems = useMemo(
    () => [
      { href: "#vision", label: "Vision" },
      { href: "#signals", label: "Alpha" },
      { href: "#builds", label: "Lattice" },
      { href: "#career", label: "History" },
      { href: "#connect", label: "Connect" },
    ],
    [],
  );

  useEffect(() => {
    if (view === "full") return;
    const timer = window.setTimeout(() => {
      const el = document.getElementById(targetSection);
      el?.scrollIntoView({ behavior: "smooth" });
    }, 180);
    return () => window.clearTimeout(timer);
  }, [targetSection, view]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#050505] to-black text-white">
      <ThreeBackdrop />

      <header className="sticky top-0 z-20 border-b border-white/10 bg-black/60 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <div className="h-8 w-1.5 bg-gradient-to-b from-white to-purple-500" />
            <span className="font-mono text-xs tracking-[0.3em] uppercase">GenerativeJesse</span>
          </div>
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-xs uppercase tracking-widest text-zinc-400 hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>
          <NavLink
            to="/connect"
            className="rounded-full border border-purple-500/40 px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-purple-200 hover:border-purple-300 hover:text-white"
          >
            Hire Window: Now
          </NavLink>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-6 py-16 md:py-24">
        <section id="hero" className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div className="space-y-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-purple-300">Systems Architect · Alpha Builder</p>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
              Intentional tech, transparent signals, and immersive stories for decision makers.
            </h1>
            <p className="text-lg text-zinc-300">
              GenerativeJesse blends capital-market instincts with AI agents and spatial computing. Every surface on this site is
              a live artifact—no placeholders, no fluff.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#builds"
                className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition hover:-translate-y-0.5"
              >
                View the lattice
              </a>
              <a
                href="#signals"
                className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white transition hover:border-purple-400"
              >
                See the receipts
              </a>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <p className="text-xs uppercase tracking-[0.2em] text-purple-200">{item.label}</p>
                  <p className="mt-2 text-2xl font-semibold">{item.value}</p>
                  <p className="mt-1 text-sm text-zinc-400">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(124,58,237,0.2),transparent),radial-gradient(circle_at_80%_0%,rgba(52,211,153,0.25),transparent)]" />
            <div className="relative space-y-4">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-300">Stack in motion</p>
              <div className="space-y-3 text-sm text-zinc-200">
                <div className="flex items-center justify-between rounded-xl border border-white/10 bg-black/40 px-4 py-3">
                  <span>Agent Orchestration</span>
                  <span className="text-purple-300">AOC ↔ AOL</span>
                </div>
                <div className="flex items-center justify-between rounded-xl border border-white/10 bg-black/40 px-4 py-3">
                  <span>Spatial Storytelling</span>
                  <span className="text-emerald-300">Vision Pro</span>
                </div>
                <div className="flex items-center justify-between rounded-xl border border-white/10 bg-black/40 px-4 py-3">
                  <span>Capital Market Proof</span>
                  <span className="text-blue-300">Alpha Ledger</span>
                </div>
              </div>
              <p className="text-xs text-zinc-400">
                Built for hiring managers and founders who want conviction before Q1. Every link goes to a real signal.
              </p>
            </div>
          </div>
        </section>

        <section id="vision" className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="h-px w-10 bg-purple-400" />
            <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-purple-300">Operating thesis</p>
          </div>
          <h2 className="text-3xl font-semibold md:text-4xl">Strategy that ties markets, agents, and spatial UX together.</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <p className="text-sm text-zinc-400">Signals</p>
              <p className="mt-2 text-lg text-white">
                Transparent ledger of market calls with verifiable outcomes. The feed trains agent reasoning and trust.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <p className="text-sm text-zinc-400">Systems</p>
              <p className="mt-2 text-lg text-white">
                Dual-agent architecture that can execute locally or in cloud, with RAG-ready context and live tooling hooks.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <p className="text-sm text-zinc-400">Story</p>
              <p className="mt-2 text-lg text-white">
                Spatial and web experiences that surface proof without filler—designed for hiring committees and operators.
              </p>
            </div>
          </div>
        </section>

        <section id="signals" className="space-y-8">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="h-px w-10 bg-emerald-400" />
              <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-emerald-300">Alpha ledger</p>
            </div>
            <span className="text-xs text-zinc-400">Updated live as new calls land.</span>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {alphaCalls.map((call) => (
              <a
                key={call.link}
                href={call.link}
                target="_blank"
                rel="noreferrer"
                className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:border-emerald-400/50 hover:shadow-[0_20px_60px_rgba(16,185,129,0.15)]"
              >
                <div className="flex items-center justify-between text-xs text-zinc-400">
                  <span>{call.date}</span>
                  <span className="font-mono text-emerald-300">{call.outcome}</span>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <p className="text-lg font-semibold text-white">{call.asset}</p>
                  <span className="text-[11px] uppercase tracking-[0.2em] text-emerald-200">Receipt</span>
                </div>
                <p className="mt-3 text-sm text-zinc-300">{call.thesis}</p>
              </a>
            ))}
          </div>
        </section>

        <section id="builds" className="space-y-8">
          <div className="flex items-center gap-3">
            <div className="h-px w-10 bg-blue-400" />
            <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-blue-200">Lattice</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {builds.map((build) => (
              <div
                key={build.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur transition hover:-translate-y-1 hover:border-blue-300/50"
              >
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.25em] text-blue-200">
                  <span>{build.lane}</span>
                  <span className="text-white">{build.stack}</span>
                </div>
                <h3 className="mt-3 text-xl font-semibold">{build.title}</h3>
                <p className="mt-2 text-sm text-zinc-300">{build.summary}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="career" className="space-y-8">
          <div className="flex items-center gap-3">
            <div className="h-px w-10 bg-orange-400" />
            <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-orange-200">Trajectory</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {careerMoments.map((moment) => (
              <div
                key={moment.year}
                className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 via-black to-black p-5 shadow-inner"
              >
                <p className="text-xs uppercase tracking-[0.25em] text-orange-200">{moment.year}</p>
                <h4 className="mt-2 text-lg font-semibold">{moment.title}</h4>
                <p className="mt-2 text-sm text-zinc-300">{moment.note}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="connect"
          className="rounded-3xl border border-white/10 bg-gradient-to-r from-purple-600/30 via-black to-emerald-500/20 p-8 shadow-2xl"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-purple-100">Engagement</p>
              <h3 className="mt-2 text-2xl font-semibold">Hiring window is open. Let’s build the next season together.</h3>
              <p className="mt-2 text-sm text-zinc-200">
                Reach out for systems leadership, agent architecture, or to unlock the Alpha Ledger for your team.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:jesse@genai.systems"
                className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:-translate-y-0.5"
              >
                Email Jesse
              </a>
              <a
                href="https://x.com/DigiBearFund"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/30 px-4 py-2 text-sm font-semibold text-white transition hover:border-purple-200"
              >
                @DigiBearFund
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Landing;
