import { Helmet } from 'react-helmet-async';
import { useLocation } from 'wouter';
import snapdragonSrc from "@assets/derived/stadium-1439.jpg";
import govnetSrc from "@assets/derived/govnet-1280.jpg";
import headshotSrc from "@assets/derived/hero-760.jpg";

const BASE_URL = 'https://seangibson.co';

const SITE_TITLE =
  'Sean Gibson: Sport Governance, Enterprise Governance, High Performance Systems';

const SITE_DESCRIPTION =
  'A framework for how an organisation is actually put together, and why it holds or fails under pressure. Governance and high performance systems, in sport and in the enterprise.';

/** Routes the prerenderer walks. Keep in step with the Switch in App.tsx. */
export const PUBLIC_ROUTES = ["/", "/about", "/hpos", "/speaking", "/contact", "/privacy"];

const routeSEO: Record<string, {
  title: string;
  description: string;
  image: string;
}> = {
  "/": {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    image: `${BASE_URL}/opengraph.jpg`,
  },
  "/about": {
    title: "About | Sean Gibson",
    description: "Learn how Sean Gibson's work across enterprise governance and elite sport shaped the High Performance Operating System.",
    image: `${BASE_URL}${govnetSrc}`,
  },
  "/hpos": {
    title: "The High Performance Operating System | Sean Gibson",
    description: "Explore the High Performance Operating System, a diagnostic framework for coherent strategy, governance, people, pathways, data, and culture.",
    image: `${BASE_URL}${snapdragonSrc}`,
  },
  "/speaking": {
    title: "Speaking | Sean Gibson",
    description: "Book Sean Gibson for keynotes, conferences, and workshops on system coherence, performance debt, and AI governance.",
    image: `${BASE_URL}${govnetSrc}`,
  },
  "/contact": {
    title: "Contact | Sean Gibson",
    description: "Contact Sean Gibson about advisory work, speaking engagements, workshops, or the High Performance Operating System.",
    image: `${BASE_URL}${headshotSrc}`,
  },
  "/privacy": {
    title: "Privacy Policy | Sean Gibson",
    description: "Read the privacy policy for seangibson.co, including how contact form and newsletter data are collected and used.",
    image: `${BASE_URL}/opengraph.jpg`,
  },
};

function normalisePath(path: string) {
  const withoutQuery = path.split(/[?#]/, 1)[0] || "/";
  if (withoutQuery === "/") return "/";
  return `/${withoutQuery.replace(/^\/+|\/+$/g, "")}`;
}

export function getRouteSEO(path: string) {
  const route = normalisePath(path);
  return {
    path: route,
    canonical: `${BASE_URL}${route}`,
    ...(routeSEO[route] ?? {
      title: SITE_TITLE,
      description: SITE_DESCRIPTION,
      image: `${BASE_URL}/opengraph.jpg`,
    }),
  };
}

export function useSEO() {
  // Under SSR this resolves from the router's ssrPath, so each prerendered
  // route gets its own canonical rather than the homepage's.
  const [location] = useLocation();
  const seo = getRouteSEO(location);

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <link rel="canonical" href={seo.canonical} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Sean Gibson" />
      <meta property="og:image" content={seo.image} />
      <meta property="og:image:alt" content={`Sean Gibson, ${seo.title}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:image:alt" content={`Sean Gibson, ${seo.title}`} />
    </Helmet>
  );
}
