import { Helmet } from 'react-helmet-async';
import { useLocation } from 'wouter';

const BASE_URL = 'https://seangibson.co';

export const SITE_TITLE =
  'Sean Gibson: Sport Governance, Enterprise Governance, High Performance Systems';

export const SITE_DESCRIPTION =
  'A framework for how an organisation is actually put together, and why it holds or fails under pressure. Governance and high performance systems, in sport and in the enterprise.';

export function useSEO() {
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
