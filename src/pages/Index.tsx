import { Link } from "react-router-dom";
import { ArrowRight, Headphones, Mic2, Sparkles } from "lucide-react";
import { VoiceReadyNav } from "@/components/VoiceReadyNav";
import { ProjectTile } from "@/components/ProjectTile";
import { projects } from "@/lib/portfolio-data";

export default function Index() {
  const featured = projects[0];

  return (
    <div className="min-h-screen bg-[#05080d] text-white">
      <VoiceReadyNav />
      <main className="space-y-16 pb-16">
        <section className="section-shell grid gap-12 lg:grid-cols-[1.05fr_0.95fr] items-center" data-voice-section="hero">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.3em] text-white/70">
              <span className="size-2 rounded-full bg-emerald-400" />
              Portfolio redesign
            </div>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
              Clean, modern, voice-native portfolio built for cinematic project walk-throughs.
            </h1>
            <p className="text-lg text-white/75 leading-relaxed">
              Each project page mirrors the tablet aesthetic you shared: layered glass, soft gradients, and bold stats. The routing is instrumented for a voice agent to navigate in real time.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/projects"
                data-voice-target="cta-projects"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-3 text-slate-900 font-semibold shadow-[0_18px_40px_rgba(16,185,129,0.35)] hover:bg-emerald-400"
              >
                View the work
                <ArrowRight className="size-4" />
              </Link>
              <a
                href="mailto:jesse@bioforce.studio"
                data-voice-target="cta-contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-white/80 hover:border-white/40"
              >
                Share a brief
              </a>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center" data-voice-target="hero-stats">
              {["Biotech", "AI", "Spatial"].map((item) => (
                <div key={item} className="rounded-2xl bg-white/5 p-3 text-sm text-white/70 ring-1 ring-white/10">
                  <p className="text-lg font-semibold text-white">{item}</p>
                  <p className="text-xs uppercase tracking-[0.25em]">Focus</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-white/10 via-white/0 to-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.6)]" data-voice-target="hero-preview">
            <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 20% 20%, rgba(34,211,238,0.15), transparent 35%), radial-gradient(circle at 80% 10%, rgba(16,185,129,0.15), transparent 30%), linear-gradient(120deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))` }} />
            <div className="relative z-10 grid h-full grid-rows-[1fr_auto]">
              <div
                className="relative m-6 overflow-hidden rounded-[28px] border border-white/10"
                style={{
                  backgroundImage: `linear-gradient(140deg, rgba(0,0,0,0.5), rgba(0,0,0,0.2)), url(${featured.heroImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/60" />
                <div className="relative z-10 flex h-full flex-col justify-center gap-3 px-10 py-12 text-center">
                  <p className="text-xs uppercase tracking-[0.35em] text-white/70">Technology</p>
                  <p className="text-4xl font-semibold drop-shadow-lg md:text-5xl">{featured.title}</p>
                  <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-white/70">
                    {featured.features.map((item) => (
                      <span key={item.title} className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/10">
                        {item.title}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 px-6 pb-6 text-sm" data-voice-target="hero-preview-stats">
                {featured.stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl bg-black/40 px-4 py-3 ring-1 ring-white/10">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/60">{stat.label}</p>
                    <p className="text-xl font-semibold">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell space-y-6" data-voice-section="voice-intent">
          <div className="flex flex-wrap items-center gap-3 text-sm text-white/70">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/15">
              <Mic2 className="size-4" />
              Voice-ready routes
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/15">
              <Headphones className="size-4" />
              Live narration friendly
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/15">
              <Sparkles className="size-4" />
              Tablet aesthetic
            </span>
          </div>
          <p className="max-w-3xl text-lg leading-relaxed text-white/75">
            Navigation, stats, and CTAs are tagged for a conversational agent. It can push client-side redirects while narrating the tour, keeping every interaction smooth and reload-free.
          </p>
        </section>

        <section className="section-shell space-y-6" data-voice-section="projects">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">Case studies</p>
              <h2 className="text-3xl font-semibold">Projects designed for guided demos</h2>
              <p className="text-white/70 max-w-2xl">
                Every page uses the same modular layout, so new builds can ship quickly without sacrificing the cinematic feel.
              </p>
            </div>
            <Link to="/projects" className="text-sm text-emerald-300 hover:text-emerald-200" data-voice-target="projects-link">
              View all
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <ProjectTile key={project.slug} project={project} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
