import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export function FeaturesSectionWithHoverEffects({ onBuy }: { onBuy?: () => void } = {}) {
  const features = [
    {
      title: "Modernize your business",
      description: (
        <>
          Modernize your business with a mobile-friendly website, 24/7 AI voice agent, smart call routing, and CRM integration.<br />
          <ul className="list-disc pl-5 mt-2 text-sm text-neutral-500 dark:text-neutral-300">
            <li>Sleek Website: Boosts online presence with easy booking.</li>
            <li>AI Voice Agent: Auto-answers calls and books appointments.</li>
            <li>Call Routing: Connects your number to the AI.</li>
            <li>CRM Sync: Manages appointments effortlessly.</li>
          </ul>
        </>
      ),
      icon: <IconAdjustmentsBolt className="text-blue-500" />, // visually distinct
      featured: true,
    },
    {
      title: "Built for developers",
      description:
        "Built for engineers, developers, dreamers, thinkers and doers.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Ease of use",
      description:
        "It's as easy as using an Apple, and as expensive as buying one.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Pricing like no other",
      description:
        "Our prices are best in the market. No cap, no lock, no credit card required.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "100% Uptime guarantee",
      description: "We just cannot be taken down by anyone.",
      icon: <IconCloud />,
    },
    {
      title: "Multi-tenant Architecture",
      description: "You can simply share passwords instead of buying new seats",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "24/7 Customer Support",
      description:
        "We are available a 100% of the time. Atleast our AI Agents are.",
      icon: <IconHelp />,
    },
    {
      title: "Money back guarantee",
      description:
        "If you donot like EveryAI, we will convince you to like us.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "And everything else",
      description: "I just ran out of copy ideas. Accept my sincere apologies",
      icon: <IconHeart />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-24 mt-12 gap-8 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} onBuy={feature.featured ? onBuy : undefined} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
  onBuy
}: {
  title: string;
  description: React.ReactNode;
  icon: React.ReactNode;
  index: number;
  onBuy?: () => void;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-16 px-8 relative group/feature dark:border-neutral-800 bg-white dark:bg-neutral-900 rounded-xl shadow-md min-h-[340px] justify-between transition-all duration-200 hover:scale-[1.025] hover:shadow-lg ",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-6">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <div className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-6">
        {description}
      </div>
      {onBuy && (
        <button
          className="mt-6 px-6 py-2 rounded-md bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition w-fit self-start"
          onClick={onBuy}
        >
          Buy Now
        </button>
      )}
    </div>
  );
};
