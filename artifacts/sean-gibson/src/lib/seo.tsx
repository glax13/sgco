import { Helmet } from 'react-helmet-async';
import { useLocation } from 'wouter';
import snapdragonSrc from "@assets/image_1776436835400.png";
import govnetSrc from "@assets/1675168183288_1776353956820.jfif";
import headshotSrc from "@assets/Gibson_01a_1776325555130.jpg";

const BASE_URL = 'https://seangibson.co';

export const SITE_TITLE =
  'Sean Gibson: Sport Governance, Enterprise Governance, High Performance Systems';

export const SITE_DESCRIPTION =
  'A framework for how an organisation is actually put together, and why it holds or fails under pressure. Governance and high performance systems, in sport and in the enterprise.';

export function useSEO() {
  const [location] = useLocation();
  const seo = getRouteSEO(path || location);

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
