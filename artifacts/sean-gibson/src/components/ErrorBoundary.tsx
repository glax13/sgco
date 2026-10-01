import { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  error: Error | null;
}

/**
 * Catches render errors so one broken component cannot take the whole site
 * down to a blank white document. Deliberately free of router, query and
 * helmet context: whatever threw may have been one of those providers.
 */
export class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error) {
    console.error("Unhandled render error:", error);
  }

  render() {
    if (!this.state.error) return this.props.children;

    return (
      <div className="min-h-screen bg-background text-foreground font-sans antialiased flex items-center px-6 py-24">
        <div className="max-w-2xl mx-auto w-full">
          <p className="text-sm font-medium text-primary tracking-wide uppercase mb-6">
            Something broke
          </p>

          <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-8">
            This page failed to load.
          </h1>

          <p className="text-lg text-muted-foreground font-light leading-relaxed mb-10">
            The fault is on my side, not yours. Reloading usually clears it. If it
            keeps happening, email me and tell me what you were trying to reach.
          </p>

          <div className="flex flex-wrap gap-3 mb-12">
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="px-5 py-3 bg-primary text-primary-foreground text-xs font-bold tracking-[0.12em] uppercase hover:opacity-90 transition-opacity"
            >
              Reload the page
            </button>
            <a
              href="/"
              className="px-5 py-3 border border-primary/40 text-primary text-xs font-bold tracking-[0.12em] uppercase hover:bg-primary/10 transition-colors"
            >
              Back to the homepage
            </a>
          </div>

          <p className="text-sm text-muted-foreground">
            <a
              href="mailto:sean@seangibson.co"
              className="text-foreground hover:text-primary transition-colors underline underline-offset-4 decoration-white/20"
            >
              sean@seangibson.co
            </a>
          </p>
        </div>
      </div>
    );
  }
}
