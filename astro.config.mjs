import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://legendindustries.in',
  output: 'static',
  build: {
    format: 'file'
  }
});