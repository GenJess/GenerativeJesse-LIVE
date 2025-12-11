import { Link } from "react-router-dom";
import type { ProjectMeta } from "@/lib/portfolio-data";

export const ProjectTile = ({ project }: { project: ProjectMeta }) => {
  return (
    <Link
      to={`/projects/${project.slug}`}
      data-voice-target={`project-${project.slug}`}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-white/0 to-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:shadow-2xl hover:shadow-emerald-500/10"
    >
      <div
        className="absolute inset-0 opacity-60 group-hover:opacity-80 transition-opacity"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(16,185,129,0.15), rgba(59,130,246,0.18)), url(${project.heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "saturate(1.1)",
        }}
      />
      <div className="relative z-10 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <span className="text-xs uppercase tracking-[0.3em] text-white/70">{project.category}</span>
          <span className="rounded-full px-3 py-1 text-xs font-semibold" style={{ backgroundColor: `${project.accent}20`, color: project.accent }}>
            {project.heroKicker}
          </span>
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold text-white drop-shadow-md">{project.title}</h3>
          <p className="text-white/80 leading-relaxed">{project.subtitle}</p>
        </div>
        <div className="flex items-center gap-3 text-sm text-white/70">
          <span className="inline-flex items-center gap-2 rounded-full bg-black/40 px-3 py-1 ring-1 ring-white/10">
            <span className="block size-2 rounded-full" style={{ backgroundColor: project.accent }} />
            Voice-ready routes
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-black/40 px-3 py-1 ring-1 ring-white/10">Tablet-first layouts</span>
        </div>
        <div className="mt-2 flex flex-wrap gap-2 text-xs text-white/70">
          {project.technologies.map((tech) => (
            <span key={tech} className="rounded-full bg-white/10 px-3 py-1">{tech}</span>
          ))}
        </div>
      </div>
    </Link>
  );
};
