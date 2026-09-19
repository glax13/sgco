---
name: React Helmet prerendering
description: Compatibility requirement when using react-helmet-async in a Vite SSR bundle.
---

When a Vite SSR entry imports `react-helmet-async`, configure Vite SSR to bundle that package rather than externalizing it.

**Why:** Node's ESM loader cannot reliably consume the package's named exports from its CommonJS build, causing the prerender step to fail only after the client build succeeds.

**How to apply:** For any Vite SSR or build-time prerender path using this package, include it in the SSR `noExternal` list and verify the generated server bundle can execute under Node.