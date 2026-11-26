# Architecture

Vite serves a React single-page app. React Router owns the route tree and the shared layout, including scroll restoration. The suite route resolves its slug against the local catalog and gives the resulting record to the shared detail template. Unknown slugs and unmatched URLs render a 404 page.

| Directory                             | Responsibility                                                   |
| ------------------------------------- | ---------------------------------------------------------------- |
| `src/pages`, `src/layout`             | Route-level views and site shell                                 |
| `src/ui`, `src/styles`                | Common components, responsive images, and Tailwind design tokens |
| `src/suites`, `src/booking`           | Suite cards and detail template, booking entry point             |
| `src/config`, `src/data`, `src/types` | Site settings, local catalog, and content contracts              |
| `src/services`, `src/localization`    | Catalog access and initial English labels                        |
| `src/hooks`, `src/utils`              | Route focus and title formatting                                 |
| `src/assets/images`, `public`         | Approved web image destination and static files                  |

The catalog service remains the data boundary for future availability exercises. The fictional demo will use isolated synthetic data and simulated reservations, payments, and confirmations. Any future client project supplies its own verified content, configuration, and services. See the [portfolio and template audit](PORTFOLIO-TEMPLATE-AUDIT.md) for current hardcoded values and migration steps.

The static HTML sets a robots noindex directive, and `robots.txt` disallows crawling. Keep staging private when it is hosted. Future production hosting needs SPA fallback for deep links, an intentional HTTP 404 strategy, and a separate indexing decision.

## Shared navigation and footer

The desktop disclosures, mobile menu, and shared footer use the groups in `src/config/site.ts`. Explore Rosarito, Dining, and Property Details remain labeled Coming soon until their destinations exist. The Residence uses `/the-residence`. The footer's unconfigured Instagram, Facebook, and YouTube SVGs appear in local development and the Pages review and do not link out. The local Simple Icons copies are attributed in `src/assets/brand/social/LICENSE.txt`. The marks belong to their respective owners.

Homepage discovery cards reference the same destination records as shared navigation. Explore Rosarito is planned for `/explore-rosarito`, Property Highlights points to the future `/property-details` page, and Dining is planned for `/dining`. Until those routes exist, all three show Coming soon as non-interactive text. Mockup descriptions are marked provisional in `src/data/home-discovery.ts` and are limited to local development and the Pages review.

## Fictional photography

The homepage image manifest uses the shared variant catalog in `src/assets/images/demo-photo-variants.ts`. The Vite review plugin reads the same list and explicitly emits only those WebPs. Local development reads the same files from source paths. The standard build strips the imagery and provisional text via `__SHOW_PREVIEW_CONTENT__`. The fictional disclosure appears after the footer on demo routes. See the [photography inventory](PHOTO-REPLACEMENT-INVENTORY.md) for source and delivery details.
