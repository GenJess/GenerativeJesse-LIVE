export type ProjectStat = {
  label: string;
  value: string;
  helper?: string;
};

export type ProjectFeature = {
  title: string;
  description: string;
};

export type ProjectMeta = {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  heroKicker: string;
  heroImage: string;
  accent: string;
  stats: ProjectStat[];
  features: ProjectFeature[];
  technologies: string[];
  outcomes: string[];
  cta?: { label: string; href: string };
};

export const appNavigation = [
  { label: "Home", path: "/", description: "Return to the main portfolio overview" },
  { label: "Projects", path: "/projects", description: "Browse case studies and builds" },
  { label: "About", path: "/about", description: "Learn more about Jesse's background" },
  { label: "Contact", path: "mailto:jesse@bioforce.studio", description: "Start a conversation" },
] as const;

export const projects: ProjectMeta[] = [
  {
    slug: "bioforce-automation",
    title: "BioForce Automation Suite",
    subtitle: "Precision robotics UI for sterile labs",
    category: "Biotech Systems",
    description:
      "An immersive control surface and analytics layer for a network of modular biotech actuators, built to reduce downtime and surface predictive maintenance in realtime.",
    heroKicker: "Technology",
    heroImage: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1600&q=80",
    accent: "#22d3ee",
    stats: [
      { label: "Countries", value: "22" },
      { label: "Shipments", value: "18K+" },
      { label: "Years", value: "11" },
    ],
    features: [
      { title: "Autonomous uptime", description: "Predictive sensor fusion and anomaly alerts keep production live." },
      { title: "Global compliance", description: "Built-in SOP guardrails tuned to FDA and EU biotech standards." },
      { title: "Energy aware", description: "Adaptive drive modes cut idle draw by up to 18%." },
    ],
    technologies: ["React", "Three.js", "Spline", "Edge telemetry"],
    outcomes: [
      "Reduced operator onboarding to under 10 minutes with contextual UI prompts.",
      "Shipped a responsive design that mirrors the tablet-first control paradigm.",
      "Voice-agent ready routing for automated facility walk-throughs.",
    ],
    cta: { label: "View Investment Deck", href: "https://bioforce.studio" },
  },
  {
    slug: "signal-scribe",
    title: "Signal Scribe",
    subtitle: "Voice-led research notebook",
    category: "AI Workflows",
    description:
      "A conversational lab notebook that lets researchers narrate findings while the interface routes to pages, attaches artifacts, and builds context-aware prompts on the fly.",
    heroKicker: "Workflow",
    heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
    accent: "#f97316",
    stats: [
      { label: "Latency", value: "<300ms", helper: "client-side redirects" },
      { label: "Sessions", value: "4.3K" },
      { label: "Retention", value: "68%" },
    ],
    features: [
      { title: "Voice native", description: "Every route is labeled with data-voice-target for agent control." },
      { title: "Live summaries", description: "Embeds update as the agent walks visitors through demos." },
      { title: "Offline cache", description: "Optimized for booth wifi and on-device fallbacks." },
    ],
    technologies: ["React Router", "Framer Motion", "ElevenLabs", "Service Workers"],
    outcomes: [
      "Enabled smooth voice navigation across nested sections without reloads.",
      "Paired design system tokens with orchestrated lighting to mirror the brand imagery.",
      "Shipped an API surface that agents can call to jump visitors to context-specific screens.",
    ],
    cta: { label: "Try the walkthrough", href: "https://signal-scribe.ai" },
  },
  {
    slug: "kinetic-exchange",
    title: "Kinetic Exchange",
    subtitle: "Spatial commerce for robotics",
    category: "Interactive 3D",
    description:
      "A cinematic showcase of modular robotic arms with tap-to-learn tiles, tuned motion curves, and a responsive grid that mirrors the feel of a hardware launch stage.",
    heroKicker: "Experience",
    heroImage: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80",
    accent: "#8b5cf6",
    stats: [
      { label: "Showrooms", value: "14" },
      { label: "Avg. dwell", value: "3m 12s" },
      { label: "Upgrades", value: "+21%" },
    ],
    features: [
      { title: "Tactile cards", description: "Glass panels with parallax and haptic-friendly tap targets." },
      { title: "Scene sync", description: "Voice cues line up with scene states for coherent narration." },
      { title: "Modal routing", description: "Project routes keep history clean for voice agents." },
    ],
    technologies: ["React", "Three.js", "Motion", "ShadCN"],
    outcomes: [
      "Balanced cinematic visuals with WCAG-compliant contrast and focus rings.",
      "Delivered modular project layout reusable across every case study.",
      "Mapped navigation schema that a voice guide can trigger deterministically.",
    ],
    cta: { label: "Explore prototype", href: "https://kinetic.exchange" },
  },
];
