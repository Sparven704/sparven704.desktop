// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Required for GitHub Pages project sites (username.github.io/repo-name)
  base: '/sparven704.desktop/',
  vite: {
    plugins: [tailwindcss()]
  }
});