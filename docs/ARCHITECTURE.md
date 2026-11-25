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

The catalog service is the integration point for future Supabase reads. Add availability, reservation and payment services when those workflows are defined. Use server-side operations for reservation integrity, payment events and confirmation emails. Administration will need an authorized server-side boundary. As Spanish content is approved, expand the locale resources and introduce a language selection and URL strategy.

The static HTML sets a robots noindex directive, and `robots.txt` disallows crawling. Keep staging private when it is hosted. Future production hosting needs SPA fallback for deep links, an intentional HTTP 404 strategy, and a separate indexing decision.

## Shared navigation and footer

The desktop disclosures, mobile menu, and shared footer use the groups in `src/config/site.ts`. Explore Rosarito, Dining, and Property Details remain labeled Coming soon until their destinations exist. The Residence uses `/the-residence`. The footer's unconfigured Instagram, Facebook, and YouTube SVGs appear only in local development and do not link out. The local Simple Icons copies are attributed in `src/assets/brand/social/LICENSE.txt`. The marks belong to their respective owners.

Homepage discovery cards reference the same destination records as shared navigation. Explore Rosarito is planned for `/explore-rosarito`, Property Highlights points to the future `/property-details` page, and Dining is planned for `/dining`. Until those routes exist, all three show Coming soon as non-interactive text. Mockup descriptions are marked provisional in `src/data/home-discovery.ts` and are local-development only.
