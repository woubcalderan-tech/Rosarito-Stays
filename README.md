# Rosarito Stays

Rosarito Stays is a **fictional premium vacation-rental demonstration** set in Rosarito, Baja California. It is a web development portfolio showcase, a starting point for reusable hospitality websites, and a practical full-stack learning project. It has no live inventory and does not accept reservations or payments.

The approved desktop and mobile homepage designs are the visual baseline. The site uses React, TypeScript, Vite, and React Router. The booking form validates a date range and passes selections to a demonstration route.

## Getting started

Use Node.js 24 to match the GitHub Actions review workflow.

```powershell
npm.cmd ci
npm.cmd run dev
```

Open [the local site](http://127.0.0.1:5173). Press Ctrl+C in the terminal to stop Vite. On other platforms, use `npm` in place of `npm.cmd`.

| Command                  | Purpose                                                      |
| ------------------------ | ------------------------------------------------------------ |
| `npm run typecheck`      | Strict TypeScript check                                      |
| `npm run lint`           | ESLint                                                       |
| `npm run format:check`   | Prettier verification                                        |
| `npm run format`         | Format project sources and documentation                     |
| `npm run build`          | Standard build in `dist/`, with the neutral template profile |
| `npm run preview`        | Serve the standard build locally                             |
| `npm run build:review`   | Build the GitHub Pages review in `dist-review/`              |
| `npm run preview:review` | Serve the review build locally under `/Rosarito-Stays/`      |

## Public review and client reuse

The [published review](https://woubcalderan-tech.github.io/Rosarito-Stays/) includes the approved desktop and mobile [Explore Rosarito guide](https://woubcalderan-tech.github.io/Rosarito-Stays/explore-rosarito/) in `v0.8.0-preview`. Its interactive SVG map connects five configured attraction cards and a fictional property marker with popups, zoom, panning, reset, and an expanded view. The guide uses AI-generated illustrations. The map positions are schematic and unsuitable for navigation. The [photography inventory](docs/PHOTO-REPLACEMENT-INVENTORY.md#e1-explore-rosarito-photography) records the six guide masters and 22 responsive WebPs.

Local development and the explicit Pages review build show the site-wide disclosure. The standard build selects the neutral profile and excludes fictional content, imagery, and policies. The manual review deployment uses `noindex, nofollow`. Dining is the next frontend milestone. The dedicated Residence gallery remains deferred.

Use a separate project configuration and deployment for each future client. The client supplies verified property content, contact details, and licensed photographs. The portfolio demo, its database, and its booking exercises stay isolated from client data and services.

[Property configuration](docs/PROPERTY-CONFIGURATION.md) · [Architecture](docs/ARCHITECTURE.md) · [Conversion audit](docs/PORTFOLIO-TEMPLATE-AUDIT.md) · [Fictional photography inventory](docs/PHOTO-REPLACEMENT-INVENTORY.md) · [Design system](docs/DESIGN-SYSTEM.md) · [Roadmap](docs/PROJECT-ROADMAP.md)

## Learning notes

Every future development handoff includes a brief **Learning notes** section covering:

- What changed and which programming concepts it uses.
- The relevant files and how the components, data, and services work together.
- One or two topics to study and a small way to verify the behavior locally.
