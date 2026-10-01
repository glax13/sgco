import { PageLayout } from "@/components/layout/PageLayout";
import { useSEO } from "@/lib/seo";
import { motion } from "framer-motion";
import govnet760 from "@assets/derived/govnet-760.jpg";
import govnet1120 from "@assets/derived/govnet-1120.jpg";
import govnet1280 from "@assets/derived/govnet-1280.jpg";
import { PhotoBand } from "@/components/PhotoBand";

export default function About() {
  const seo = useSEO();

  return (
    <PageLayout>
      {seo}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-12">Two worlds. One operating system.</h1>
        
        <div className="prose prose-invert prose-lg max-w-none text-muted-foreground font-light leading-relaxed space-y-6">
          <p>
            For twenty years, I have operated in two distinct environments: the highly structured world of commercial enterprise governance, and the volatile, outcome-driven world of elite sport. On paper, they have little in common. In practice, they fail for the exact same reasons.
          </p>
          
          <blockquote className="border-l-2 border-primary pl-6 my-12 text-2xl text-foreground font-serif italic py-2">
            "We fixate on the people because it is easy. We ignore the system because it is complex."
          </blockquote>
          
          <p>
            When a national team underperforms, we fire the coach. When an enterprise initiative fails, we replace the project lead. But the High Performance Operating System dictates that individuals are heavily constrained by the environment they operate within. If the system is incoherent, putting better people into it will not change the outcome.
          </p>
        </div>

        <div className="mt-20">
          <h2 className="text-sm font-medium text-primary tracking-wide uppercase mb-8">The Insight Stack</h2>
          <div className="space-y-4">
            <div className="bg-card border border-hairline p-6 flex flex-col md:flex-row gap-6 items-start md:items-center">
              <div className="text-xl font-serif text-muted-foreground w-12">01</div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-1">The Governance Gap</h3>
                <p className="text-sm text-muted-foreground">The distance between what a board thinks is happening and what the system actually incentivises.</p>
              </div>
            </div>
            <div className="bg-card border border-hairline p-6 flex flex-col md:flex-row gap-6 items-start md:items-center">
              <div className="text-xl font-serif text-muted-foreground w-12">02</div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-1">System Incoherence</h3>
                <p className="text-sm text-muted-foreground">When strategy asks for one thing, but pathways and culture reward another.</p>
              </div>
            </div>
            <div className="bg-card border border-hairline p-6 flex flex-col md:flex-row gap-6 items-start md:items-center">
              <div className="text-xl font-serif text-muted-foreground w-12">03</div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-1">Performance Debt</h3>
                <p className="text-sm text-muted-foreground">The accumulated cost of ignoring system incoherence over time.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 border-t border-hairline bg-surface">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-sm font-medium text-primary tracking-wide uppercase mb-12">Active Domains</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <DomainCard 
              role="Principal Researcher, GRC"
              org="Ardoq"
              description="Researching how governance, risk and compliance work inside large organisations and turning that into what the platform supports. DORA, the EU AI Act, APRA CPS 230 and NIS2."
              link="https://ardoq.com"
            />
            <DomainCard 
              role="National Team Director"
              org="Ireland Lacrosse"
              description="Designing the high performance pathways and governance structures for international competition."
              link="https://irelandlacrosse.ie"
            />
            <DomainCard 
              role="Founder"
              org="Glenview Sports"
              description="Independent advisory to boards and federations on governance and high performance system design, built on the High Performance Operating System and Performance Debt."
              link="https://glenviewsports.co"
            />
          </div>
        </div>
      </section>

      <PhotoBand
        src={govnet1120}
        srcSet={`${govnet760} 760w, ${govnet1120} 1120w, ${govnet1280} 1280w`}
        alt="Sean Gibson speaking at GovNet Conference"
        caption="GovNet Conference"
        width={1280}
        height={549}
      />
    </PageLayout>
  );
}

function DomainCard({ role, org, description, link }: { role: string, org: string, description: string, link: string }) {
  return (
    <a 
      href={link}
      target={link !== "#" ? "_blank" : undefined}
      rel={link !== "#" ? "noopener noreferrer" : undefined}
      className="block group"
    >
      <motion.div 
        className="bg-card border border-hairline p-8 h-full relative overflow-hidden cursor-pointer"
        whileHover="hover"
        initial="initial"
      >
        <div className="text-xs font-medium text-muted-foreground mb-2">{role}</div>
        <h3 className="text-xl font-light text-foreground mb-4 group-hover:text-primary transition-colors">{org}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        
        <motion.div 
          className="absolute bottom-0 left-0 h-[2px] bg-primary w-full origin-left"
          variants={{
            initial: { scaleX: 0 },
            hover: { scaleX: 1 }
          }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        />
      </motion.div>
    </a>
  );
}
