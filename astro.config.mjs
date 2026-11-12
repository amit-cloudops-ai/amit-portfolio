import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://amit-portfolio.pages.dev',
  build: { format: 'directory' }
});