import { ReactNode, useEffect } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";

interface PageLayoutProps {
  children: ReactNode;
}

/**
 * Each page renders its own PageLayout, so a per-instance flag would read as a
 * first render on every navigation. This lives at module scope instead, and it
 * only ever flips inside an effect, which never runs during prerendering. So
 * the server marks all six routes as first paint and ships them visible, while
 * the browser flips it once after hydration and animates every route after.
 */
let hasPaintedOnce = false;

export function PageLayout({ children }: PageLayoutProps) {
  const [location] = useLocation();
  const isFirstPaint = !hasPaintedOnce;
  useEffect(() => {
    hasPaintedOnce = true;
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-primary/30 selection:text-primary">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[10000] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-3 focus:text-xs focus:font-bold focus:tracking-[0.12em] focus:uppercase"
      >
        Skip to content
      </a>
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          id="main"
          tabIndex={-1}
          key={location}
          /* The first render settles immediately. Animating it in would ship
             the prerendered HTML as opacity:0 with a 20px offset, leaving the
             page invisible until React hydrates and blank for anyone whose
             JavaScript never arrives. Every later route change still animates. */
          initial={isFirstPaint ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="flex-grow pt-20 focus:outline-none"
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}
