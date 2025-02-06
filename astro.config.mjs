import mdx from '@astrojs/mdx';
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: 'https://kumoi-s.github.io',
  base: '/test',
  trailingSlash: "never",
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },
  integrations: [
    mdx(),
    sitemap(),
    react(),
  ],
  output: "static",
});
