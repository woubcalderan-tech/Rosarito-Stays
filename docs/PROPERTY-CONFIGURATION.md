# Configure a property

Each build selects one property profile. The profile holds display content and public asset references. It runs in the browser, so keep passwords, API keys, private contact details, and client records out of it.

| File                              | Role                                                                                             |
| --------------------------------- | ------------------------------------------------------------------------------------------------ |
| `src/config/property.ts`          | The shared TypeScript contract and the narrower `ClientPropertyConfig` type                      |
| `src/config/rosarito-demo.ts`     | Approved fictional identity, photography references, and suite records                           |
| `src/config/standard-property.ts` | Neutral template used by the standard build and the starting point for a separate client project |
| `src/config/site.ts`              | Selected property data and shared navigation                                                     |
| `src/config/routes.ts`            | Shared route paths and suite URL construction                                                    |
| `src/config/demo-booking.ts`      | Defaults for the existing booking demonstration                                                  |
| `vite.config.ts`                  | Selects the profile and supplies the HTML title, language, and favicon                           |

Development and the Pages review use Rosarito Stays. The standard build uses the neutral template and omits the fictional brand, photo bundle, and suite catalog. Make a separate project for a real client and give its standard profile the `ClientPropertyConfig` type and `kind: "client"`. The Pages review command remains dedicated to the portfolio demo. Validate client changes with a local preview of the standard build.

## Set up a client project

1. Fill in `brand`, `locale`, and `location` using approved public information. Use a BCP 47 locale such as `en-US` and an IANA timezone such as `America/Los_Angeles`. Place verified brand assets in `public/` and use a path such as `/client-logo.svg` or `/client-icon.png`. Put the homepage metadata description in `brand.description`.
2. Set `home.headline` as two lines. Set the body copy, banner, and discovery fields. When a location is configured, the homepage appends the city, region, and country to `home.description`. The optional `mobileDescription` supplies the alternate short mobile line.
3. Add records to `suites`. Keep each `id` stable and each `slug` unique. The slug determines `/accommodations/:slug`. A suite with a `featured` block joins the carousel in ascending `order`. Use `initialFeaturedSuiteId` to choose the initial slide. An optional `summary` appears on the detail and listing. `featured.description` provides carousel-specific copy when the summary is absent.
4. Add a `contact` block only for approved public email, telephone, address, or social URLs. Missing fields stay absent. The existing Contact route handles the plain contact details and the shared footer uses the configured social URLs.
5. Review `booking.guestCounts`, optional `earliestCheckIn`, latest dates, and `minimumNights`. Dates use YYYY-MM-DD. The checkout minimum advances by calendar days from the chosen check-in. The configured property timezone is available to future availability logic. The current form forwards selections to an internal demonstration route.

## Replace photographs

1. Keep licensed originals outside `public/`. Export responsive WebPs and add each variant under a client-only directory such as `public/property-photos/`.
2. Set `photos.directory: "property-photos"` and define an ascending width list for each ID in `photos.variants`. For an ID of `"hero-desktop"` and variant `[1100, 619]`, the corresponding file is `public/property-photos/hero-desktop-1100.webp`. Include at least one variant per referenced ID.
3. Reference the ID and descriptive alt text from a placement. A `mobileId` selects a different composition at the existing picture breakpoint. Suite galleries are optional and featured photos can set their own focal position. Keep the original demo catalog and Pages packaging separate. [Fictional photography inventory](PHOTO-REPLACEMENT-INVENTORY.md)
4. Build and preview locally. Check the favicon, both hero compositions, each carousel slide, direct suite URLs, and the public build contents. Keep the client profile and review profile separate as you make hosting decisions.

## Learning notes

An **interface** describes the shape TypeScript checks. For example, `PropertyImage` requires an `id` and `alt`, with an optional `mobileId`. A **configuration object** provides the actual values. The demo sets `initialFeaturedSuiteId: "courtyard"`, and the carousel finds that ID in the featured list.

React reads those values to render components. `Brand.tsx` reads `property.brand`, and `HomePage.tsx` reads `property.home`. Centralizing the values means the header and footer share a single brand record. Separating property data from concerns like routing, image size selection, and booking form interaction makes each part easier to change and test. The suite service adapts the single catalog for listing, slug lookup, and featured ordering.

**Exercise.** Change `brand.subtitle` in `src/config/rosarito-demo.ts`, run the local dev server, and check both the header and footer. Restore the original value afterward. Try changing `initialFeaturedSuiteId` to `"garden"` and check that the carousel starts there while the detail URLs stay the same.

## Local reusability check

A temporary Cedar Cove Guesthouse profile was built as a client-profile fixture. It changed the name, subtitle, logo, favicon, language, location, headline, banner, discovery labels, suite names and ordering, guest counts, and minimum nights. Browser checks confirmed the changes at their existing entry points, including the suite title and summary on a direct route. The optional Contact fields and a single footer social link rendered with reserved example values. The temporary profile and logo were removed from the workspace after the build, and the standard template was restored.
