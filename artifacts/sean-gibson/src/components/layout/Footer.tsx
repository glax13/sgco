import { useState } from "react";
import { Link } from "wouter";

export function Footer() {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || submitting) return;
    setSubmitting(true);
    setError(false);
    try {
      await fetch("https://theperformancesystem.substack.com/api/v1/free", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          first_url: window.location.href,
          source: "embed",
        }),
      });
      setSuccess(true);
      setEmail("");
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <footer className="border-t border-white/5 bg-[#0a1520] pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">

        <div className="md:col-span-4">
          <div className="font-sans font-medium tracking-wide text-lg mb-4">
            <span className="text-foreground">SEAN</span>
            <span className="text-primary ml-1">GIBSON</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Systems Thinker · Sport Governance · AI Risk
          </p>
        </div>

        <div className="md:col-span-4">
          <h4 className="text-sm font-medium text-foreground mb-6">Links</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li>
              <a
                href="https://www.linkedin.com/in/sgibson13/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://theperformancesystem.substack.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                Substack
              </a>
            </li>
            <li>
              <Link href="/contact" className="hover:text-primary transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <h4 className="text-sm font-medium text-foreground mb-2">Newsletter</h4>
          <p className="text-xs text-muted-foreground mb-5 leading-relaxed">
            Occasional writing on systems, performance, and governance. Via Substack.
          </p>

          {success ? (
            <p className="text-sm text-primary leading-relaxed">
              Check your email to confirm your subscription.
            </p>
          ) : (
            <form onSubmit={handleSubscribe} className="flex gap-2" noValidate>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="flex-1 min-w-0 bg-[#07111a] border border-white/10 text-foreground text-sm px-3 py-2 rounded-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors"
              />
              <button
                type="submit"
                disabled={submitting}
                className="px-4 py-2 bg-primary text-[#07111a] text-xs font-bold tracking-[0.1em] uppercase rounded-sm hover:opacity-88 disabled:opacity-50 transition-opacity whitespace-nowrap"
              >
                {submitting ? "..." : "Subscribe"}
              </button>
            </form>
          )}

          {error && !success && (
            <p className="text-xs text-muted-foreground mt-2">
              Something went wrong.{" "}
              <a
                href="https://theperformancesystem.substack.com/subscribe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline-offset-2 underline"
              >
                Subscribe directly on Substack.
              </a>
            </p>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between gap-3 text-xs text-muted-foreground">
        <span>© 2026 Sean Gibson. All rights reserved.</span>
        <Link href="/privacy" className="hover:text-primary transition-colors">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
}
