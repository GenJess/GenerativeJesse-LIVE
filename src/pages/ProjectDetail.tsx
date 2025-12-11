import { Link, Navigate, useParams } from "react-router-dom";
import { ExternalLink, ArrowLeft, Sparkles } from "lucide-react";
import { VoiceReadyNav } from "@/components/VoiceReadyNav";
import { projects } from "@/lib/portfolio-data";

const Stat = ({ label, value, helper }: { label: string; value: string; helper?: string }) => (
  <div className="flex flex-col gap-1 rounded-2xl bg-black/40 p-4 ring-1 ring-white/5">
    <span className="text-xs uppercase tracking-[0.2em] text-white/60">{label}</span>
    <span className="text-2xl font-semibold text-white">{value}</span>
    {helper && <span className="text-xs text-white/60">{helper}</span>}
  </div>
);

const FeaturePill = ({ title, description }: { title: string; description: string }) => (
  <div className="glass-panel gradient-border relative overflow-hidden p-5">
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/10" />
    <div className="relative z-10 flex gap-3">
      <div className="mt-1 rounded-full bg-emerald-500/20 p-2 ring-1 ring-emerald-300/40">
        <Sparkles className="size-4 text-emerald-200" />
      </div>
      <div className="space-y-1">
        <p className="font-semibold text-white">{title}</p>
        <p className="text-sm text-white/70 leading-relaxed">{description}</p>
      </div>
    </div>
  </div>
);

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="min-h-screen bg-[#05080d] text-white">
      <VoiceReadyNav />
      <main className="section-shell space-y-12" data-voice-section="project-detail">
        <div className="flex items-center gap-3 text-sm text-white/60">
          <Link to="/projects" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 hover:border-white/30">
            <ArrowLeft className="size-4" />
            Back to projects
          </Link>
          <span className="text-white/40">/</span>
          <span className="uppercase tracking-[0.25em] text-white/50">{project.heroKicker}</span>
        </div>

        <header className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]" data-voice-target="project-hero">
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-white/10 via-white/0 to-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.35), rgba(0,0,0,0.65)), url(${project.heroImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="relative z-10 flex h-full flex-col justify-between p-8 lg:p-12">
              <div className="flex items-center justify-between text-sm text-white/70">
                <span className="inline-flex items-center gap-2 rounded-full bg-black/40 px-3 py-1 ring-1 ring-white/10">
                  {project.category}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold" style={{ color: project.accent }}>
                  <span className="size-2 rounded-full" style={{ backgroundColor: project.accent }} />
                  Voice-ready
                </span>
              </div>
              <div className="flex flex-col items-center gap-4 text-center">
                <p className="text-sm uppercase tracking-[0.3em] text-white/70">{project.heroKicker}</p>
                <h1 className="text-4xl font-semibold drop-shadow-lg md:text-5xl" style={{ letterSpacing: "0.04em" }}>
                  {project.title}
                </h1>
                <p className="max-w-2xl text-white/80">{project.subtitle}</p>
              </div>
              <div className="grid grid-cols-1 gap-3 md:grid-cols-3" data-voice-target="project-stats">
                {project.stats.map((stat) => (
                  <Stat key={stat.label} {...stat} />
                ))}
              </div>
            </div>
          </div>

          <div className="glass-panel gradient-border relative overflow-hidden rounded-[32px] p-8 lg:p-10" data-voice-target="project-about">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(45,212,191,0.18),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.15),transparent_30%),linear-gradient(160deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]" />
            <div className="relative z-10 space-y-6">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/60">About</p>
                  <h2 className="text-2xl font-semibold text-white">{project.title}</h2>
                  <p className="text-white/70">{project.category}</p>
                </div>
                {project.cta && (
                  <a
                    href={project.cta.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/20"
                    data-voice-target="project-cta"
                  >
                    {project.cta.label}
                    <ExternalLink className="size-4" />
                  </a>
                )}
              </div>
              <p className="leading-relaxed text-white/75">{project.description}</p>
              <div className="grid gap-3 sm:grid-cols-2" data-voice-target="project-features">
                {project.features.map((feature) => (
                  <FeaturePill key={feature.title} {...feature} />
                ))}
              </div>
              <div className="space-y-3" data-voice-target="project-outcomes">
                <p className="text-xs uppercase tracking-[0.3em] text-white/60">Outcomes</p>
                <ul className="space-y-2 text-sm text-white/75">
                  {project.outcomes.map((line) => (
                    <li key={line} className="flex items-start gap-2">
                      <span className="mt-1 size-2 rounded-full bg-emerald-400" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </header>

        <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]" data-voice-target="project-details">
          <div className="glass-panel gradient-border relative overflow-hidden rounded-[28px] p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(16,185,129,0.12),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.1),transparent_30%),linear-gradient(140deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))]" />
            <div className="relative z-10 space-y-4">
              <h3 className="text-xl font-semibold">Voice agent ready</h3>
              <p className="text-white/75 leading-relaxed">
                Routes, sections, and interactive elements are labeled with <code className="rounded bg-white/10 px-2 py-1">data-voice-target</code> so a
                conversational agent can orchestrate client-side navigation without losing context.
              </p>
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                {project.features.map((feature) => (
                  <div key={feature.title} className="rounded-2xl bg-black/30 p-4 ring-1 ring-white/5">
                    <p className="text-sm font-semibold text-white">{feature.title}</p>
                    <p className="text-sm text-white/60">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="glass-panel gradient-border relative overflow-hidden rounded-[28px] p-8" data-voice-target="project-tech">
            <div className="absolute inset-0 bg-gradient-to-b from-white/8 via-white/0 to-white/10" />
            <div className="relative z-10 space-y-4">
              <h3 className="text-xl font-semibold">Stack + rituals</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="rounded-full bg-white/10 px-3 py-1 text-sm text-white/80">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                Designed to mirror the provided tablet aesthetic with soft lighting, elevated glass panels, and a modular layout that can be re-used across every project page.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
