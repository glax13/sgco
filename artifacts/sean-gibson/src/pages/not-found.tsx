import { PageLayout } from "@/components/layout/PageLayout";
import { useSEO } from "@/lib/seo";
import { Link, useLocation } from "wouter";

const destinations = [
  { href: "/hpos", label: "The High Performance Operating System", desc: "The architecture, the five dimensions and the method." },
  { href: "/about", label: "Two worlds. One operating system.", desc: "Twenty years across enterprise governance and elite sport." },
  { href: "/speaking", label: "Speaking", desc: "Keynotes, conferences and half-day workshops." },
  { href: "/contact", label: "Contact", desc: "Advisory and speaking enquiries." },
];

export default function NotFound() {
  const seo = useSEO();
  const [location] = useLocation();

  return (
    <PageLayout>
      {seo}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <p className="text-sm font-medium text-primary tracking-wide uppercase mb-6">Error 404</p>

        <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-8">
          That page is not part of the system.
        </h1>

        <div className="prose prose-invert prose-lg max-w-none text-muted-foreground font-light leading-relaxed mb-4">
          <p>
            Nothing is published at this address. The link may be out of date, or the address may have a typo in it.
          </p>
        </div>

        <p className="text-sm text-muted-foreground mb-16">
          You asked for{" "}
          <span className="text-foreground font-medium break-all">{location}</span>
        </p>

        <h2 className="text-sm font-medium text-primary tracking-wide uppercase mb-8">Where to go instead</h2>

        <nav aria-label="Suggested pages" className="space-y-4 mb-16">
          {destinations.map((d) => (
            <Link
              key={d.href}
              href={d.href}
              className="group block bg-card border border-white/5 p-6 hover:border-primary/30 transition-colors"
            >
              <h3 className="text-lg font-medium text-foreground mb-1 group-hover:text-primary transition-colors">
                {d.label}
              </h3>
              <p className="text-sm text-muted-foreground">{d.desc}</p>
            </Link>
          ))}
        </nav>

        <Link
          href="/"
          className="inline-block px-5 py-3 bg-primary text-primary-foreground text-xs font-bold tracking-[0.12em] uppercase hover:opacity-90 transition-opacity"
        >
          Back to the homepage
        </Link>
      </section>
    </PageLayout>
  );
}
