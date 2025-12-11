import { VoiceReadyNav } from "@/components/VoiceReadyNav";
import { ProjectTile } from "@/components/ProjectTile";
import { projects } from "@/lib/portfolio-data";

export default function Projects() {
  return (
    <div className="min-h-screen bg-[#05080d] text-white">
      <VoiceReadyNav />
      <main className="section-shell space-y-10" data-voice-section="projects-page">
        <header className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-white/60">Portfolio</p>
          <h1 className="text-4xl font-semibold">Case studies built for voice-guided tours</h1>
          <p className="max-w-3xl text-white/70">
            Modular templates mirror the clean tablet UI from your reference: cinematic hero, bold stats, and detailed about panels that make it simple for a voice agent to redirect visitors without reloads.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3" data-voice-target="projects-grid">
          {projects.map((project) => (
            <ProjectTile key={project.slug} project={project} />
          ))}
        </div>
      </main>
    </div>
  );
}
