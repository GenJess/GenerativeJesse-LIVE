import { Link, useLocation } from "react-router-dom";
import { appNavigation } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

export const VoiceReadyNav = () => {
  const location = useLocation();

  return (
    <nav
      className="sticky top-0 z-30 w-full backdrop-blur-md bg-black/40 border-b border-white/10"
      aria-label="Primary navigation"
    >
      <div className="section-shell flex items-center justify-between gap-6 py-3">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-full bg-gradient-to-br from-emerald-400/40 via-cyan-400/40 to-amber-300/30 border border-white/10" />
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-200/80">Generative Jesse</p>
            <p className="text-sm text-white/70">Product design + full-stack builds</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {appNavigation.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                data-voice-target={`nav-${item.label.toLowerCase()}`}
                aria-label={item.description}
                className={cn(
                  "text-sm px-4 py-2 rounded-full border border-white/10 transition-all duration-200",
                  isActive
                    ? "bg-white/15 text-white shadow-lg shadow-emerald-500/10"
                    : "text-white/70 hover:text-white hover:border-white/30"
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href="https://cal.com/jesse-harrick"
            target="_blank"
            rel="noreferrer"
            className="text-sm px-4 py-2 rounded-full bg-emerald-500 text-slate-900 font-semibold shadow-[0_8px_30px_rgba(16,185,129,0.35)] hover:bg-emerald-400"
            data-voice-target="nav-contact"
          >
            Book time
          </a>
        </div>
      </div>
    </nav>
  );
};
