// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://juanmata.krono.date',
  integrations: [icon(), sitemap()],
  // GitHub Pages no permite cabeceras HTTP propias: la CSP viaja en un <meta> con hashes.
  security: {
    csp: {
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        "font-src 'self'",
        "connect-src 'self'",
        "base-uri 'self'",
        "form-action 'none'",
        "object-src 'none'",
        'upgrade-insecure-requests',
      ],
      scriptDirective: { resources: ["'self'"] },
      // Solo los atributos style (variables CSS como --brand); nada de <style> ni scripts inline.
      styleDirective: { resources: ["'self'", { kind: 'attribute', resource: "'unsafe-inline'" }] },
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
