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
3. Add records to `suites`. Keep each `id` stable and each `slug` unique. The slug determines `/accommodations/:slug`. A suite with a `featured` block joins the carousel in ascending `order`. Use `initialFeaturedSuiteId` to choose the initial slide. The listing uses an optional `summary`, `maximumGuests`, `bedrooms`, and `amenities` with stable icon IDs. Add each approved gallery image once. The first gallery entry is the listing cover. Items may set an optional position such as 50% 54% for the listing crop. Gallery controls appear when there are two or more images. Change gallery order independently from the homepage featured photo. The fictional homepage keeps its approved `featured.description` copy.
4. Add a `contact` block only for approved public email, telephone, address, or social URLs. Missing fields stay absent. The existing Contact route handles the plain contact details and the shared footer uses the configured social URLs.
5. Review `booking.guestCounts`, optional `earliestCheckIn`, latest dates, and `minimumNights`. Dates use YYYY-MM-DD. The checkout minimum advances by calendar days from the chosen check-in. The configured property timezone is available to future availability logic. The current form forwards selections to an internal demonstration route.

Set the optional `accommodations` block for the listing hero, benefits, and booking banner. The capacity benefit substitutes `{guests}` with the largest configured suite capacity. An empty catalog displays an empty state.

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

## Suite Details

The `/accommodations/:slug` route looks up the catalog record and passes it into the shared Suite Details template. A suite change resets the gallery through its stable ID. Card and detail galleries reuse the same ordered entries, while homepage featured images keep their separate configuration.

- `details.bathrooms` and `details.description` are optional. Detail copy can expand on the listing summary without changing it.
- `details.extraAmenities` adds detail-only amenities with shared icon IDs. Keep IDs unique across base and detail amenities.
- `details.nightlyRate` uses a positive `amount` and an ISO currency code. The display uses the property locale. Demo rates are fictional and are separate from booking logic.
- `details.highlights` accepts introductory text, feature strings, and ordered `photoIds`. The template resolves IDs from that suite's existing gallery and skips missing matches. No duplicate image files are needed.
- `suiteDetails.benefits` and `suiteDetails.bookingBanner` hold property-wide copy. The banner substitutes the suite name for `{suite}`.

| Suite     | Fictional starting rate | Fictional bathrooms | Supporting photos                        |
| --------- | ----------------------: | ------------------: | ---------------------------------------- |
| Oceanview |                 199 USD |                   2 | Balcony, kitchen, bathroom               |
| Courtyard |                 149 USD |                   1 | Private courtyard, kitchenette, bathroom |
| Terrace   |                 179 USD |                   1 | Living room, refreshment area, bathroom  |
| Garden    |                 159 USD |                   2 | Outdoor dining, kitchen, bathroom        |

On desktop, Check Availability, View Availability, and Book a Stay open the same demonstration page with a `suite` query parameter. The booking route validates the slug against the catalog and displays the selected suite. A future backend would own availability, date-based pricing, booking validation, reservation state, and payment processing.

**Exercise.** Change one suite's `details.nightlyRate.amount` in the local demo profile. Reload its detail page and a second suite. Only the first displayed rate should change. Restore the original amount after testing.

### Mobile suite booking and galleries

Below 48rem, Suite Details uses the same gallery state for its arrows, pagination, swipe gestures, and thumbnails. The responsive image catalog supplies the thumbnail candidates. Desktop supporting photos and the banner are only rendered where they are used.

The mobile booking panel reuses `BookingSearch` with a suite prop. It requires a valid date pair and a configured guest count within `maximumGuests`. When capacity is omitted, the profile's guest options apply. The earliest check-in is the later of today in the property timezone and the profile's configured minimum date. Checkout follows the configured minimum nights and date limits.

The demonstration route validates `suite`, `checkIn`, `checkOut`, and `guests` before displaying a submitted selection. The URL preserves those values on reload. Desktop booking links can still pass the suite alone. The form makes no availability lookup, reservation, or payment.

**Exercise.** In a local demo profile, temporarily lower one suite's `maximumGuests`. Reload its mobile details page and compare its guest selector with another suite. Restore the approved capacity after testing.
