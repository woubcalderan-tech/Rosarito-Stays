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
4. Add a `contact` block only for approved public email, telephone, WhatsApp, address, or social URLs. Set `verified: true` on a `client` profile only after verifying the contact channels. Missing fields stay absent. The shared footer uses the configured social URLs.
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

## Residence page

The optional `residence` block supplies `hero`, `architecture`, `experience`, and an ordered `gallery` to `/the-residence`. Configure `heroCopy`, `architectureCopy`, and `experienceCopy` alongside those photos. The story sections can render without photos. Add `experienceCopy.benefits`, page-level `benefits`, and `bookingBanner` when there is content for those sections. The neutral profile can omit `residence` and retain the route's placeholder. Each photo uses the existing `PropertyImage` fields and shared variant catalog.

Gallery records can have several categories. **All** displays the configured order. Five entries use the desktop editorial mosaic in that order. Other counts and filtered sets use a responsive grid. Available categories come from the entries, and the Architecture link appears when both its label and gallery are configured. Set `scope: "private-suite"` and the corresponding `suiteId` to label suite interiors with their configured suite names. Use `scope: "area"` for surrounding-area photography and describe the location in its alt text.

Below 768px the five-photo gallery uses a two-row mosaic. Both layouts use the same record order: firepit, bedroom, coastline, architectural detail, and kitchen in the demo. When replacing those photos, preview both layouts so that important details survive each crop. Tablet widths use an adaptive grid, while widths of 1024px and above use the desktop mosaic.

**Exercise.** Inspect the Oceanview bedroom in the Residence gallery and the suite gallery. Compare its `currentSrc` and `srcset` at two widths to see how the browser selects different variants from the same photo ID.

## Property Details and guest policies

`propertyDetails` holds optional hero copy and image, highlights, grouped amenities, illustrative location content, guest photo with its suite ID, and closing banner copy. Photo references use the shared catalog and responsive resolver. A configured profile enables the Property Details link in shared navigation. The neutral profile keeps the placeholder.

- `scope: "suite"` points at a `suiteAmenityId`. Future rendering should derive eligible suites from their configured `amenities` and `details.extraAmenities`. `scope: "common-area"` requires a separate status for that facility. Private outdoor spaces remain tied to their suites.
- `location` already owns the general city, region, country, and IANA timezone. The page may override the area display label and may list nearby places and optional estimated durations with a transport mode. The demo omits timings. The references differ on destination groupings and travel modes, and a fictional property has no verified departure point.
- Top-level `guestPolicies` holds check-in/out times, parking, smoking, pets, quiet hours, registered guests, parties/events, and additional house rules. Use local `HH:mm` values and the existing `location.timezone`. Quiet hours may cross midnight. Booking still uses separate arrival and departure **date** validation and the same timezone. The proposed property-local clock times have no conflicting existing rule.
- The fictional profile marks its policies as `demo-proposal`. This includes 15:00 check-in, 11:00 checkout, 22:00–08:00 quiet hours, complimentary on-site parking, and the proposed house rules. Omit the mobile mockup's one-space-per-suite claim until reviewed. The desktop exact quiet-hours window supplies more detail than the mobile “after 10 PM” wording. Omit both blocks from the neutral profile.
- The Contact & FAQ page reads check-in, check-out, quiet hours, parking, and pet policies from `guestPolicies`. The time formatter displays the stored local clock values consistently across pages. If the project later loads these records from a database, validate the incoming data against the same contract before passing it to the UI. Keep verified client policies and operational data separate from demo fixtures.

The optional `propertyDetails.mobile` block supplies alternate introduction and location headings and an ordered facilities list. Each facility points to a common-area amenity ID, so a removed or unavailable facility also drops out of the mobile cards. The images reuse the Residence courtyard, shared lounge and courtyard pool catalog entries. The mobile layout reads the same `guestPolicies` as desktop and leaves the desktop-only guest photograph out of the render.

## Explore Rosarito destination guide

The optional `destinationGuide` field holds the introduction, hero and mobile crop position, attraction section copy, ordered attraction records, map settings, photography disclosure, and shared booking banner configuration. Profiles with this field enable the approved responsive guide route and the shared Local Guide menu and footer links. The neutral profile omits the guide and retains the unmatched route behavior. The homepage discovery card keeps its existing behavior. The [photography inventory](PHOTO-REPLACEMENT-INVENTORY.md#e1-explore-rosarito-photography) lists the six local masters and 22 WebPs used in v0.8.0-preview.

Each attraction has a stable ID, category and icon, proposed display copy, highlights, a responsive photo with alt text and depiction status, an order, and a schematic marker. Card and popup presentation should resolve the same record by ID. Optional extended copy, photo attribution, and `verifiedDestination` metadata support a future client. Verify destination facts and visitor information before client reuse. Keep real sources and verification dates with that data.

The property marker is a separate `FictionalPropertyMarker` with `locationStatus: "fictional"`. Its brand-wave style resolves through the established branding. Its preview uses the Residence lounge image and links to the existing Residence route. It has no street address or geographic coordinates and never appears as a sixth attraction card.

`IllustrativeMapPosition` stores normalized x and y values from 0 to 1, with the origin at the upper left. For a `viewBox="0 0 1000 600"`, multiply x by 1000 and y by 600. On a different aspect ratio keep positions and background geometry in the same SVG coordinate space. The approved references guide the visual grouping, while the schematic can use a broad north-to-south coastline arrangement and place the hills inland. Display the configured disclosure exactly and omit any kilometer scale or directions.

### E2 and E3 map design

- Use a self-contained SVG with a Pacific coastline, land, stylized roads and readable labels. Use olive for the fictional property and terracotta for the five attraction markers. Use native button controls for markers and zoom, pan, reset and optional expansion. Keep those controls usable with keyboard, pointer and touch and retain visible focus. Support a keyboard pan equivalent to dragging. Keep scrolling usable on phones and respect reduced motion.
- Hold one selected destination in the page component, either an attraction ID, the fictional property ID, or no selection. A marker opens the appropriate preview. A card action selects and focuses its marker. **View Attraction** brings the card into view and moves focus to its heading. **Explore More** expands configured copy or highlights in place. The fictional property preview links to Residence.
- Keep zoom and pan state separate from destination selection. **Reset** restores the initial camera and the guide's default selection for the current layout. The Rosarito Stays guide starts with Rosarito Beach Pier selected at 48rem and above. Below 48rem, the popup starts closed and opens below the map when a visitor selects a destination. Closing a popup clears selection, returns focus to its trigger where possible, and leaves the camera in place.
- Keep the map renderer behind a component boundary that receives marker records, selection and selection callbacks. A future geographic renderer can use the same stable IDs and callback contract while reading verified latitude and longitude. Keep that provider, its camera logic and configuration separate. It must never interpret normalized positions as geographic coordinates or plot the fictional property on a real map.

E1 has no map renderer, tiles, tracking, geolocation, routing, SDK, or provider keys. Verified destinations must not inherit the illustration's implied access, opening hours, prices, travel times or trail conditions.

### E2 implementation and integration

Run `npm.cmd run dev -- --port 4188` and open `http://127.0.0.1:4188/_review/explore-map`. The route is development-only, has no navigation entry, and is excluded from both build artifacts. `RosaritoBackdrop` draws the schematic paths and labels. `IllustrativeMap` projects marker buttons above the SVG, resolves label collisions, and displays `DestinationPopup` only for the selected record. The harness reuses the existing responsive image resolver and wave. Only the current popup photo can request an image.

The parent owns `selectedId` and receives `onSelectionChange(id)`, where null clears selection. `onViewAttraction(id)` supplies the ID for the future page to scroll to and focus its card. The map handle offers `focusDestination(id)` to set selection, center the camera where bounds allow, and focus the marker or native select. It also offers `reset()`. Pass `defaultSelectedId={null}` to reset without reopening a popup. The harness starts and resets to Pier. Closing the popup preserves the camera and returns focus to the marker or destination selector.

The renderer uses a 1200 × 660 coordinate space. A marker point multiplies normalized x by 1200 and y by 660. `mapFrame` computes one units-per-pixel value from the viewport and divides by zoom, so geometry scales uniformly. Desktop reserves the popup rail when calculating the interactive area. Drag deltas convert from pixels to drawing units, and both camera axes are clamped to the drawable bounds. Zoom steps are 0.25×, from 1× to 2.5×. Zoom-in keeps the selected marker in view when possible. Panning away leaves its selection intact.

Mouse drags use pointer capture and coalesce movement through animation frames. Arrow keys pan when the map surface has focus. Touch defaults to vertical page scrolling; the **Touch dragging** toggle enables single-finger map dragging. There is no wheel interception or animated camera travel. Pins use native buttons with selected state and full accessible names. Dense layouts may shorten or suppress a colliding visual label; the native destination selector always lists all destinations. The expanded view uses a native modal dialog, blocks background interaction, preserves the camera and selection, and restores focus on Escape or close. On narrow screens the panel sits below the map and the controls sit above it.

The guide passes the page's selected destination to this component and wires its callback to the corresponding card. A geographic implementation can supply a different renderer and camera model behind the same selection and card-navigation boundary. Normalized points remain schematic and must not be treated as latitude or longitude.

### E3 Explore Rosarito desktop integration

The page sorts attraction records by `order` and holds the selected destination ID and a separate expanded-card ID. Selecting a marker updates the popup and the card's selected state without scrolling. **View Attraction** uses the ID to find, scroll to, and focus the card heading. **View on Map** scrolls to the map and asks the renderer to focus the selected marker while preserving zoom. Camera state stays in the map. The scroll actions respect reduced motion.

Only one **Explore More** disclosure is open at a time. Each can show a configured `extendedDescription` and has a map action even when extended copy is empty. The disclosure has an explicit expanded state and a stable controlled region. The approved five-card desktop grid spans two columns per card in the first row and three in the second. Other counts and smaller viewports use a responsive grid.

`cardPhotoPosition` changes the card's crop independently of the map popup. Both use the same catalog ID. The guide displays the configured photography and visitor information disclosures, and the schematic retains its separate visible map disclosure. A future real-map provider can reuse the record IDs and focus and selection callbacks with separately verified geographic data.

The review route is `/explore-rosarito/` under the existing Pages base path. A profile without a guide keeps the original route behavior. Below 48rem, the same route shows a photo-first hero using `intro.mobileHeroPosition`, stacked attraction cards, and the shared expandable footer. The shared booking shortcut appears from 384px within the phone layout.

## Dining configuration

The optional `dining` section defines the hero, desktop editorial heading, mobile introduction and icon highlights, featured experience, ordered supporting experiences, private suite dining section, booking banner, and culinary disclosure. The approved desktop and mobile page is included in v0.9.0-preview. The local demo and review builds enable `/dining/` and the shared Local Guide and footer links when the selected profile has this section. The neutral profile keeps Dining marked Coming soon and excludes the page and its fictional assets. The homepage discovery card retains its established presentation.

`featuredExperience` and each entry in `supportingExperiences` use the same `DiningExperience` shape and render through `DiningExperienceCard` in `DiningPage.tsx`. Keep IDs unique and stable. The page preserves the configured array order, resolves each photo through the shared responsive image helper, and maps the four mobile highlight IDs to Lucide's `Fish`, `UtensilsCrossed`, `WavesHorizontal`, and `CookingPot`. `dining.css` controls the desktop grid, mobile rows, and stacked treatment at narrow widths.

The private suite CTA uses the existing Accommodations route. Its copy qualifies kitchens, kitchenettes, and outdoor dining by suite. The closing CTA uses simulated booking. The fictional profile identifies the culinary images as illustrative and its restaurant information as unverified. The [photography inventory](PHOTO-REPLACEMENT-INVENTORY.md#d1-dining-photography) lists the new and reused catalog IDs.

## Contact and FAQ configuration

The optional `contactPage` block supplies the `/contact/` hero, contact information panel, form copy and subject choices, FAQ groups, and booking banner. The responsive page is visually approved and included in v0.10.0-preview. Profiles without it keep the plain Contact route. The fictional profile has the general illustrative location and unavailable contact channels. Email, telephone, and WhatsApp links are generated from verified contact values on a `client` profile.

Keep group and question IDs stable so accordion buttons can identify their panels. Each FAQ answer can supply text or a fact drawn from `guestPolicies` or `suites`, plus an optional internal link. Wi-Fi is derived from each suite's configured amenities. Occupancy uses its configured maximum guest count. The arrival answer links to the full guest policies in Property Details.

`ContactForm` keeps controlled inputs in React state and validates trimmed required values, email format, lengths, and the subject allowlist. A valid simulation clears input and focuses the confirmation. The form has no named browser submission fields, network integration, or persistent storage.

Future delivery for a real client requires an HTTPS server endpoint, server-side validation of the same field and subject rules, abuse controls, and a verified recipient. Keep provider credentials on the server. Define the privacy notice and retention policy before accepting personal information. Show an operational confirmation only when the server has accepted the message for delivery.
