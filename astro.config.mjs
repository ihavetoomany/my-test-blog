// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  output: 'server',

  // Allow same-site form POSTs on Vercel (origin check can fail behind proxies)
  security: { checkOrigin: false },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react()],
  adapter: vercel()
});