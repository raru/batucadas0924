import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [react(), tailwind()],
    // site: 'https://raru.github.io/',
    // root: './Users/raru/Sites/localhost/batucadas',
    // base: './dist/',
      base: './',
    output: 'static'  
});

