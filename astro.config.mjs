// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: process.env.ASTRO_SITE || 'https://Ghost-570.github.io',
  base: process.env.ASTRO_BASE || '/',
});