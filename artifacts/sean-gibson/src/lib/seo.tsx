import { Helmet } from 'react-helmet-async';
import { useLocation } from 'wouter';
import snapdragonSrc from "@assets/image_1776436835400.png";
import govnetSrc from "@assets/1675168183288_1776353956820.jfif";
import headshotSrc from "@assets/Gibson_01a_1776325555130.jpg";

interface SEOProps {
  path: string;
}

const BASE_URL = 'https://seangibson.co';

export const PUBLIC_ROUTES = ["/", "/about", "/hpos", "/speaking", "/contact", "/privacy"];

const routeSEO: Record<string, {
  title: string;
  description: string;
  image: string;
}> = {
  "/": {
    title: "Sean Gibson — Systems Thinker, Sport Governance, AI Risk",
    description: "Sean Gibson is a systems thinker working across enterprise governance, elite sport leadership, and AI risk.",
    image: `${BASE_URL}/opengraph.jpg`,
  },
  "/about": {
    title: "About Sean Gibson — Governance and High Performance",
    description: "Learn how Sean Gibson's work across enterprise governance and elite sport shaped the High Performance Operating System.",
    image: `${BASE_URL}${govnetSrc}`,
  },
  "/hpos": {
    title: "The HPOS — High Performance Operating System",
    description: "Explore the High Performance Operating System, a diagnostic framework for coherent strategy, governance, people, pathways, data, and culture.",
    image: `${BASE_URL}${snapdragonSrc}`,
  },
  "/speaking": {
    title: "Speaking — Sean Gibson on Performance and Governance",
    description: "Book Sean Gibson for keynotes, conferences, and workshops on system coherence, performance debt, and AI governance.",
    image: `${BASE_URL}${govnetSrc}`,
  },
  "/contact": {
    title: "Contact Sean Gibson — Advisory and Speaking",
    description: "Contact Sean Gibson about advisory work, speaking engagements, workshops, or the High Performance Operating System.",
    image: `${BASE_URL}${headshotSrc}`,
  },
  "/privacy": {
    title: "Privacy Policy — Sean Gibson",
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
      title: "Sean Gibson — Systems Thinker, Sport Governance, AI Risk",
      description: "Sean Gibson is a systems thinker working across enterprise governance, elite sport leadership, and AI risk.",
      image: `${BASE_URL}/opengraph.jpg`,
    }),
  };
}

export function useSEO({ path }: SEOProps) {
  const [location] = useLocation();
  const seo = getRouteSEO(path || location);

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
      <meta property="og:image:alt" content={`Sean Gibson — ${seo.title}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:image:alt" content={`Sean Gibson — ${seo.title}`} />
    </Helmet>
  );
}
