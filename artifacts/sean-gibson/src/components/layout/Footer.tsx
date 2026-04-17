import { Link } from "wouter";
import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/newsletter/substack", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
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
          {status === "success" ? (
            <p className="text-xs text-primary">{message}</p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={status === "loading"}
                  placeholder="Email address"
                  className="flex-1 min-w-0 bg-[#07111a] border border-white/10 text-foreground text-sm px-3 py-2 rounded-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="px-4 py-2 bg-primary text-[#07111a] text-xs font-bold tracking-[0.1em] uppercase rounded-sm hover:opacity-90 transition-opacity whitespace-nowrap disabled:opacity-50"
                >
                  {status === "loading" ? "..." : "Subscribe"}
                </button>
              </div>
              {status === "error" && (
                <p className="text-xs text-red-400">{message}</p>
              )}
            </form>
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
