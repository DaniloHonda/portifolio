# Portfólio · Danilo Honda

Site pessoal feito com Vue 3, Vite e TresJS (Three.js). A abertura é uma galáxia 3D de partículas.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra http://localhost:5173.

## Build

```bash
npm run build
npm run preview
```

## Deploy

O deploy é automático pelo GitHub Pages: cada push na branch `main` roda
`.github/workflows/deploy.yml`, que compila o projeto e publica a pasta `dist`.

O site fica em https://danilohonda.github.io/portfolio/. O subcaminho `/portfolio/`
está definido em `vite.config.js` (só vale no build). Se o repositório mudar de nome,
ajuste a `base` ali.

Para ativar uma única vez: em **Settings → Pages**, escolha **Source: GitHub Actions**.

## Estrutura

- `src/components/GalaxyScene.vue`: partículas e shader da galáxia
- `src/components/ProjectsSection.vue`: cards de projeto
- `src/data/site.js`: experiência, stack e contatos
