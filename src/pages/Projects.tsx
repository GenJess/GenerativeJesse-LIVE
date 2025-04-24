import { useState, useEffect, useCallback } from "react";
import { NavBarDemo } from "@/components/code.demo";
import { FeaturesSectionWithHoverEffects } from "@/components/blocks/feature-section-with-hover-effects";

const STRIPE_SCRIPT_SRC = "https://js.stripe.com/v3/buy-button.js";
const STRIPE_BUY_BUTTON = (
  <stripe-buy-button
    buy-button-id="buy_btn_1RHQqfLm9Jk9yBo1lLwqmomj"
    publishable-key="pk_live_51MBk7aLm9Jk9yBo19JpJrLv0DtI0Eye5x6HVw3hnbo7colkZC1Ch0SBYXl9QUY5sLsRjoh8yNWFVGrM9QbGA4zdu00D38b1z4E"
  />
);

const Projects = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Ensure Stripe script is loaded
  useEffect(() => {
    if (drawerOpen && !document.querySelector(`script[src='${STRIPE_SCRIPT_SRC}']`)) {
      const script = document.createElement("script");
      script.src = STRIPE_SCRIPT_SRC;
      script.async = true;
      document.body.appendChild(script);
    }
  }, [drawerOpen]);

  // Close on ESC or click outside
  useEffect(() => {
    if (!drawerOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setDrawerOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [drawerOpen]);

  const handleBuy = useCallback(() => setDrawerOpen(true), []);

  return (
    <>
      <NavBarDemo />
      <div className="min-h-screen w-full bg-white dark:bg-black pt-10">
        <FeaturesSectionWithHoverEffects onBuy={handleBuy} />
        {/* Side Drawer */}
        {drawerOpen && (
          <div className="fixed inset-0 z-50 flex">
            <div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setDrawerOpen(false)}
            />
            <aside className="relative ml-auto w-full max-w-md bg-white dark:bg-neutral-900 shadow-xl h-full p-8 flex flex-col items-center justify-center animate-slide-in-right">
              <button
                className="absolute top-4 right-4 text-2xl text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-100"
                onClick={() => setDrawerOpen(false)}
                aria-label="Close"
              >
                ×
              </button>
              <h2 className="text-2xl font-bold mb-6">Purchase</h2>
              <div className="w-full flex flex-col items-center">
                {STRIPE_BUY_BUTTON}
              </div>
            </aside>
          </div>
        )}
      </div>
      <style>{`
        @keyframes slide-in-right {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in-right { animation: slide-in-right 0.25s cubic-bezier(.4,0,.2,1) both; }
      `}</style>
    </>
  );
};

export default Projects;
