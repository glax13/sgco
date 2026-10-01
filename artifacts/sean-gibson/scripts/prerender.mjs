import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const artifactDir = path.resolve(scriptDir, "..");
const publicDir = path.join(artifactDir, "dist", "public");
const serverEntry = path.join(artifactDir, "dist", "server", "entry-server.js");
const template = await readFile(path.join(publicDir, "index.html"), "utf8");
const { PUBLIC_ROUTES, render } = await import(pathToFileURL(serverEntry).href);
// Strip exactly the tags Helmet re-emits per route, so they are not duplicated.
// useSEO now supplies the social tags per route too, so these all come out of
// the template; index.html keeps them for the SPA fallback on routes that are
// not prerendered. If you add a tag to useSEO, add it here as well.
const HELMET_OWNED = [
  /\s*<title>[\s\S]*?<\/title>/,
  /\s*<meta name="description"[^>]*>/,
  /\s*<meta property="og:title"[^>]*>/,
  /\s*<meta property="og:description"[^>]*>/,
  /\s*<meta property="og:type"[^>]*>/,
  /\s*<meta property="og:site_name"[^>]*>/,
  /\s*<meta property="og:image"[^>]*>/,
  /\s*<meta name="twitter:card"[^>]*>/,
  /\s*<meta name="twitter:image"[^>]*>/,
  /\s*<link rel="canonical"[^>]*>/,
];
const productionTemplate = HELMET_OWNED.reduce((acc, re) => acc.replace(re, ""), template);

for (const route of PUBLIC_ROUTES) {
  const { html, head } = render(route);
  const document = productionTemplate
    .replace("<!-- ROUTE_SEO_HEAD -->", head)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`);
  const outputPath =
    route === "/" ? path.join(publicDir, "index.html") : path.join(publicDir, route.slice(1), "index.html");

  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, document);
}

const sitemapPath = path.join(publicDir, "sitemap.xml");
const sitemap = await readFile(sitemapPath, "utf8");
const publicationDate = new Date().toISOString().slice(0, 10);
await writeFile(
  sitemapPath,
  sitemap.replace(/<lastmod>[^<]*<\/lastmod>/g, `<lastmod>${publicationDate}</lastmod>`),
);

console.log(`Prerendered ${PUBLIC_ROUTES.length} routes with publication date ${publicationDate}.`);