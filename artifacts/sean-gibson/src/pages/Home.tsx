import { PageLayout } from "@/components/layout/PageLayout";
import { useSEO } from "@/lib/seo";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Home() {
  useSEO({
    title: "Home — Sean Gibson",
    description: "Systems Thinker · Sport Governance · AI Risk. Sean Gibson is a senior executive operating across enterprise governance, elite sport leadership, and AI risk."
  });

  const tickerItems = [
    "Principal Researcher, GRC · Ardoq",
    "Men's National Team Director · Ireland Lacrosse",
    "Chair, High Performance Committee · Ireland Lacrosse",
    "Former Board Member · World Lacrosse",
    "Founder · Glenview Sports"
  ];

  return (
    <PageLayout>
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary text-sm font-medium tracking-wide mb-8 uppercase" data-testid="text-tagline">
            Systems Thinker · Sport Governance · AI Risk
          </p>
          <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-8 leading-[1.1]" data-testid="text-headline">
            I spent years asking why good organisations keep failing the same way.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light" data-testid="text-subheadline">
            The answer was always the same. It wasn't the people. It was the system. And no one was looking at the system.
          </p>
        </div>
      </section>

      <section className="border-y border-white/5 bg-[#0a1520]">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-white/5">
          <div className="md:pr-8 py-4 md:py-0">
            <div className="text-4xl font-serif text-foreground mb-2">20+</div>
            <div className="text-sm text-muted-foreground leading-relaxed">
              Years across enterprise governance and elite sport leadership
            </div>
          </div>
          <div className="md:px-8 py-4 md:py-0">
            <div className="text-4xl font-serif text-foreground mb-2">3×</div>
            <div className="text-sm text-muted-foreground leading-relaxed">
              Active senior operational roles simultaneously held
            </div>
          </div>
          <div className="md:pl-8 py-4 md:py-0">
            <div className="text-4xl font-serif text-foreground mb-2">1 question</div>
            <div className="text-sm text-muted-foreground leading-relaxed">
              Is the system coherent? Who is absorbing the cost when it isn't?
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/5 bg-background overflow-hidden py-6">
        <div className="flex w-full overflow-hidden group">
          <div className="flex whitespace-nowrap animate-ticker group-hover:[animation-play-state:paused]">
            {[...tickerItems, ...tickerItems, ...tickerItems].map((item, i) => (
              <div key={i} className="flex items-center text-sm font-medium text-muted-foreground mx-8 whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mr-8"></span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <PathwayCard 
              number="01"
              tag="Biography"
              title="The Person"
              description="Two decades bridging commercial technology, national sport, and advisory work."
              link="/about"
            />
            <PathwayCard 
              number="02"
              tag="Methodology"
              title="The Framework"
              description="The High Performance Operating System (HPOS) as a diagnostic lens."
              link="/hpos"
            />
            <PathwayCard 
              number="03"
              tag="Delivery"
              title="Speaking & Delivery"
              description="Keynotes, conferences, and half-day workshops on system coherence."
              link="/speaking"
            />
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

function PathwayCard({ number, tag, title, description, link }: { number: string, tag: string, title: string, description: string, link: string }) {
  return (
    <Link href={link}>
      <motion.div 
        className="group relative bg-card border border-white/5 p-10 h-full flex flex-col justify-between overflow-hidden cursor-pointer"
        whileHover="hover"
        initial="initial"
      >
        <div className="absolute -top-10 -right-6 text-[120px] font-serif font-black text-white/[0.02] select-none pointer-events-none transition-transform group-hover:scale-110 duration-700">
          {number}
        </div>
        
        <div>
          <div className="text-xs font-medium text-primary tracking-wide uppercase mb-6">{tag}</div>
          <h3 className="text-2xl font-light mb-4">{title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-12">{description}</p>
        </div>
        
        <div className="text-sm font-medium text-foreground flex items-center gap-2 group-hover:text-primary transition-colors">
          Read / Explore <span className="group-hover:translate-x-1 transition-transform">→</span>
        </div>

        <motion.div 
          className="absolute bottom-0 left-0 h-[2px] bg-primary w-full origin-left"
          variants={{
            initial: { scaleX: 0 },
            hover: { scaleX: 1 }
          }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        />
      </motion.div>
    </Link>
  );
}
