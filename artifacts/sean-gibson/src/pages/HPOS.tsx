import { PageLayout } from "@/components/layout/PageLayout";
import { useSEO } from "@/lib/seo";
import snapdragonSrc from "@assets/image_1776436835400.png";

export default function HPOS() {
  const seo = useSEO({
    title: "The HPOS — Sean Gibson",
    description: "The High Performance Operating System. An architecture, five dimensions and a method for how an organisation is put together, and why it holds or fails under pressure."
  });

  return (
    <PageLayout>
      {seo}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-12">The High Performance Operating System</h1>

        <div className="prose prose-invert prose-lg max-w-none text-muted-foreground font-light leading-relaxed mb-16">
          <p>
            A framework for how an organisation is actually put together, and why it holds or fails under pressure. It has three parts: an architecture that describes how the system is built, five dimensions a board assesses it through, and a method for changing it. One framework, read two ways: in sport, where it was built, and in the enterprise, where its parts came from.
          </p>
        </div>

        <div className="bg-primary/10 border border-primary/20 p-8 md:p-12 mb-24 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
          <p className="text-xl md:text-2xl text-foreground font-serif italic leading-relaxed">
            "Performance Debt is what accumulates when the controls fail. The architecture is where it accumulates. The dimensions are how you find it. The method is how you retire it."
          </p>
        </div>

        <h3 className="text-sm font-medium text-primary tracking-wide uppercase mb-8">How the system is built</h3>

        <div className="border border-primary/20 bg-primary/5 p-6 md:p-8">
          <div className="text-[10px] font-semibold text-primary tracking-[0.2em] uppercase mb-3">Mandate</div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            A Mandate sits above the system. It is whatever outside entity sets conditions the board does not control and can act over its head: a funder, a government, an international federation; a regulator, an owner, a parent company. The system has a defined obligation to it, and it is where bypass happens when governance fails.
          </p>
        </div>

        <div className="flex justify-center py-3" aria-hidden="true">
          <div className="w-px h-8 bg-primary/30" />
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Five layers carry the system.
        </p>

        <div className="space-y-4">
          <LayerRow
            name="Governance"
            desc="Sets the standards, approves direction, holds the executive to account and carries the duty of care."
          />

          <div className="border-l-2 border-primary/40 pl-4 md:pl-6 py-1">
            <div className="text-[10px] font-semibold text-primary tracking-[0.2em] uppercase mb-3">
              Value stream · runs across these three
            </div>
            <div className="space-y-4">
              <LayerRow
                name="Management"
                desc="Runs the organisation between board meetings and allocates resources."
              />
              <LayerRow
                name="Operating Direction"
                desc="Sets how value is produced and makes the calls that shape it."
                sport="Performance direction, selection and programme design."
                enterprise="The product or operating line."
              />
              <LayerRow
                name="Enabling Functions"
                desc="Provide the services the line needs to perform."
                sport="Medical, science, and strength and conditioning."
                enterprise="Finance, HR, IT, legal and risk."
              />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mt-4">
              One value stream runs across the middle layers. In sport it is the athlete operating environment. In the enterprise it is the customer or product value stream. It is the cumulative product of every layer's decisions, and every layer has a defined obligation to it.
            </p>
          </div>

          <LayerRow
            name="Data and Knowledge"
            desc="Sits beneath all four and feeds them."
            tone="base"
          />
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed mt-12 mb-4">
          Four control mechanisms decide whether the structure holds.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <MechanismCard
            name="Authority Alignment"
            desc="Formal authority and operational authority point the same way."
          />
          <MechanismCard
            name="Accountability Escalation"
            desc="Every consequential decision has a defined route."
          />
          <MechanismCard
            name="Information Flow"
            desc="Decision quality depends on signal quality."
          />
          <MechanismCard
            name="Incentive Alignment"
            desc="The operative governance document is the one that encodes the real incentive. In a federation that is usually the funding agreement. In a company it is the budget."
          />
        </div>

        <div className="border-t border-white/5 pt-12 mt-12 mb-24">
          <h4 className="text-xl font-light text-foreground mb-4">Under compression</h4>
          <p className="text-base text-muted-foreground font-light leading-relaxed">
            Under compression, two things happen. Authority migrates and information narrows. In a well-designed system authority migrates toward expertise and information keeps flowing to those who can act. In a poorly designed one, decisions get made by whoever is in the room. The mechanisms decide which.
          </p>
        </div>

        <h3 className="text-sm font-medium text-primary tracking-wide uppercase mb-4">The Five Dimensions</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-2xl">
          Each dimension is assessed through named layers and mechanisms. Culture is not a layer. It is what the system does under pressure, and it is read through the incentives.
        </p>
        <div className="flex flex-wrap gap-4 mb-24">
          <DimTile title="Strategy" />
          <DimTile title="Governance" />
          <DimTile title="People" />
          <DimTile title="Data" />
          <DimTile title="Culture" />
        </div>

        <h3 className="text-sm font-medium text-primary tracking-wide uppercase mb-4">The Method</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-2xl">
          A loop, not a line. It closes with a scheduled re-baseline when the cycle turns.
        </p>
        <div className="space-y-4 mb-24">
          <MethodStep
            number="01"
            title="Diagnose"
            desc="A structured baseline of how the organisation actually operates: decision rights, operating model, governance and control structure, data and AI maturity. What it costs, what it delivers, where it fails, where the evidence is missing."
          />
          <MethodStep
            number="02"
            title="Align"
            desc="Leadership, the functions that own the outcome and the functions that carry the risk agree the target state and who decides what. Authority, accountability and funding are settled before design begins."
          />
          <MethodStep
            number="03"
            title="Design"
            desc="A target operating architecture sized to the organisation's scale, obligations and ambition. Decision rights, control mechanisms, evidence flows and the transition sequence."
          />
          <MethodStep
            number="04"
            title="Implement"
            desc="Artefacts the organisation can run and prove: policies, governance structures, operating procedures, control evidence and a prioritised roadmap. Delivered against dates."
          />
          <MethodStep
            number="05"
            title="Sustain"
            desc="Independent judgement retained across the transition and beyond it, with a scheduled re-baseline when leadership, regulation or funding changes, so the architecture holds under load rather than reverting."
          />
        </div>

        <div className="border-t border-white/5 pt-16 mb-12">
          <h2 className="text-3xl font-light mb-6">Performance Debt</h2>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            Performance Debt is the structural gap between what an organisation claims to prioritise and what its system actually rewards. It accumulates in five categories: governance, funding, decision-rights, cultural and data debt. Each compounds into the others.
          </p>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed mb-24">
          The sport reading of the framework, with the products built on it, is at{" "}
          <a
            href="https://glenviewsports.co"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors underline underline-offset-4 decoration-white/20"
          >
            glenviewsports.co
          </a>
          .
        </p>
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

function LayerRow({ name, desc, sport, enterprise, tone }: { name: string, desc: string, sport?: string, enterprise?: string, tone?: "base" }) {
  return (
    <div className={`p-5 md:p-6 border ${tone === "base" ? "border-primary/15 bg-primary/[0.03]" : "border-white/5 bg-card"}`}>
      <h4 className="text-base font-medium text-foreground mb-2">{name}</h4>
      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
      {(sport || enterprise) && (
        <dl className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
          {sport && (
            <div>
              <dt className="text-[10px] font-semibold text-primary tracking-[0.2em] uppercase mb-1">In sport</dt>
              <dd className="text-sm text-muted-foreground leading-relaxed">{sport}</dd>
            </div>
          )}
          {enterprise && (
            <div>
              <dt className="text-[10px] font-semibold text-primary tracking-[0.2em] uppercase mb-1">In the enterprise</dt>
              <dd className="text-sm text-muted-foreground leading-relaxed">{enterprise}</dd>
            </div>
          )}
        </dl>
      )}
    </div>
  );
}

function MechanismCard({ name, desc }: { name: string, desc: string }) {
  return (
    <div className="bg-card border border-white/5 p-6 h-full">
      <h4 className="text-base font-medium text-foreground mb-2">{name}</h4>
      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  );
}

function MethodStep({ number, title, desc }: { number: string, title: string, desc: string }) {
  return (
    <div className="bg-card border border-white/5 p-6 md:p-8 flex flex-col md:flex-row gap-3 md:gap-8">
      <div className="text-3xl font-serif font-black text-primary/30 leading-none md:w-16 shrink-0 select-none">
        {number}
      </div>
      <div>
        <h4 className="text-lg font-medium text-foreground mb-2">{title}</h4>
        <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function DimTile({ title }: { title: string }) {
  return (
    <div className="flex-1 min-w-[140px] border border-white/5 bg-[#0a1520] p-6 text-center text-foreground font-medium hover:bg-card transition-colors">
      {title}
    </div>
  );
}
