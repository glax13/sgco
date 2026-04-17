import { PageLayout } from "@/components/layout/PageLayout";
import { useSEO } from "@/lib/seo";
import snapdragonSrc from "@assets/image_1776436835400.png";

export default function HPOS() {
  useSEO({
    title: "The HPOS — Sean Gibson",
    description: "The High Performance Operating System. A system-level diagnostic and design framework."
  });

  return (
    <PageLayout>
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-12">The High Performance Operating System</h1>
        
        <div className="prose prose-invert prose-lg max-w-none text-muted-foreground font-light leading-relaxed mb-16">
          <p>
            A system-level construct describing how strategy, governance, people, pathways, data, and culture interact to produce outcomes. It is a diagnostic and design framework.
          </p>
        </div>

        <div className="bg-primary/10 border border-primary/20 p-8 md:p-12 mb-24 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
          <p className="text-xl md:text-2xl text-foreground font-serif italic leading-relaxed">
            "HPOS is not a methodology. It is a lens for asking whether an organisation's operating system is coherent with the outcomes it claims to want."
          </p>
        </div>

        <h3 className="text-sm font-medium text-primary tracking-wide uppercase mb-8">The Five Phases</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-24">
          <PhaseCard number="01" title="Diagnose" desc="Map the current operating system and identify structural incoherence." />
          <PhaseCard number="02" title="Design" desc="Architect the target state operating system aligned to desired outcomes." />
          <PhaseCard number="03" title="Deploy" desc="Execute the transition plan with clear governance and accountability." />
          <PhaseCard number="04" title="Measure" desc="Implement telemetry to track system performance and leading indicators." />
          <PhaseCard number="05" title="Adapt" desc="Continuously refine the system based on feedback loops and evolving context." />
        </div>

        <h3 className="text-sm font-medium text-primary tracking-wide uppercase mb-8">The Six Dimensions</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-24">
          <DimTile title="Strategy" />
          <DimTile title="Governance" />
          <DimTile title="People" />
          <DimTile title="Pathways" />
          <DimTile title="Data" />
          <DimTile title="Culture" />
        </div>

        <div className="border-t border-white/5 pt-16 mb-24">
          <h2 className="text-3xl font-light mb-6">Performance Debt</h2>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            Performance Debt is the structural gap between what an organisation claims to prioritise and what its system actually rewards.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12 mb-24">
        <div className="w-full aspect-[21/9] overflow-hidden relative bg-card border border-white/5">
          <img
            src={snapdragonSrc}
            alt="World Lacrosse 2023 at Snapdragon Stadium, San Diego"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/50 to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-8 text-xs font-medium tracking-widest uppercase text-white/50">
            World Lacrosse 2023 · Snapdragon Stadium
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

function PhaseCard({ number, title, desc }: { number: string, title: string, desc: string }) {
  return (
    <div className="bg-card border border-white/5 p-6 relative overflow-hidden">
      <div className="absolute -bottom-4 -right-4 text-7xl font-serif font-black text-white/[0.02] select-none pointer-events-none">
        {number}
      </div>
      <h4 className="text-lg font-medium text-foreground mb-2 relative z-10">{title}</h4>
      <p className="text-sm text-muted-foreground relative z-10">{desc}</p>
    </div>
  );
}

function DimTile({ title }: { title: string }) {
  return (
    <div className="border border-white/5 bg-[#0a1520] p-6 text-center text-foreground font-medium hover:bg-card transition-colors">
      {title}
    </div>
  );
}
