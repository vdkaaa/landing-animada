# Landing Animada (React + Tailwind)

Portafolio/landing simple con animaciones y un header centrado. Construido con React, TypeScript, Vite y Tailwind CSS.

- Demo: próximamente (GitHub Pages)
- Tech: React + TypeScript + Vite + Tailwind

## Características

- Header centrado con separación fija entre enlaces (`space-x-[3cm]`).
- Hero con slogan rotatorio cada 2.5s.
- Botones primario/secundario con buen espaciado (`gap-6`).
- Sección Skills en grilla, sin viñetas extrañas (`list-none pl-0`).
- Fondo con degradado oscuro y pequeñas animaciones de aparición.

## Requisitos

- Node.js 18+ recomendado
- npm (o pnpm/yarn si prefieres)

## Desarrollo

1) Instalar dependencias: `npm install`
2) Ejecutar entorno de desarrollo: `npm run dev`
3) Abrir la URL que muestra Vite (por defecto `http://localhost:5173`).

## Scripts útiles

- `npm run dev` — servidor de desarrollo con HMR
- `npm run build` — build de producción (salida en `dist/`)
- `npm run preview` — servir el build localmente para probar

## Estructura rápida

- `src/App.tsx` — layout principal y secciones (Navbar/Hero/Skills/Contacto)
- `src/index.css` — estilos base y utilidades Tailwind
- `tailwind.config.js` — configuración de Tailwind
- `vite.config.ts` — configuración de Vite

## Personalización

- Enlaces del header: edita `space-x-[3cm]` en `src/App.tsx` para cambiar la separación.
- Slogans del hero: arregla el arreglo `slogans` en `src/App.tsx`.
- Skills: edita el array en el map dentro de `Section id="skills"`.
- Contacto: actualiza el texto en `Section id="contact"`.

## Despliegue en GitHub Pages (recomendado)

Opción A — GitHub Actions (automático en cada push a `main`)

1) Si el sitio estará en `https://<usuario>.github.io/<repo>/`, añade `base: '/<repo>/'` en `vite.config.ts`.
2) Crea `.github/workflows/deploy.yml` con:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
  workflow_dispatch:
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 18
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

3) En la configuración del repositorio, activa Pages con “Source: GitHub Actions”.

Opción B — Branch `gh-pages` (manual)

1) `npm run build`
2) Publica `dist/` con tu herramienta favorita (por ejemplo `gh-pages`):
   - `npm i -D gh-pages`
   - Añade a `package.json`: `"deploy": "gh-pages -d dist"`
   - Ejecuta: `npm run deploy`

## Licencia

Proyecto personal de portafolio. Usar como referencia o base para tus pruebas/personales.
