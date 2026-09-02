import { renderToString } from "react-dom/server";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import { PUBLIC_ROUTES } from "./lib/seo";

export { PUBLIC_ROUTES };

export function render(url: string) {
  const helmetContext: Record<string, unknown> = {};
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <App ssrPath={url} />
    </HelmetProvider>,
  );
  const helmet = helmetContext.helmet as {
    title: { toString(): string };
    meta: { toString(): string };
    link: { toString(): string };
  };

  return {
    html,
    head: [helmet.title.toString(), helmet.meta.toString(), helmet.link.toString()].join("\n    "),
  };
}