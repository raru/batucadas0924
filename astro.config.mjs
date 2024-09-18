import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [react(), tailwind()],
    site: 'https://raru.github.io/batucadas0924/',
    // root: './Users/raru/Sites/localhost/batucadas',
    // base: './Users/raru/Sites/localhost/batucadas/dist/',
    output: 'static'  
});
