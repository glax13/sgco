import { PageLayout } from "@/components/layout/PageLayout";
import { useSEO } from "@/lib/seo";
import { Link } from "wouter";
import { motion } from "framer-motion";
import headshotSrc from "@assets/Gibson_01a_1776325555130.jpg";

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
      <section className="relative min-h-screen flex items-end pb-0 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-[1fr_auto] gap-0 items-end">

          <div className="pt-36 pb-12 md:pb-16 md:pr-12 flex flex-col justify-end">
            <p className="text-primary text-xs font-semibold tracking-[0.22em] uppercase mb-8 flex items-center gap-3" data-testid="text-tagline">
              <span className="w-[18px] h-px bg-primary inline-block" />
              Systems Thinker · Sport Governance · AI Risk
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-[-0.055em] leading-[1.02] mb-6 max-w-[780px]" data-testid="text-headline">
              I spent years asking why <em className="font-light italic not-italic" style={{ fontFamily: "'DM Serif Display', Georgia, serif", color: "var(--color-primary)" }}>good organisations</em> keep failing the same way.
            </h1>
            <p className="text-base text-muted-foreground leading-[1.9] max-w-[420px] mb-8" data-testid="text-subheadline">
              The answer was always the same. It wasn't the people. It was the system. And no one was looking at the system.
            </p>
            <div className="flex gap-3 flex-wrap mb-16">
              <Link href="/about">
                <button className="px-5 py-2.5 bg-primary text-[#07111a] text-xs font-bold tracking-[0.12em] uppercase rounded-sm hover:opacity-88 hover:-translate-y-px transition-all" data-testid="button-my-story">
                  My Story
                </button>
              </Link>
              <Link href="/hpos">
                <button className="px-5 py-2.5 border border-primary/40 text-primary text-xs font-bold tracking-[0.12em] uppercase rounded-sm hover:bg-primary/10 hover:-translate-y-px transition-all" data-testid="button-hpos">
                  The High Performance OS
                </button>
              </Link>
            </div>

            <div className="border-t border-white/7 grid grid-cols-3 divide-x divide-white/7">
              <div className="pr-8 py-5">
                <div className="text-3xl font-black tracking-[-0.04em] text-foreground leading-none mb-1">
                  20<span className="text-primary">+</span>
                </div>
                <div className="text-xs text-muted-foreground leading-[1.5]">
                  Years across enterprise governance<br />and elite sport leadership
                </div>
              </div>
              <div className="px-8 py-5">
                <div className="text-3xl font-black tracking-[-0.04em] text-foreground leading-none mb-1">
                  3<span className="text-primary">×</span>
                </div>
                <div className="text-xs text-muted-foreground leading-[1.5]">
                  Active senior operational roles<br />simultaneously held
                </div>
              </div>
              <div className="pl-8 py-5">
                <div className="text-3xl font-black tracking-[-0.04em] text-foreground leading-none mb-1">
                  1<span className="text-primary text-lg"> question</span>
                </div>
                <div className="text-xs text-muted-foreground leading-[1.5]">
                  Is the system coherent? Who is<br />absorbing the cost when it isn't?
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:block self-end">
            <div className="w-[320px] lg:w-[380px] aspect-[3/4] overflow-hidden" style={{ maskImage: "linear-gradient(to top, transparent 0%, black 18%)", WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 18%)" }}>
              <img
                src={headshotSrc}
                alt="Sean Gibson"
                className="w-full h-full object-cover object-center"
                width={380}
                height={507}
              />
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
