# Portfolio

![CI](https://github.com/virajbahulkar/portfolio/actions/workflows/ci.yml/badge.svg)
![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)

This repository showcases my web development skills and my blogs. 💻✨

### Quick Start
```bash
# Dev (live reload, mounted deps)
docker compose up astro

# Open in Dev Container (recommended for IntelliSense)
# VS Code Command Palette: Dev Containers: Reopen in Container

# Production optimized container
docker compose up --build prod
```
Dev: http://localhost:3000  |  Prod: http://localhost:8080


### 🛠️ Technologies used

- 🔥 Astro with React
- 🎨 Tailwind CSS with aspect ratio and typography plugin
- 🎉 TypeScript
- 🎨 daisyUI

### Performance

<img width="459" height="132" alt="Screenshot 2025-09-06 at 10 26 54 AM" src="https://github.com/user-attachments/assets/43be2549-64b7-4587-8af9-dfc0e54c4321" />


## 📬 Contact Me

If you have any questions, collaboration opportunities, or just want to say hello, feel free to reach out to me at:

<p align="center">
  <a href="https://virajbahulkar.me" target="blank">My website</a>
</p>

<p align="center">
  <a href="https://linkedin.com/in/virajbahulkar" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg" alt="virajbahulkar" height="30" width="30" /></a>
  <a href="https://fb.com/virajbahulkar" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/facebook.svg" alt="virajbahulkar" height="30" width="30" /></a>
  <a href="https://instagram.com/virajbahulkar" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/instagram.svg" alt="virajbahulkar" height="30" width="30" /></a>
  <a href="https://x.com/virajbahulkar" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/twitter.svg" alt="virajbahulkar" height="30" width="30" /></a>
</p>

## 🧪 Development Workflow

This project is developed inside a Docker + Dev Container environment to ensure reproducible installs and a clean host machine.

Key points:

- `node_modules` lives in a named Docker volume (`node_modules_cache`) managed by `docker-compose.yml`; the host does not install dependencies directly.
- `docker-entrypoint.sh` bootstraps dependencies (runs `npm ci` if missing) and performs drift checks (e.g. confirming `jspdf`).
- The Dev Container (`.devcontainer/devcontainer.json`) attaches to the existing `astro` compose service and forwards port `4321` (Astro dev server inside container). Host port `3000` maps to it via compose.
- TypeScript IntelliSense works because VS Code runs its language servers inside the container with direct access to dependencies.

### Start (Dev Container Recommended)
1. Open the folder in VS Code.
2. Run: Command Palette → "Dev Containers: Reopen in Container".
3. First launch runs `npm ci` (only if `node_modules` absent) then `npm run dev` via compose.
4. App available at http://localhost:3000 (mapped) or http://localhost:4321 directly inside container network.

### Start (Plain Docker Compose)
```
docker compose up --build
```
Starts the `astro` dev service. Visit http://localhost:3000.

### Type Checking
```
npm run build-types
```

### Add a Dependency
```
npm install <pkg>
```
Commit both `package.json` and `package-lock.json`.

If volume drift / corruption occurs:
```
docker compose down
docker volume rm portfolio_node_modules_cache
docker compose run --rm astro sh -c 'npm ci'
docker compose up -d
```

### PDF Generation
Client-side via `src/utils/generateCvPdf.ts` with dynamic `jsPDF` import inside the click handler (`PdfDownloader` component) to avoid SSR resolution issues.

### Production Build (Local Only)
```
npm run build
```
Outputs static site to `dist/` (same files the production container serves).

### Production Container (Multi-Stage Image)
Multi-stage Dockerfile (deps → build → runtime) is implemented. To build & run the optimized static image:
```
# Run production container via compose
docker compose up --build prod

# Or build & run manually
docker build -t portfolio-prod .
docker run --rm -p 8080:80 portfolio-prod
```
Site available at http://localhost:8080.

If you only changed content / source files, re-run:
```
docker compose build prod && docker compose up -d prod
```

### Dev vs Prod Summary
| Mode | Command | Port | Live Reload | node_modules Mounted | Use Case |
|------|---------|------|-------------|-----------------------|----------|
| Dev (astro) | `docker compose up astro` | 3000 (→ 4321) | Yes | Yes (volume) | Iteration & TS IntelliSense |
| Prod (static) | `docker compose up prod` | 8080 | No | No (baked) | Final artifact validation |

In the Dev Container, VS Code language servers run inside the `astro` service ensuring correct types. Host-only editing without the container will show missing type definition errors by design because dependencies live only in the Docker volume.

### Troubleshooting
- Missing editor types: ensure you are attached to the Dev Container (green corner indicator). Host-only session cannot see in-volume deps.
- Package added but not visible: rerun `npm ci` inside container or recreate volume (see drift steps).
- PDF layout issues: adjust layout logic in `generateCvPdf.ts` (column widths / font scaling) and retest.


## License

This project is licensed under the [MIT License](LICENSE). Feel free to use the code for personal or commercial purposes.
