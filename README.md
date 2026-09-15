# Portafolio — Juan Mata

Portafolio personal construido con [Astro](https://astro.build) y [Tailwind CSS](https://tailwindcss.com), desplegado gratis en GitHub Pages con dominio propio: **https://juanmata.krono.date**

## Desarrollo local

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera ./dist
npm run preview  # sirve ./dist
```

## Editar contenido

Todo el texto del sitio está en [`src/data/cv.ts`](src/data/cv.ts): perfil, resumen, habilidades, experiencia, proyectos, formación y contacto.

- **Foto:** reemplaza `src/assets/juan-mata.png` (se optimiza automáticamente a AVIF/WebP).
- **CV descargable:** la fuente es [`cv/cv.html`](cv/cv.html). Ábrelo en Chrome → Imprimir → Guardar como PDF (A4, con gráficos de fondo) y reemplaza `public/juan-mata-cv.pdf`. Debe quedar en una sola página y seguir siendo compatible con ATS: una columna, fuente Arial, viñetas nativas (sin `position` ni `::before`), encabezados estándar (Resumen profesional, Habilidades, Experiencia profesional, Proyectos, Educación, Certificaciones, Idiomas) y URLs escritas en texto.
- **Iconos:** cada habilidad usa un nombre de [Iconify](https://icon-sets.iconify.design/) — `simple-icons:*` para logos de tecnologías y `lucide:*` para iconos genéricos.
- **Proyectos:** agrega `repo` o `demo` en un proyecto para mostrar sus botones.

## Despliegue

Cada `push` a `main` ejecuta `.github/workflows/deploy.yml`, que compila el sitio y lo publica en GitHub Pages.

### Dominio `juanmata.krono.date` (Cloudflare)

1. Cloudflare → `krono.date` → **DNS** → **Records** → **Add record**
   - Type: `CNAME`
   - Name: `juanmata`
   - Target: `jundev66.github.io`
   - Proxy status: **DNS only** (nube gris)
2. GitHub → repo → **Settings → Pages** → Custom domain: `juanmata.krono.date` (el archivo `public/CNAME` ya lo define).
3. Cuando GitHub emita el certificado, activa **Enforce HTTPS**.
