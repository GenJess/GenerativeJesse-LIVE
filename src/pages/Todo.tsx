import { NavBarDemo } from "@/components/code.demo";
import { ClipboardList, Files, LineChart, Network, Sparkles, UserCheck, Zap } from "lucide-react";
import React from "react";

const statusStyles: Record<string, string> = {
  Needed: "bg-red-500/10 text-red-200 border border-red-500/40",
  "In Progress": "bg-amber-500/10 text-amber-200 border border-amber-500/40",
  Draft: "bg-blue-500/10 text-blue-200 border border-blue-500/40",
  Live: "bg-emerald-500/10 text-emerald-200 border border-emerald-500/40",
};

const sections = [
  {
    title: "Narrative & Signal",
    icon: Sparkles,
    description: "Lock in the Systems Architect V4.0 story so every surface tells the same high-trust narrative.",
    items: [
      {
        label: "Narrative spine (hero + elevator)",
        detail: "150-word positioning that bridges finance alpha, blockchain infra, and spatial computing. Aligns with 'Systems Reimagined' copy.",
        status: "Needed",
      },
      {
        label: "Visual kit",
        detail: "Headshot, logo/wordmark lockup, tokenized palette for glass panels, motion refs for purple/green energy aesthetic.",
        status: "Needed",
      },
      {
        label: "Gate/console voice",
        detail: "Microcopy + interaction script for the gate overlay and agent console so handshakes feel intentional (admin override, sync ritual).",
        status: "Draft",
      },
    ],
  },
  {
    title: "Alpha Index (Market Prescience)",
    icon: LineChart,
    description: "Populate the Alpha Stream with verifiable calls, receipts, and methodology so the upward chart is defensible.",
    items: [
      {
        label: "Prediction receipts",
        detail: "Tweet/X links, timestamps, and entry prices for $XLM, $SOL, $COIN, $HOOD, $USDC, $AVAX, plus any 2025 calls.",
        status: "In Progress",
      },
      {
        label: "Validation ledger",
        detail: "CSV/Notion export with realized % returns, benchmarks vs. S&P, on-chain or exchange screenshots for provenance.",
        status: "Needed",
      },
      {
        label: "Methodology blurb",
        detail: "100-word note on thesis generation: data sources (NYSE, Zillow, on-chain), risk controls, and how signals power the 'Public Ledger'.",
        status: "Needed",
      },
    ],
  },
  {
    title: "Project Case Studies (Lattice)",
    icon: Network,
    description: "Each node needs a crisp story: problem, stack, artifact, and measurable impact.",
    items: [
      {
        label: "Context Compiler (TTT)",
        detail: "Short demo clip, repo link or architecture diagram, and a 120-word case study (AssemblyAI + Gemini + vector search).",
        status: "In Progress",
      },
      {
        label: "Memory Lane (Vision Pro)",
        detail: "Screen recording of Gaussian Splat timeline flythrough, UX notes for voice commands, and hardware requirements.",
        status: "Needed",
      },
      {
        label: "AOC/AOL Orchestration",
        detail: "Dual-agent diagram, infra bill of materials (Mac Mini + Redis + vector DB), and an example end-to-end task run.",
        status: "Draft",
      },
      {
        label: "Risk Sloping (Capital One)",
        detail: "Before/after metrics for $70M NPV savings, OCC audit artifact, and 3-slide executive summary of the playbook.",
        status: "In Progress",
      },
    ],
  },
  {
    title: "Proof & Social Trust",
    icon: UserCheck,
    description: "Stack receipts so decision-makers trust the archive: testimonials, logos, and public talks.",
    items: [
      {
        label: "Testimonials + logos",
        detail: "1-2 quotes from Capital One / partners, light brand row for companies and protocols touched.",
        status: "Needed",
      },
      {
        label: "Press / talks",
        detail: "Links or clips of podcasts, conference slots, or AMAs that reinforce finance + AI credibility.",
        status: "Needed",
      },
      {
        label: "Community metrics",
        detail: "Follower counts for @DigiBearFund, newsletter size, Discord/Telegram highlights to surface momentum.",
        status: "Needed",
      },
    ],
  },
  {
    title: "Live Demos & Infra",
    icon: Zap,
    description: "Ship interactive proof so agents can showcase without breaking the experience.",
    items: [
      {
        label: "Agent scripts",
        detail: "FAQ prompts + safe answers for the console (projects, stack, alpha data), plus guardrails for admin override.",
        status: "Draft",
      },
      {
        label: "Video loops",
        detail: "15–30s silent loops for hero background and Lattice cards (PWA, spatial computing, orchestration).",
        status: "Needed",
      },
      {
        label: "Data hooks",
        detail: "Endpoint or JSON feed for Alpha Index entries so the chart and timeline hydrate from source of truth.",
        status: "In Progress",
      },
    ],
  },
];

const assetChecklist = [
  {
    title: "Primary artifacts",
    bullets: [
      "Resume PDF, LinkedIn, GitHub, @DigiBearFund profile links",
      "3–5 hero photos/headshots with consistent lighting",
      "Logo/mark in SVG + transparent PNG (light/dark)"
    ],
  },
  {
    title: "Project evidence",
    bullets: [
      "Screen recordings: Context Compiler, Memory Lane, Orchestration run, Risk Sloping dashboard",
      "Architecture diagrams (Mermaid/Figma) for each project",
      "Performance screenshots: trading calls, OCC audit, KPI deltas"
    ],
  },
  {
    title: "Research & writing",
    bullets: [
      "One-pagers or blog drafts on algorithmic trading framework, RAG/orchestration lessons, spatial computing stack",
      "Talk outlines + slide thumbnails for upcoming sessions",
      "CSV of Alpha Index entries for transparent ingestion"
    ],
  },
];

const Todo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#050505] to-black text-white">
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur">
        <NavBarDemo />
      </div>

      <main className="pt-28 pb-16 px-6 max-w-6xl mx-auto space-y-12">
        <header className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-white/10 bg-white/5 uppercase text-[11px] tracking-[0.2em] font-mono text-purple-200">
            <ClipboardList className="w-4 h-4" />
            To Do — Agent Burn List
          </div>
          <div className="space-y-3 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-semibold leading-tight">What we need to make this portfolio undeniable.</h1>
            <p className="text-zinc-400 text-lg leading-relaxed">
              This is the staging ground for agents. Ship the assets below to align the site with the full GenerativeJesse story—finance alpha, blockchain infrastructure, spatial computing, and the dual-agent orchestration layer.
            </p>
          </div>
        </header>

        <section className="grid gap-6 md:grid-cols-2">
          {sections.map((section) => (
            <div key={section.title} className="border border-white/10 bg-white/5 p-6 space-y-4">
              <div className="flex items-center gap-3">
                <section.icon className="w-10 h-10 p-2 border border-white/10 bg-black/60" />
                <div>
                  <h2 className="text-xl font-semibold">{section.title}</h2>
                  <p className="text-sm text-zinc-400 leading-relaxed">{section.description}</p>
                </div>
              </div>
              <div className="space-y-3">
                {section.items.map((item) => (
                  <div key={item.label} className="p-4 bg-black/40 border border-white/5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-semibold text-white">{item.label}</p>
                        <p className="text-sm text-zinc-400 leading-relaxed">{item.detail}</p>
                      </div>
                      <span className={`px-3 py-1 text-xs font-semibold uppercase tracking-wide ${statusStyles[item.status]}`}>
                        {item.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="border border-white/10 bg-white/5 p-6 space-y-4">
          <div className="flex items-center gap-3">
            <Files className="w-10 h-10 p-2 border border-white/10 bg-black/60" />
            <div>
              <h2 className="text-xl font-semibold">Asset intake list</h2>
              <p className="text-sm text-zinc-400 leading-relaxed">Drop these into a shared drive/Notion for ingestion. Agents will route them into the hero, Alpha Stream, and Lattice sections.</p>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {assetChecklist.map((bucket) => (
              <div key={bucket.title} className="p-4 bg-black/40 border border-white/5 space-y-2">
                <h3 className="font-semibold text-white">{bucket.title}</h3>
                <ul className="list-disc list-inside text-sm text-zinc-400 space-y-2">
                  {bucket.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="border border-white/10 bg-white/5 p-6 flex flex-col md:flex-row items-start gap-6">
          <div className="p-4 bg-black/40 border border-white/5">
            <div className="flex items-center gap-2 text-emerald-300 uppercase text-xs tracking-[0.2em] font-mono">
              <UserCheck className="w-4 h-4" />
              Agent Brief
            </div>
            <h3 className="text-2xl font-semibold mt-2">What success looks like</h3>
            <p className="text-sm text-zinc-400 leading-relaxed mt-3 max-w-xl">
              Hero that sells Systems Architect V4.0, Alpha Index chart fed by real receipts, four case studies with artifacts, and a credible proof stack (testimonials, talks, live agent scripts). When these are uploaded, ship them to the main page and remove this tab.
            </p>
          </div>
          <div className="flex-1 grid gap-3 w-full">
            {["Keep tone: precise, confident, glassy.", "Prefer receipts over prose: links, clips, CSVs.", "Document sources so the agent console can cite on demand.", "Mark any redlines for enterprise privacy."].map((note) => (
              <div key={note} className="p-3 bg-black/40 border border-white/5 text-sm text-zinc-300 flex items-start gap-2">
                <div className="mt-1"><Zap className="w-4 h-4 text-purple-300" /></div>
                <p>{note}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Todo;
