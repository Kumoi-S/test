// @ts-check
import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  site: 'https://kumoi-s.github.io',
  base: '/test',
  integrations: [preact()],
});