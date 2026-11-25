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
