import { Link } from "wouter";
import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "loading") return;

    const trimmed = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setStatus("error");
      setMessage("Enter a valid email address, for example name@example.com.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/newsletter/substack", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed }),
      });

      let data: Record<string, unknown> = {};
      try {
        data = await res.json();
      } catch {
      }

      if (!res.ok) {
        setStatus("error");
        setMessage(typeof data?.error === "string" ? data.error : "Subscription failed. Please try again.");
      } else {
        setStatus("success");
        setMessage(typeof data?.message === "string" ? data.message : "Check your email to confirm your subscription.");
        setEmail("");
      }
    } catch {
      setStatus("error");
      setMessage("Could not reach the newsletter service. Please try again.");
    }
  }

  return (
    <footer className="border-t border-hairline bg-surface pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">

        <div className="md:col-span-4">
          <div className="font-sans font-medium tracking-wide text-lg mb-4">
            <span className="text-foreground">SEAN</span>
            <span className="text-primary ml-1">GIBSON</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Sport Governance · Enterprise Governance · High Performance Systems
          </p>
          <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
            Current work: AI governance under the EU AI Act, in sport and in the enterprise.
          </p>
        </div>

        <div className="md:col-span-4">
          <h2 className="text-sm font-medium text-foreground mb-6">Links</h2>
          <ul className="text-sm text-muted-foreground">
            <li>
              <a
                href="https://www.linkedin.com/in/sgibson13/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center min-h-11 hover:text-primary transition-colors"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://theperformancesystem.substack.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center min-h-11 hover:text-primary transition-colors"
              >
                Substack
              </a>
            </li>
            <li>
              <Link href="/contact" className="inline-flex items-center min-h-11 hover:text-primary transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <h2 className="text-sm font-medium text-foreground mb-2">Newsletter</h2>
          <p className="text-xs text-muted-foreground mb-5 leading-relaxed">
            Occasional writing on systems, performance, and governance. Via Substack.
          </p>
          {status === "success" ? (
            <p className="text-xs text-primary" role="status">{message}</p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-2" noValidate>
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <div className="flex gap-2">
                <input
                  id="newsletter-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  maxLength={254}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  aria-required="true"
                  aria-invalid={status === "error" ? true : undefined}
                  aria-describedby={status === "error" ? "newsletter-error" : undefined}
                  disabled={status === "loading"}
                  placeholder="Email address"
                  className="flex-1 min-w-0 min-h-11 bg-background border border-hairline-strong text-foreground text-sm px-3 py-2 rounded-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="px-4 min-h-11 bg-primary text-primary-foreground text-xs font-bold tracking-[0.1em] uppercase rounded-sm hover:opacity-90 transition-opacity whitespace-nowrap disabled:opacity-50"
                >
                  {status === "loading" ? "Sending" : "Subscribe"}
                </button>
              </div>
              {/* Always mounted, so the live region exists before it has content. */}
              <p
                id="newsletter-error"
                role="alert"
                className={`text-xs text-red-400 ${status === "error" ? "" : "hidden"}`}
              >
                {status === "error" ? message : ""}
              </p>
            </form>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-hairline pt-8 flex flex-col md:flex-row justify-between gap-3 text-xs text-muted-foreground">
        <span className="inline-flex items-center min-h-11">© 2026 Sean Gibson. All rights reserved.</span>
        <Link href="/privacy" className="inline-flex items-center min-h-11 hover:text-primary transition-colors">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
}
