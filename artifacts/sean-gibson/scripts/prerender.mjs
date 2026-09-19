import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const artifactDir = path.resolve(scriptDir, "..");
const publicDir = path.join(artifactDir, "dist", "public");
const serverEntry = path.join(artifactDir, "dist", "server", "entry-server.js");
const template = await readFile(path.join(publicDir, "index.html"), "utf8");
const { PUBLIC_ROUTES, render } = await import(pathToFileURL(serverEntry).href);
const productionTemplate = template
  .replace(/\s*<title>[\s\S]*?<\/title>/, "")
  .replace(/\s*<meta name="description"[^>]*>/, "")
  .replace(/\s*<meta property="og:type"[^>]*>/, "")
  .replace(/\s*<meta property="og:site_name"[^>]*>/, "")
  .replace(/\s*<meta name="twitter:card"[^>]*>/, "")
  .replace(/\s*<link rel="canonical"[^>]*>/, "");

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