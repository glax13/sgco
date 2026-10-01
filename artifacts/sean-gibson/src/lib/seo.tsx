import { Helmet } from 'react-helmet-async';
import { useLocation } from 'wouter';

const BASE_URL = 'https://seangibson.co';

const SITE_TITLE =
  'Sean Gibson: Sport Governance, Enterprise Governance, High Performance Systems';

const SITE_DESCRIPTION =
  'A framework for how an organisation is actually put together, and why it holds or fails under pressure. Governance and high performance systems, in sport and in the enterprise.';

/** Routes the prerenderer walks. Keep in step with the Switch in App.tsx. */
export const PUBLIC_ROUTES = [
  '/',
  '/about',
  '/hpos',
  '/speaking',
  '/contact',
  '/privacy',
];

export function useSEO() {
  // Under SSR this resolves from the router's ssrPath, so each prerendered
  // route gets its own canonical rather than the homepage's.
  const [location] = useLocation();
  const canonical = `${BASE_URL}${location}`;

  return (
    <Helmet>
      <title>{SITE_TITLE}</title>
      <meta name="description" content={SITE_DESCRIPTION} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={SITE_TITLE} />
      <meta property="og:description" content={SITE_DESCRIPTION} />
      <meta property="og:url" content={canonical} />
      <meta name="twitter:title" content={SITE_TITLE} />
      <meta name="twitter:description" content={SITE_DESCRIPTION} />
    </Helmet>
  );
}
