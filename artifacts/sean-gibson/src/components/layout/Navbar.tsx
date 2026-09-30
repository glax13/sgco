import { Link, useLocation } from "wouter";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Escape closes the menu, and so does landing on a new route. Without the
  // second one, a back/forward navigation leaves the panel hanging open.
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [mobileMenuOpen]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const links = [
    { href: "/about", label: "About" },
    { href: "/hpos", label: "The HPOS" },
    { href: "/speaking", label: "Speaking" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#07111a]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group" data-testid="link-home">
          <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center bg-[#0a1520] group-hover:border-primary/40 transition-colors">
            <span className="font-serif text-sm text-foreground">SG</span>
          </div>
          <div className="font-sans font-medium tracking-wide text-sm">
            <span className="text-foreground">SEAN</span>
            <span className="text-primary ml-1">GIBSON</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav aria-label="Main" className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                location === link.href ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
              aria-current={location === link.href ? "page" : undefined}
              data-testid={`link-${link.label.toLowerCase()}`}
            >
              {link.label}
            </Link>
          ))}
          <Link 
            href="/contact"
            className="text-sm font-medium bg-white/5 hover:bg-white/10 text-foreground px-5 py-2.5 transition-all border border-white/5 hover:border-white/10 hover:-translate-y-[1px]"
            data-testid="link-nav-contact"
          >
            Get in Touch
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          type="button"
          className="md:hidden text-foreground p-2 -mr-2 hover:text-primary transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          data-testid="button-mobile-menu"
        >
          {mobileMenuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Main"
          className="md:hidden bg-[#0a1520] border-b border-white/5 px-6 py-6 flex flex-col gap-6"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              aria-current={location === link.href ? "page" : undefined}
              className={`text-lg font-medium py-1 ${
                location === link.href ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
