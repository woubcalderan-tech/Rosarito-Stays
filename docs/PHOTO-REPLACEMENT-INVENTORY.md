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

## A2 suite gallery expansion

The 16 additional AI-generated masters are PNGs, each 1672 × 941 pixels. The source paths below are relative to `image-masters/suites/`. That directory stays local. SHA-256 comparison found no byte duplicates. A 256-bit luminance difference-hash comparison against the new set and the ten earlier masters found a closest distance of 90 bits. Visual inspection confirmed distinct scenes and the enclosed Courtyard versus oceanfront Terrace distinction.

| Master PNG                                  | Catalog ID                        | Source bytes | SHA-256                                                            |
| ------------------------------------------- | --------------------------------- | -----------: | ------------------------------------------------------------------ |
| `oceanview/oceanview-balcony.png`           | `suites/oceanview-balcony`        |    2,577,620 | `6bc29cf59feb187ab7ca5f4fda8308fb3fe1e82cacaa3541e16177d0b6adcaf3` |
| `oceanview/oceanview-bathroom.png`          | `suites/oceanview-bathroom`       |    2,448,419 | `eac1be52f502cde15b3b0199c55814bb2421c53605ad206130cdfad2418a3883` |
| `oceanview/oceanview-living.png`            | `suites/oceanview-living`         |    2,735,531 | `2eb58bf609c1298741d52e203a2ba74980aa2ffb691f51b8d9162f00fe12a50e` |
| `oceanview/oceanview-kitchen.png`           | `suites/oceanview-kitchen`        |    2,484,794 | `590e7517374aeb887a7d6b3f115151c942696bd12e6a3d3e9047c4383efa0851` |
| `courtyard/courtyard-suite-courtyard.png`   | `suites/courtyard-patio`          |    3,149,311 | `8bf954f60a99a62a94082aae2e23d24ace3f3559dd15ba04157c57d57510c72e` |
| `courtyard/courtyard-suite-bathroom.png`    | `suites/courtyard-bathroom`       |    2,843,779 | `0627a6857f8618e16d914fb4646061775e783f29d7fba0bc25f63e86559298af` |
| `courtyard/courtyard-suite-kitchenette.png` | `suites/courtyard-kitchenette`    |    2,589,345 | `9a46a46c6209ace45a1669eb21cdc68563d94b99af00d5f3b0448aec852710fb` |
| `courtyard/courtyard-suite-living.png`      | `suites/courtyard-living`         |    2,882,915 | `c3e8b6aa6ce61205ad3d0c39a2f3c6b2b269df63e960c8c449b2410d751602d7` |
| `terrace/terrace-outdoor.png`               | `suites/terrace-outdoor`          |    2,852,485 | `37e38579cc8f7c39b47895a150164443129ae551c9fb048ecbdc6109b6b659c2` |
| `terrace/terrace-bathroom.png`              | `suites/terrace-bathroom`         |    2,544,622 | `a56ad47aa3827ac6f50e59d42f15a290ba86f53d72753b9b8cfa52c05539f9e2` |
| `terrace/terrace-refreshment-area.png`      | `suites/terrace-refreshment-area` |    2,521,353 | `e4a7b21d497d13cf04ed760e8ab64f311ae416d08187d15ca777dbabbfaed6c6` |
| `terrace/terrace-living.png`                | `suites/terrace-living`           |    2,743,542 | `c5e292d0fee00157dce6922b2db6f365961cb7966aa5b83ee01951ba2f3e9b50` |
| `garden/garden-outdoor-dining.png`          | `suites/garden-outdoor-dining`    |    3,409,923 | `a4819030c8909fa33402efd062c969081a6d6ca5a055962d3b86eccf7eee824c` |
| `garden/garden-bathroom.png`                | `suites/garden-bathroom`          |    2,454,974 | `318f86571b69270e5af4c82fdef8b7a8b04932baa345e65b9004136fc6ef6fa5` |
| `garden/garden-kitchen.png`                 | `suites/garden-kitchen`           |    2,732,459 | `820f6091cd188d5c94de5ee2ba673562b8c0c05fea5ca2b18297369439d28eef` |
| `garden/garden-living.png`                  | `suites/garden-living`            |    2,806,680 | `b5332a5f7f84b167cdb93c70a46330d0c6f984d433c6deda932dc96569f86b1a` |

All variants preserve the source composition and use WebP quality 82. The four widths are 480 × 270, 768 × 432, 1200 × 675, and 1672 × 941. The table lists exact bytes in ascending width order. Filenames use `<catalog-id>-<width>.webp` under the fictional-demo directory.

| Catalog ID                        | 480 px |  768 px | 1200 px | 1672 px |
| --------------------------------- | -----: | ------: | ------: | ------: |
| `suites/oceanview-balcony`        | 30,934 |  68,672 | 142,242 | 228,860 |
| `suites/oceanview-bathroom`       | 21,490 |  46,524 |  97,432 | 160,338 |
| `suites/oceanview-living`         | 28,804 |  65,502 | 145,766 | 243,036 |
| `suites/oceanview-kitchen`        | 25,336 |  54,728 | 118,580 | 199,012 |
| `suites/courtyard-patio`          | 45,540 | 102,998 | 217,242 | 359,760 |
| `suites/courtyard-bathroom`       | 32,866 |  73,448 | 156,320 | 252,774 |
| `suites/courtyard-kitchenette`    | 31,640 |  66,544 | 136,900 | 219,154 |
| `suites/courtyard-living`         | 36,294 |  82,962 | 177,212 | 286,870 |
| `suites/terrace-outdoor`          | 36,316 |  81,096 | 170,480 | 280,290 |
| `suites/terrace-bathroom`         | 23,660 |  52,042 | 106,962 | 173,146 |
| `suites/terrace-refreshment-area` | 31,212 |  68,822 | 139,994 | 230,706 |
| `suites/terrace-living`           | 31,272 |  70,108 | 152,366 | 252,684 |
| `suites/garden-outdoor-dining`    | 50,670 | 118,362 | 248,536 | 408,946 |
| `suites/garden-bathroom`          | 25,536 |  54,214 | 108,170 | 171,054 |
| `suites/garden-kitchen`           | 31,348 |  69,450 | 148,174 | 238,800 |
| `suites/garden-living`            | 34,816 |  77,840 | 165,466 | 269,466 |

New masters total **43,777,752 bytes**. The 64 derivatives total **8,077,784 bytes**. The existing 31 optimized variants are preserved, for 95 WebPs in the review build.

| Suite     | Accommodations gallery in display order                                      |
| --------- | ---------------------------------------------------------------------------- |
| Oceanview | **Existing bedroom**, living, kitchen, bathroom, balcony                     |
| Courtyard | **Living room**, existing bedroom, patio, kitchenette, bathroom              |
| Terrace   | **Oceanfront pergola**, existing bedroom, living, refreshment area, bathroom |
| Garden    | **Existing bedroom**, living, kitchen, bathroom, outdoor dining              |

The first entry is the listing cover. The homepage uses its existing featured bedroom records independently. In listing frames, per-photo focal positions retain the courtyard opening, ocean horizon, or garden seating. Alt text and focal positions live in the demo suite catalog.

### Local browser image transfer

Measured in Edge at device scale factor 1, with a fresh context at each viewport. Initial bytes include the Oceanview hero, four listing covers, and the booking banner. The hero and Oceanview cover reuse the same variant, so there are five requests. Inactive slides wait until selected. Interaction bytes cover visiting the remaining four slides of every suite. Counts and bytes are from Resource Timing and include response overhead.

| Viewport    | Initial requests | Initial bytes | Additional requests | Additional bytes |
| ----------- | ---------------: | ------------: | ------------------: | ---------------: |
| 1366 × 768  |                5 |       451,602 |                  16 |        1,113,192 |
| 1440 × 900  |                5 |       535,298 |                  16 |        1,283,548 |
| 1920 × 1080 |                5 |       604,626 |                  16 |        1,283,548 |
| 360 × 800   |                5 |       189,688 |                  16 |          569,062 |
| 390 × 844   |                5 |       189,688 |                  16 |          569,062 |
| 430 × 932   |                5 |       189,688 |                  16 |          569,062 |

### Future Residence and suite use

Reuse the Oceanview balcony and living room, Courtyard patio and living room, Terrace outdoor pergola, and Garden outdoor dining and living room by their existing IDs. These scenes depict **private suite spaces**. Identify the relevant suite when presenting them. The Terrace refreshment area is distinct from a full kitchen. Oceanview and Garden each have two configured bedrooms, with one bedroom photo in each current gallery. Second-bedroom photography is optional future work.

## R1 Residence photography

The six approved AI-generated PNG masters are under ignored `image-masters/residence/`. The compositions were compared with both Residence references. The fountain courtyard and fire-pit courtyard are distinct scenes. SHA-256 comparison against all 32 local masters found no duplicate for the six new inputs. The closest perceptual pair was the fountain and fire-pit images at 72 bits apart on a 256-bit luminance dHash.

| PNG master                           | Catalog ID                       | Placement                                           | Original dimensions |     Bytes | SHA-256                                                            |
| ------------------------------------ | -------------------------------- | --------------------------------------------------- | ------------------- | --------: | ------------------------------------------------------------------ |
| `residence-hero.png`                 | `residence/hero`                 | Hero, wide sunset terrace                           | 1825 × 862          | 2,726,371 | `b1d07fc5467d6c871056527b70ea0074e530b24a6a8e1fae545679953fdb427e` |
| `residence-architecture.png`         | `residence/architecture`         | Architecture section, fountain courtyard            | 1672 × 941          | 3,194,848 | `b26c0c8ebaa0f47998831772427e5cf8a5ef4483736567e42a8308d05cc7b1cc` |
| `residence-coastal-lounge.png`       | `residence/coastal-lounge`       | The Experience section, communal pergola and lounge | 1672 × 941          | 3,303,723 | `987876a20eb3391b8c49d7ffca215c267acfd5c5174cdc84c2058baae9970474` |
| `residence-firepit.png`              | `residence/firepit`              | Gallery, evening fire-pit courtyard                 | 1672 × 941          | 3,096,241 | `f127fd34826ebc3682c94f54cf4795e234afffb39d2372ae0afcfc9384e84ea4` |
| `residence-coastline-sunset.png`     | `residence/coastline-sunset`     | Gallery, illustrative Baja coastline at sunset      | 1672 × 941          | 2,570,447 | `ed3be843f4da46fec77256d9f25f08542a1a499bc76b78bec952ab890b4e8dc1` |
| `residence-architectural-detail.png` | `residence/architectural-detail` | Gallery, portrait architectural detail              | 1122 × 1402         | 2,830,508 | `85c25666eced9bdf5cb4e2718c2dcd2a5c20e97d88d09a0633626d46c17ec8ff` |

All WebPs retain the source framing. Hero quality is 85 and all other variants use quality 82. The 1825 px hero serves wide displays at the native width. The portrait tile tops out at 768 px for its compact role in the reference. Each filename uses `<catalog-id>-<width>.webp` under the fictional-demo directory.

| Catalog ID                       | Optimized dimensions and bytes                                                             |
| -------------------------------- | ------------------------------------------------------------------------------------------ |
| `residence/hero`                 | 480 × 227 (30,150 B), 768 × 363 (68,692 B), 1200 × 567 (153,906 B), 1825 × 862 (295,418 B) |
| `residence/architecture`         | 480 × 270 (43,604 B), 768 × 432 (99,996 B), 1200 × 675 (218,264 B)                         |
| `residence/coastal-lounge`       | 480 × 270 (45,812 B), 768 × 432 (106,562 B), 1200 × 675 (230,492 B)                        |
| `residence/firepit`              | 480 × 270 (40,020 B), 768 × 432 (92,604 B), 1200 × 675 (206,144 B)                         |
| `residence/coastline-sunset`     | 480 × 270 (28,858 B), 768 × 432 (65,448 B), 1200 × 675 (139,530 B)                         |
| `residence/architectural-detail` | 480 × 600 (82,290 B), 768 × 960 (168,760 B)                                                |

The masters total **17,722,138 bytes**. The 18 derivatives total **2,116,550 bytes**. The review artifact includes 113 WebPs, including the 95 previously approved variants. The neutral build excludes these demo images and their configuration.

### Proposed embedded gallery

The desktop and mobile references both show the fire pit, bedroom, coastline, architectural detail and kitchen. **All** is the unfiltered view. The hero, Architecture and Experience photographs have separate section assignments.

| Order | Photo ID                         | Categories                   | Caption context                      |
| ----: | -------------------------------- | ---------------------------- | ------------------------------------ |
|     1 | `residence/firepit`              | Architecture, Outdoor Spaces | Fictional Residence courtyard        |
|     2 | `suites/suite-oceanview`         | Interiors, Ocean Views       | Private Oceanview Suite bedroom      |
|     3 | `residence/coastline-sunset`     | Ocean Views                  | Illustrative Baja coastline          |
|     4 | `residence/architectural-detail` | Architecture                 | Residence arch, lantern and planting |
|     5 | `suites/oceanview-kitchen`       | Interiors, Ocean Views       | Private Oceanview Suite kitchen      |

The two interior tiles use the same catalog IDs, alt text and files as the suite gallery. Keep their private-suite labels in the future layout.

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

## P1 Property Details photography

The approved fictional masters are in the ignored `image-masters/property-details/` directory. The WebPs retain the full original composition and natural colors. The hero leaves cream stucco and palm shadows on the left for desktop text. The coastline is illustrative and does not locate the property.

| Master PNG                       | Size       |     Bytes | SHA-256                                                            |
| -------------------------------- | ---------- | --------: | ------------------------------------------------------------------ |
| `property-details-hero.png`      | 2172 × 724 | 2,754,505 | `e68c0ea858e61931d2db6dd7edbd769e37570da7b5c9a5f26d4be9f79f1ea4cf` |
| `property-details-coastline.png` | 1983 × 793 | 2,976,787 | `e50132975ed375949de0ed25c75fbd163e79ecf071677d10e9d4b56e547e0684` |

| Catalog ID                   | WebP dimensions and encoded sizes                                                                                  |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `property-details/hero`      | 480 × 160 (21,144 B), 768 × 256 (47,516 B), 1200 × 400 (102,836 B), 1672 × 557 (179,880 B), 2172 × 724 (268,558 B) |
| `property-details/coastline` | 480 × 192 (24,742 B), 768 × 307 (60,356 B), 1200 × 480 (132,782 B)                                                 |

The eight new variants total **837,814 bytes**. The hero uses quality 85, with 1672px for common desktop widths and the native 2172px width for wide full-bleed placements. The coastline uses quality 82 and tops out at 1200px for its inset placement. The current review package includes 121 WebPs. The neutral build excludes them.

| Placement                | Catalog ID                   | Usage                                                                                                                                                                       |
| ------------------------ | ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Hero                     | `property-details/hero`      | New corridor panorama with left-side copy space.                                                                                                                            |
| Amenities and Facilities | `hero/hero-desktop`          | Reuse 640, 1100 and 1672px. The pool, sun loungers, stucco arches and plants fit the subject. The pool photo has no ocean view.                                             |
| Location                 | `property-details/coastline` | New illustrative daytime coastline. Use a scenic caption without an address or map pin.                                                                                     |
| Guest Information        | `suites/suite-terrace`       | Reuse 640, 1056 and 1440px. Identify it as the private Terrace Suite bedroom. The suite photo has warm neutrals, terracotta accents and an ocean-facing outdoor connection. |
| Closing banner           | `banners/booking-banner`     | Reuse 480, 960 and 1672px with the established terracotta treatment.                                                                                                        |

The mobile reference depicts three smaller facility cards instead of the desktop pool panel. The Residence courtyard and communal lounge can be reviewed for mobile reuse. The Terrace BBQ is private to that suite. The catalog has no approved photo of a communal BBQ, so leave that facility card pending review rather than using a misleading image.

### Mobile facility reuse and transfer

The approved mobile facilities reuse `residence/architecture` (Landscaped Courtyards), `residence/coastal-lounge` (Terrace & Lounge), and `hero/hero-desktop` (Swimming Pool). The Terrace Suite bedroom remains desktop-only.

Cold Chrome contexts on the local review build transferred six WebPs: 225,768 bytes at 390 × 844 CSS pixels and DPR 1, and 414,816 bytes on the 412 × 924 CSS-pixel Pixel 9 profile at DPR 2.625. In both cases all six had arrived by network idle before scrolling. Progressive scrolling and decoding confirmed the same totals before capture. Only the hero is eager; the other five use native lazy loading.

## E1 Explore Rosarito photography

All six masters are approved AI-generated illustrations. The beach master shows daytime surf under the cliffs. The pier master shows a wooden pier and pavilions at golden hour. These are separate scenes. Destination imagery does not verify access, operating conditions, or a specific restaurant. The PNGs are in the ignored `image-masters/explore-rosarito` directory.

| Master PNG                     | Catalog ID                 | Source dimensions | Source bytes | SHA-256                                                            |
| ------------------------------ | -------------------------- | ----------------- | -----------: | ------------------------------------------------------------------ |
| `explore-hero.png`             | `explore/hero`             | 2172 × 724        |    2,876,067 | `e58ba185fa55b7186d8d0324d673fe3ce25fc5c3ed89e098a5e91ef43c1931a7` |
| `explore-rosarito-beach.png`   | `explore/rosarito-beach`   | 1672 × 941        |    2,945,858 | `625056b926f790cae955f7de0b2018575d855ed4fd89f8e3e8ac6dc5c261b2ab` |
| `explore-rosarito-pier.png`    | `explore/rosarito-pier`    | 1672 × 941        |    2,326,359 | `5e3319dd1f0d1ba1b00b984d294b5efb2e374bf3fa6be9ea6b2b27beef7ac34c` |
| `explore-puerto-nuevo.png`     | `explore/puerto-nuevo`     | 1672 × 941        |    2,629,806 | `a3fa92794cbc8e71cb4af455e1fa4f611b1f06410f9b11ce4af00aa66f326bf5` |
| `explore-popotla.png`          | `explore/popotla`          | 1672 × 941        |    3,099,344 | `5634b18ed36a77a8c67122407682b887d9579f3d7b0befd12cd3fb291efae0aa` |
| `explore-cerro-el-coronel.png` | `explore/cerro-el-coronel` | 1672 × 941        |    3,142,029 | `807d8069e36cdcb96b158ddc906a27f2d2639a17b3ad4a55bfee737f781d3d0c` |

| Catalog ID                 | WebP dimensions and encoded sizes                                                                                  |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `explore/hero`             | 480 × 160 (19,466 B), 768 × 256 (44,612 B), 1200 × 400 (102,508 B), 1672 × 557 (186,952 B), 2172 × 724 (292,090 B) |
| `explore/rosarito-beach`   | 480 × 270 (34,404 B), 768 × 432 (81,398 B), 1200 × 675 (181,568 B)                                                 |
| `explore/rosarito-pier`    | 480 × 270 (26,556 B), 768 × 432 (57,740 B), 1200 × 675 (120,080 B)                                                 |
| `explore/puerto-nuevo`     | 480 × 270 (36,792 B), 768 × 432 (76,132 B), 1200 × 675 (147,122 B)                                                 |
| `explore/popotla`          | 480 × 270 (40,070 B), 768 × 432 (93,522 B), 1200 × 675 (202,928 B), 1672 × 941 (335,978 B)                         |
| `explore/cerro-el-coronel` | 480 × 270 (34,816 B), 768 × 432 (85,354 B), 1200 × 675 (191,684 B), 1672 × 941 (326,394 B)                         |

The 22 derivatives total 2,718,166 bytes. The hero uses quality 85 and preserves the complete 3:1 frame. Keep the left copy space on desktop and apply a right-biased crop on mobile through CSS. Attraction variants use quality 82. The 480px variants serve smaller cards and map popups, while 768px and 1200px support denser displays and full-width cards. The 1672px variants for Popotla and Cerro El Coronel support the wider desktop second row at higher device pixel ratios. Encoding preserves the original framing and does not upscale.

Cards and map popups share these IDs and choose widths through the existing responsive resolver. Dining also uses `explore/puerto-nuevo`. It depicts illustrative coastal dining without associating the meal with a named restaurant. The fictional property popup uses `residence/coastal-lounge`. The closing banner uses `banners/booking-banner` and the property marker uses the existing brand wave.

At the Explore Rosarito release, the library contained 40 PNG masters, 143 review WebPs including these 22 derivatives, 48 archived JPGs, and 12 design references. The neutral build excludes the fictional guide, marker data, and photography.

### E3 display reuse

Explore Rosarito uses the existing five attraction IDs on both cards and map popups. Per-card crop positions preserve the shoreline, pier, lobster, boats and trail within the two approved desktop image ratios. The same hero and shared terracotta banner variants remain in use. E3 adds no derivatives. Responsive candidate requests can share the browser cache when a card and popup resolve to the same URL.

## D1 Dining photography

The five approved AI-generated PNGs remain in the ignored `image-masters/dining/` directory. The 3:1 hero keeps the terrace and ocean on the right and the quieter wall on the left. The four 4:3 supporting photographs depict tacos, shrimp with avocado, a sunset dining terrace, and a chilaquiles breakfast. The full scene framing and natural colors are preserved in the catalog variants.

| Master PNG              | Catalog ID          | Original dimensions | WebP dimensions and encoded sizes                                                                                  |
| ----------------------- | ------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `dining-hero.png`       | `dining/hero`       | 2172 × 724          | 480 × 160 (26,778 B), 768 × 256 (62,132 B), 1200 × 400 (138,356 B), 1672 × 557 (244,454 B), 2172 × 724 (373,132 B) |
| `dining-tacos.png`      | `dining/tacos`      | 1448 × 1086         | 480 × 360 (65,554 B), 768 × 576 (137,246 B), 1200 × 900 (264,180 B)                                                |
| `dining-seafood.png`    | `dining/seafood`    | 1448 × 1086         | 480 × 360 (45,072 B), 768 × 576 (92,074 B), 1200 × 900 (168,296 B)                                                 |
| `dining-oceanfront.png` | `dining/oceanfront` | 1448 × 1086         | 480 × 360 (45,024 B), 768 × 576 (96,480 B), 1200 × 900 (187,524 B)                                                 |
| `dining-breakfast.png`  | `dining/breakfast`  | 1448 × 1086         | 480 × 360 (61,308 B), 768 × 576 (124,172 B), 1200 × 900 (229,692 B)                                                |

The 17 new WebPs total 2,361,474 bytes. Encoding follows the shared pipeline at quality 85 for the hero and 82 for supporting images, with resizing limited to source dimensions. The full-width hero variant supports large desktop layouts. The v0.9.0-preview inventory comprises 45 local PNG masters, 160 optimized WebPs, 48 archived JPGs, and 14 approved release references.

Dining reuses `explore/puerto-nuevo` for the lobster feature, `suites/garden-outdoor-dining` for Make Yourself at Home, and `banners/booking-banner` for the closing banner. The Garden photo was selected after comparing the Garden and Terrace galleries. Its round table, flowering vines and visible suite doorway closely match the private dining composition. The imagery illustrates culinary experiences and conveys no verified restaurant operations or suite-wide amenities.
