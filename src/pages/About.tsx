import { Link } from "react-router-dom";
import { VoiceReadyNav } from "@/components/VoiceReadyNav";
import { projects } from "@/lib/portfolio-data";

export default function About() {
  return (
    <div className="min-h-screen bg-[#05080d] text-white">
      <VoiceReadyNav />
      <main className="section-shell space-y-12" data-voice-section="about">
        <header className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-white/60">About</p>
          <h1 className="text-4xl font-semibold">Designing interfaces that narrate themselves</h1>
          <p className="max-w-3xl text-white/70 text-lg leading-relaxed">
            I design and ship interactive experiences that feel cinematic but remain performant. The new portfolio keeps a consistent, voice-navigable layout so an AI guide can walk visitors through every case study without breaking immersion.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-3" data-voice-target="about-highlights">
          {["Product design", "Full-stack dev", "Realtime demos"].map((item) => (
            <div key={item} className="rounded-3xl bg-white/5 p-5 ring-1 ring-white/10">
              <p className="text-xl font-semibold">{item}</p>
              <p className="text-white/70 text-sm mt-2">Voice-ready flows, resilient UI systems, and crisp documentation for agents and humans alike.</p>
            </div>
          ))}
        </section>

        <section className="glass-panel gradient-border relative overflow-hidden rounded-[32px] p-8" data-voice-target="about-process">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.16),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(16,185,129,0.14),transparent_30%),linear-gradient(160deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))]" />
          <div className="relative z-10 grid gap-6 lg:grid-cols-2">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">Approach</p>
              <h2 className="text-2xl font-semibold">Voice-guided, interface-driven storytelling</h2>
              <p className="text-white/75 leading-relaxed">
                Pages are annotated with <code className="rounded bg-white/10 px-2 py-1">data-voice-target</code> attributes, consistent routing, and concise copy so agents always know where to send visitors next.
              </p>
              <div className="flex flex-wrap gap-2 text-sm text-white/70">
                {projects.flatMap((p) => p.technologies).slice(0, 8).map((tech) => (
                  <span key={tech} className="rounded-full bg-white/10 px-3 py-1">{tech}</span>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">Voice agent hooks</p>
              <ul className="space-y-2 text-sm text-white/75">
                <li className="flex items-start gap-2"><span className="mt-1 size-2 rounded-full bg-emerald-400" />Consistent route schema: /projects &rarr; /projects/:slug.</li>
                <li className="flex items-start gap-2"><span className="mt-1 size-2 rounded-full bg-emerald-400" />Primary nav buttons expose <code className="rounded bg-white/10 px-1">data-voice-target</code> labels.</li>
                <li className="flex items-start gap-2"><span className="mt-1 size-2 rounded-full bg-emerald-400" />Hero, stats, features, and outcomes are named sections for precise redirects.</li>
              </ul>
              <Link to="/projects" className="inline-flex items-center gap-2 text-emerald-300 hover:text-emerald-200" data-voice-target="about-projects-link">
                Jump to the work
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
