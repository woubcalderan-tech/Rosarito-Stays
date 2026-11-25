# Rosarito Stays

Local React and TypeScript foundation for a vacation rental website in Rosarito, Mexico.

## Getting started

Use Node.js 22.12+ (or 20.19+). This baseline was developed with Node.js 26.13.1 and npm 11.20.0.

```powershell
npm.cmd ci
npm.cmd run dev
```

Open [the local site](http://127.0.0.1:5173). Press Ctrl+C in the terminal running Vite to stop it. On other platforms, use `npm` in place of `npm.cmd`.

| Command                | Purpose                                            |
| ---------------------- | -------------------------------------------------- |
| `npm run typecheck`    | Strict TypeScript check                            |
| `npm run lint`         | ESLint                                             |
| `npm run format`       | Format project sources and docs                    |
| `npm run format:check` | Verify formatting                                  |
| `npm run build`        | Type-check and create production output in `dist/` |
| `npm run preview`      | Serve the production build locally                 |

[Architecture](docs/ARCHITECTURE.md) · [Design system](docs/DESIGN-SYSTEM.md) · [Roadmap](docs/PROJECT-ROADMAP.md)

## Homepage sample photography

See [the photography inventory](docs/SAMPLE-PHOTOGRAPHY.md) for all supplied images, selections, attribution, and replacement instructions. The temporary Las Olas Grand photographs appear in local development only. Standard production builds omit them.

## GitHub Pages design review

Use `npm run build:review` to produce `dist-review/` and `npm run preview:review` to inspect it under `/Rosarito-Stays/`. The review artifact includes the listed sample WebPs, provisional copy, and a notice at the end of each page. It includes static entry points for all known routes and a 404 fallback. It carries noindex and nofollow directives. A GitHub Pages URL should be treated as public.

Run the standard `npm run build` for `dist/`. This build excludes sample property photos and provisional descriptions.

Once the target repository and public use of the selected samples are confirmed, select GitHub Actions under Settings → Pages → Build and deployment → Source. Then run the **Deploy desktop review to GitHub Pages** workflow manually from main.
