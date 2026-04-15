import { PageLayout } from "@/components/layout/PageLayout";
import { useSEO } from "@/lib/seo";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Speaking() {
  useSEO({
    title: "Speaking — Sean Gibson",
    description: "The frameworks work on stage too. Keynotes, conferences, and workshops by Sean Gibson."
  });

  return (
    <PageLayout>
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-12">The frameworks work on stage too.</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 border-y border-white/5 py-8">
          <div>
            <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">Keynote</div>
            <div className="text-lg text-foreground font-medium">30-60 mins</div>
          </div>
          <div>
            <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">Conference</div>
            <div className="text-lg text-foreground font-medium">20-45 mins</div>
          </div>
          <div>
            <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">Workshops</div>
            <div className="text-lg text-foreground font-medium">Half day</div>
          </div>
        </div>

        <div className="space-y-6 mb-24">
          <SpeakingCard type="Keynote" title="The High Performance Operating System" />
          <SpeakingCard type="Conference" title="Performance Debt" />
          <SpeakingCard type="Workshop" title="AI Governance & the Human System" />
        </div>

        <div className="bg-card border border-white/5 p-8 md:p-12 mb-24">
          <h3 className="text-sm font-medium text-primary tracking-wide uppercase mb-4">Ideal Client</h3>
          <p className="text-xl text-foreground font-light leading-relaxed">
            Best fit for sport boards and federations, executive leadership teams navigating change, and organisations adopting AI who want to govern it responsibly.
          </p>
        </div>

        <div className="text-center mb-12">
          <Link 
            href="/contact"
            className="inline-block bg-primary text-primary-foreground px-8 py-4 font-medium tracking-wide transition-transform hover:-translate-y-[1px]"
          >
            Enquire about speaking
          </Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12 mb-24">
        <div className="w-full aspect-[21/9] bg-card border border-white/5 flex items-center justify-center text-muted-foreground/50 text-sm font-medium uppercase tracking-widest relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent z-10" />
          World Lacrosse 2023 · Snapdragon Stadium · Photo Placeholder
        </div>
      </section>
    </PageLayout>
  );
}

function SpeakingCard({ type, title }: { type: string, title: string }) {
  return (
    <motion.div 
      className="group bg-[#0a1520] border border-white/5 p-8 relative overflow-hidden"
      whileHover="hover"
      initial="initial"
    >
      <motion.div 
        className="absolute top-0 left-0 w-[2px] bg-primary h-full origin-top"
        variants={{
          initial: { scaleY: 0 },
          hover: { scaleY: 1 }
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      />
      <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2 pl-4">{type}</div>
      <h3 className="text-2xl font-light text-foreground pl-4 group-hover:text-primary transition-colors">{title}</h3>
    </motion.div>
  );
}
