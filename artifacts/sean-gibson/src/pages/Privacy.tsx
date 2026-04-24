import { PageLayout } from "@/components/layout/PageLayout";
import { useSEO } from "@/lib/seo";

export default function Privacy() {
  const seo = useSEO({
    title: "Privacy Policy — Sean Gibson",
    description: "Privacy Policy for seangibson.co — how personal data submitted via the contact form and newsletter is collected and used.",
  });

  return (
    <PageLayout>
      {seo}
      <section className="py-24 px-6 max-w-3xl mx-auto">
        <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-6">
          Legal
        </p>
        <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
          Privacy Policy
        </h1>
        <p className="text-sm text-muted-foreground mb-16">
          Last updated: April 2026
        </p>

        <div className="space-y-14 text-sm text-muted-foreground leading-[1.9]">

          <div>
            <h2 className="text-base font-medium text-foreground mb-3">1. Who we are</h2>
            <p>
              This website is operated by Sean Gibson, trading as Glenview Sports. The data controller for all personal data collected through this site is:
            </p>
            <div className="mt-4 pl-5 border-l border-white/10 space-y-1 text-muted-foreground">
              <p>Sean Gibson</p>
              <p>seangibson.co</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:sean@seangibson.co"
                  className="text-primary hover:underline underline-offset-2"
                >
                  sean@seangibson.co
                </a>
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-base font-medium text-foreground mb-3">2. What data we collect</h2>
            <p className="mb-4">We collect personal data in two places on this site:</p>
            <ul className="space-y-3 pl-5 list-disc marker:text-primary/50">
              <li>
                <span className="text-foreground font-medium">Contact form.</span> When you submit a message via the Contact page, we collect your name, email address, and message content.
              </li>
              <li>
                <span className="text-foreground font-medium">Newsletter.</span> When you subscribe to the newsletter, your email address is collected and processed by Substack, Inc. Sean Gibson operates the newsletter through Substack's platform at{" "}
                <a
                  href="https://theperformancesystem.substack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline underline-offset-2"
                >
                  theperformancesystem.substack.com
                </a>
                .
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-base font-medium text-foreground mb-3">3. How we use your data</h2>
            <ul className="space-y-3 pl-5 list-disc marker:text-primary/50">
              <li>
                <span className="text-foreground font-medium">Contact form submissions</span> are used solely to respond to your enquiry. They are stored securely in a hosted PostgreSQL database and are not shared with third parties.
              </li>
              <li>
                <span className="text-foreground font-medium">Newsletter data</span> is held and processed by Substack under their own Privacy Policy. Sean Gibson uses it to send occasional writing on systems, performance, and governance. You can unsubscribe at any time via the link in any email.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-base font-medium text-foreground mb-3">4. Legal basis for processing</h2>
            <p>
              Contact form data is processed on the basis of <span className="text-foreground">legitimate interest</span> — specifically, responding to a direct enquiry. Newsletter subscriptions are processed on the basis of <span className="text-foreground">consent</span>, which you may withdraw at any time.
            </p>
          </div>

          <div>
            <h2 className="text-base font-medium text-foreground mb-3">5. Data retention</h2>
            <ul className="space-y-3 pl-5 list-disc marker:text-primary/50">
              <li>
                Contact form submissions are retained for 12 months from the date of submission, after which they are deleted.
              </li>
              <li>
                Newsletter subscriber data is retained by Substack for as long as you remain subscribed. Unsubscribing removes you from the mailing list.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-base font-medium text-foreground mb-3">6. Cookies</h2>
            <p>
              This site does not use advertising or analytics cookies. No third-party tracking scripts are loaded. The only data stored in your browser is session state necessary for the site to function, which is deleted when you close your browser.
            </p>
          </div>

          <div>
            <h2 className="text-base font-medium text-foreground mb-3">7. Third-party processors</h2>
            <p className="mb-4">We use the following third-party services that may process your personal data:</p>
            <ul className="space-y-3 pl-5 list-disc marker:text-primary/50">
              <li>
                <span className="text-foreground font-medium">Substack, Inc.</span> — newsletter delivery. See Substack's{" "}
                <a
                  href="https://substack.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline underline-offset-2"
                >
                  Privacy Policy
                </a>
                .
              </li>
              <li>
                <span className="text-foreground font-medium">Replit, Inc.</span> — website hosting and database infrastructure.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-base font-medium text-foreground mb-3">8. Your rights</h2>
            <p className="mb-4">
              Under UK GDPR and EU GDPR, you have the right to:
            </p>
            <ul className="space-y-2 pl-5 list-disc marker:text-primary/50">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to or restrict processing</li>
              <li>Withdraw consent at any time (for newsletter)</li>
              <li>Lodge a complaint with a supervisory authority</li>
            </ul>
            <p className="mt-4">
              To exercise any of these rights, email{" "}
              <a
                href="mailto:sean@seangibson.co"
                className="text-primary hover:underline underline-offset-2"
              >
                sean@seangibson.co
              </a>
              . We will respond within 30 days.
            </p>
          </div>

          <div>
            <h2 className="text-base font-medium text-foreground mb-3">9. Changes to this policy</h2>
            <p>
              We may update this policy from time to time. The "last updated" date at the top of this page will reflect any changes. Continued use of the site after changes constitutes acceptance of the revised policy.
            </p>
          </div>

          <div className="pt-4 border-t border-white/5">
            <p className="text-xs text-muted-foreground/60">
              This policy is provided in good faith and is intended to reflect current data handling practices. It does not constitute legal advice. Sean Gibson recommends seeking independent legal review before relying on this policy for compliance purposes.
            </p>
          </div>

        </div>
      </section>
    </PageLayout>
  );
}
