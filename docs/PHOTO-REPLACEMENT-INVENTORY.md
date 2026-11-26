# Fictional photography inventory

The ten source PNGs were supplied as approved AI-generated masters for Phase 3. The generation model and prompts were not supplied. The images depict a fictional property and illustrative coastal scenes. The source directory `photo-masters/fictional-demo/` is ignored by Git and excluded from both bundles.

## Masters and placements

| Source PNG                | Placement                       | Dimensions  |   Bytes | SHA-256                                                            | Crop and focal point                                                                                                               |
| ------------------------- | ------------------------------- | ----------- | ------: | ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| `hero-desktop.png`        | Desktop hero                    | 1672 × 941  | 3026973 | `3e7d4114a5630b27495f104196864280815d26c3f5d95198ab4e0c976499da81` | Master framing; centered browser crop with a soft top wash under navigation.                                                       |
| `hero-mobile.png`         | Mobile hero                     | 941 × 1672  | 2807200 | `397904fb6430f0c608e1c0390e1282c101f784c76b9f9b86fbfed8d43ed80ab5` | Native portrait framing; centered on arch and pool.                                                                                |
| `suite-oceanview.png`     | Oceanview Suite                 | 1448 × 1086 | 2629533 | `0c5649a34b2385a47876d1fc6058c6fcce0d21d5ed3ab5eb0ba12faf1c808064` | 8:5 crop biased slightly down; browser crop anchored at 60% x to retain the view.                                                  |
| `suite-courtyard.png`     | Courtyard Suite · initial slide | 1672 × 941  | 3013956 | `2a6e2fb003734d264653a8db90e4f50c6a5293e1d130515429548db27f7eb745` | 8:5 crop near center; 53% x keeps the opening and bed in view.                                                                     |
| `suite-terrace.png`       | Terrace Suite                   | 1672 × 941  | 2714239 | `868c5144119765b03931319b76443ea4752e5553d689d9efad4525352de02868` | 8:5 crop centered; 57% x favors the terrace opening.                                                                               |
| `suite-garden.png`        | Garden Suite                    | 1673 × 940  | 2789632 | `43d1c705a74b20949077b9c5a566f4719222bf63d459ac5285d46b645bd79c2d` | 8:5 crop near center; 52% x keeps the patio and bed in the mobile crop.                                                            |
| `explore-rosarito.png`    | Explore Rosarito                | 1448 × 1086 | 2673488 | `7395cd4ee2b22da50e73c865e034cc349d472d9a1c62f3ba7b7d0bd0cef1dfac` | Landscape and slightly left-biased portrait crops keep the bluff, beach, and surf. Illustrative coastline.                         |
| `property-highlights.png` | Property Highlights             | 1448 × 1086 | 2849636 | `90fe875fe6767444e01afb6d5a5061564b35f19ffe4a2c6c90f2fe05ba478186` | Centered square around the arch and bench. Desktop crops the same asset to a portrait frame.                                       |
| `dining.png`              | Dining                          | 1448 × 1086 | 2641975 | `4ea53c3a6a2461ea5b223aefb98a9691617072e5211e95a8699c041fbc5dc649` | Landscape and slightly right-biased portrait crops retain the table and pendant.                                                   |
| `booking-banner.png`      | Closing booking banner          | 1672 × 941  | 2471902 | `657300f51302a0b9bfdeb96f5cff5a68245f2214ab4a3bb106c3c049c05d7cd5` | Full landscape composition, cropped at 29% y on desktop and 33% y on mobile. Central contrast overlay preserves the outer details. |

## Optimized variants

Paths are relative to `src/assets/images/fictional-demo/`. WebPs use quality 85 for the hero and 82 elsewhere. The exports preserve source proportions within intentional crops and use no upscaling.

| Source stem         | WebP                                           | Dimensions |  Bytes |
| ------------------- | ---------------------------------------------- | ---------- | -----: |
| hero-desktop        | `hero/hero-desktop-640.webp`                   | 640 × 360  |  73256 |
| hero-desktop        | `hero/hero-desktop-1100.webp`                  | 1100 × 619 | 190552 |
| hero-desktop        | `hero/hero-desktop-1672.webp`                  | 1672 × 941 | 377118 |
| hero-mobile         | `hero/hero-mobile-480.webp`                    | 480 × 853  | 112450 |
| hero-mobile         | `hero/hero-mobile-720.webp`                    | 720 × 1279 | 217346 |
| hero-mobile         | `hero/hero-mobile-941.webp`                    | 941 × 1672 | 334070 |
| suite-oceanview     | `suites/suite-oceanview-640.webp`              | 640 × 400  |  40510 |
| suite-oceanview     | `suites/suite-oceanview-1056.webp`             | 1056 × 660 | 103620 |
| suite-oceanview     | `suites/suite-oceanview-1440.webp`             | 1440 × 900 | 172948 |
| suite-courtyard     | `suites/suite-courtyard-640.webp`              | 640 × 400  |  62822 |
| suite-courtyard     | `suites/suite-courtyard-1056.webp`             | 1056 × 660 | 156924 |
| suite-courtyard     | `suites/suite-courtyard-1440.webp`             | 1440 × 900 | 259280 |
| suite-terrace       | `suites/suite-terrace-640.webp`                | 640 × 400  |  56316 |
| suite-terrace       | `suites/suite-terrace-1056.webp`               | 1056 × 660 | 132570 |
| suite-terrace       | `suites/suite-terrace-1440.webp`               | 1440 × 900 | 208026 |
| suite-garden        | `suites/suite-garden-640.webp`                 | 640 × 400  |  59658 |
| suite-garden        | `suites/suite-garden-1056.webp`                | 1056 × 660 | 143354 |
| suite-garden        | `suites/suite-garden-1440.webp`                | 1440 × 900 | 224602 |
| explore-rosarito    | `discovery/explore-rosarito-360.webp`          | 360 × 240  |  19202 |
| explore-rosarito    | `discovery/explore-rosarito-720.webp`          | 720 × 480  |  67160 |
| explore-rosarito    | `discovery/explore-rosarito-portrait-320.webp` | 320 × 400  |  26226 |
| explore-rosarito    | `discovery/explore-rosarito-portrait-640.webp` | 640 × 800  |  90364 |
| property-highlights | `discovery/property-highlights-360.webp`       | 360 × 360  |  21614 |
| property-highlights | `discovery/property-highlights-720.webp`       | 720 × 720  |  67232 |
| dining              | `discovery/dining-360.webp`                    | 360 × 240  |  24434 |
| dining              | `discovery/dining-720.webp`                    | 720 × 480  |  84482 |
| dining              | `discovery/dining-portrait-320.webp`           | 320 × 400  |  32872 |
| dining              | `discovery/dining-portrait-640.webp`           | 640 × 800  | 106204 |
| booking-banner      | `banners/booking-banner-480.webp`              | 480 × 270  |  15410 |
| booking-banner      | `banners/booking-banner-960.webp`              | 960 × 540  |  46398 |
| booking-banner      | `banners/booking-banner-1672.webp`             | 1672 × 941 | 122766 |

The ten masters total **27,618,534 bytes**. The 31 review variants total **3,649,786 bytes**, versus **1,809,320 bytes** for the 26 legacy review variants and **2,019,804 bytes** for all 30 legacy derivatives on disk. These totals cover all candidates. The browser chooses one per rendered picture and defers offscreen imagery.

## Replacing the photography for a future client

1. Keep verified, licensed source masters outside `public/`. Record provenance and crop requirements for each placement.
2. Export appropriately sized derivatives and update image paths and dimensions together in the variant catalog. Set descriptive alt text, image IDs, and suite crop positions in the relevant [property profile](PROPERTY-CONFIGURATION.md). Add a separate verified client profile with its own approved assets and copy before enabling imagery in that profile.
3. Compare desktop and mobile crops at the real breakpoints, including hero contrast, the suite carousel and the banner. Verify image requests, then inspect both output directories. The demo catalog is available in local development and the review build only.
4. On a later authorized release, verify the updated Pages artifact and check old public paths. Previous Git commits, release tags, and archived deployments can retain earlier photographs.

## Historical v0.2.0-preview reference

The following notes record the pre-conversion delivery specification and generation brief.

### Legacy usage

The homepage manifest in `src/assets/images/homepage.ts` and review allowlist in `build/github-review.ts` reference **8 Las Olas Grand originals through 26 optimized WebPs**. The labeled samples render in local development and the GitHub Pages review. The standard build excludes them. No other page or banner currently uses a Las Olas Grand photo.

All filenames below are relative to `src/assets/images/placeholders/`. Resolutions are width × height in pixels. Generate each of the eight subjects once as a consistent fictional property set. Use alternate framing from the same concept for the desktop and mobile hero if one master cannot accommodate both crops.

| Replacement placement       | Current original                 | Exact WebPs to replace                                                                        | Current delivery specification          |
| --------------------------- | -------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------- |
| Hero, desktop               | `airbnb-pool-deck.jpg`           | `hero-pool-640.webp`, `hero-pool-1100.webp`                                                   | 640 × 480, 1100 × 825 · 4:3             |
| Hero, mobile                | Same pool-deck original          | `hero-pool-mobile-480.webp`, `hero-pool-mobile-720.webp`                                      | 480 × 520, 720 × 780 · 12:13            |
| Featured Courtyard          | `img_4809.jpg`                   | `featured-bedroom-640.webp`, `featured-bedroom-1056.webp`, `featured-bedroom-1440.webp`       | 640 × 400, 1056 × 660, 1440 × 900 · 8:5 |
| Featured Oceanview          | `img_4825.jpg`                   | `featured-oceanview-640.webp`, `featured-oceanview-1056.webp`, `featured-oceanview-1440.webp` | 640 × 400, 1056 × 660, 1440 × 900 · 8:5 |
| Featured Terrace            | `img_4813.jpg`                   | `featured-terrace-640.webp`, `featured-terrace-1056.webp`, `featured-terrace-1440.webp`       | 640 × 400, 1056 × 660, 1440 × 900 · 8:5 |
| Featured Garden             | `img_4826.jpg`                   | `featured-garden-640.webp`, `featured-garden-1056.webp`, `featured-garden-1440.webp`          | 640 × 400, 1056 × 660, 1440 × 900 · 8:5 |
| Explore Rosarito, landscape | `airbnb-coastline-view.jpg`      | `coastline-360.webp`, `coastline-720.webp`                                                    | 360 × 240, 720 × 480 · 3:2              |
| Explore Rosarito, portrait  | Same coastline original          | `coastline-portrait-320.webp`, `coastline-portrait-640.webp`                                  | 320 × 400, 640 × 800 · 4:5              |
| Property Highlights, mobile | `airbnb-garden-jacuzzi.jpg`      | `discovery-garden-360.webp`, `discovery-garden-720.webp`                                      | 360 × 360, 720 × 720 · 1:1              |
| Dining, landscape           | `img_4736.jpg`                   | `dining-area-360.webp`, `dining-area-720.webp`                                                | 360 × 240, 720 × 480 · 3:2              |
| Dining, portrait            | Same condominium dining original | `dining-portrait-320.webp`, `dining-portrait-640.webp`                                        | 320 × 400, 640 × 800 · 4:5              |

The logo, decorative palm, social icons, and terracotta banner texture are separate assets. Property Highlights keeps its decorative palm on desktop. The transparent fallback GIF in that card is a rendering aid, not a photo.

### Original generation brief

Use a consistent fictional Baja coastal residence with cream plaster, locally plausible plants, warm wood, and natural daylight. Avoid recognizable real properties, people, logos, watermarks, and embedded text. Record generation provenance and review the images at the actual viewport crops before exporting.

| Scene                   | Composition                                                                                                                                                                                                                                                                                                                                                                        | Recommended master                                                    |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| Hero courtyard and pool | Warm stucco courtyard, an arch and seating to the right, green plantings and a sunlit pool extending toward the lower edge. Leave the upper left quiet for the logo and headline. Keep the upper-right navigation area low contrast and free of beams or prominent edges. For the mobile framing, keep the pool and arch near the central vertical crop and the header area quiet. | Desktop 2400 × 1800 · 4:3 and mobile art-directed 1440 × 1560 · 12:13 |
| Courtyard Suite         | Bed in the left foreground, warm linen, and an open glazed doorway to a planted terrace on the right. Keep bed and doorway readable in the center mobile crop, with moderate tonal contrast behind the white carousel controls.                                                                                                                                                    | 2400 × 1500 · 8:5                                                     |
| Oceanview Suite         | Bright bedroom with ocean horizon through a broad balcony opening. Frame the bed and horizon near the middle so both survive the wide desktop and tighter mobile crops.                                                                                                                                                                                                            | 2400 × 1500 · 8:5                                                     |
| Terrace Suite           | Covered terrace, inviting seating, glass balustrade, and a glimpse into the adjacent suite. Place the seating group and strongest architectural cue near the middle.                                                                                                                                                                                                               | 2400 × 1500 · 8:5                                                     |
| Garden Suite            | Calm bedroom with a curved plaster detail, textured textiles, and a view toward a planted patio. Anchor the frame around the bed and keep obvious garden cues in the central crop.                                                                                                                                                                                                 | 2400 × 1500 · 8:5                                                     |
| Explore Rosarito        | Rosarito-inspired coastline with a rocky headland, surf, and understated coastal vegetation. Center the shoreline so landscape and portrait cuts read clearly. Keep the scene illustrative without identifying a specific access point.                                                                                                                                            | 2160 × 1440 · 3:2 with a 4:5 crop kept inside safe framing            |
| Property Highlights     | Sunlit architectural garden vignette with an arch or stone path, textured plaster, and planting. Compose a clear silhouette for a small square mobile card. Avoid adding amenities outside the fictional concept.                                                                                                                                                                  | 1440 × 1440 · 1:1                                                     |
| Dining                  | Inviting coastal dining setting with a warm pendant, set table, natural wood, and a glimpse of sky or sea. Keep the table and pendant within the portrait-safe region. Present it as an illustrative scene.                                                                                                                                                                        | 2160 × 1440 · 3:2 with a 4:5 crop kept inside safe framing            |

## Learning notes

- **Vite asset delivery.** A static import normally adds a file to Vite’s asset graph, where Vite can emit a hashed URL. In this project, `src/assets/images/homepage.ts` constructs explicit base-aware URLs. The development server serves those paths and `build/github-review.ts` emits the catalogued files through Vite’s review plugin. Start with those files and `vite.config.ts` to follow an image from disk to browser.
- **PNG and WebP.** PNG stores the masters losslessly. The WebP copies use lossy compression and smaller dimensions for delivery. See the source and output tables above. The smaller downloads reduce the bytes transferred before an image can render.
- **Responsive candidates.** `src/assets/images/demo-photo-variants.ts` records true widths. `homepage.ts` puts those widths in `srcSet` and describes the rendered slot with `sizes`. The browser combines the slot size and pixel density to pick a candidate. `src/ui/ResponsiveImage.tsx` passes both attributes to the browser and marks offscreen images lazy. The hero uses eager loading and high fetch priority.
- **Fit and position.** `object-fit: cover` preserves proportions while filling the box. `object-position` decides which part of an oversized image stays visible. Compare the hero rules in `src/styles/home-desktop.css` and `src/styles/home-mobile.css`, the suite positions in the image manifest, and the banner rules in `src/styles/home-booking-banner.css`.
- **Art direction.** The `<picture>` in `ResponsiveImage.tsx` switches to a portrait composition below 48rem. Each composition still has multiple resolution candidates. The dedicated mobile hero master keeps more of the courtyard arch and pool visible.

**Exercise.** Open the local review with DevTools, disable the cache, and reload at 390px and 1440px widths. Run `document.querySelector(".home-hero-photo img").currentSrc` in the console and compare the filenames. At 390px, change the emulated device pixel ratio and reload. Compare the selected pixel width and Network transfer size while the page layout stays fixed.
