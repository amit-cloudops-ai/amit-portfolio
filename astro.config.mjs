import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
  output: 'static',
  site: 'https://amit-portfolio.amitpm-github.workers.dev',
  build: { format: 'directory' }
});
