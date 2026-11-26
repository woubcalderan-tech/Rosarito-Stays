# Temporary homepage photography

All 48 JPGs in `sample-photos/` are supplied photographs from the Las Olas Grand condominium project. They are temporary development assets and do not depict Rosarito Stays. The source directory is ignored by Git and sits outside Vite's public directory.

## Selected photographs

| Homepage placement         | Original                    | WebP filename stem                | Composition                                                                  |
| -------------------------- | --------------------------- | --------------------------------- | ---------------------------------------------------------------------------- |
| Hero                       | `airbnb-pool-deck.jpg`      | `hero-pool`, `hero-pool-mobile`   | Ground-level water, greenery and outdoor seating. Uses a taller mobile crop. |
| Featured suite — Courtyard | `img_4809.jpg`              | `featured-bedroom`                | Bed with a glazed balcony opening to the right. Initial slide.               |
| Featured suite — Oceanview | `img_4825.jpg`              | `featured-oceanview`              | Bedroom and open ocean-facing balcony door.                                  |
| Featured suite — Terrace   | `img_4813.jpg`              | `featured-terrace`                | Exterior seating and a bedroom visible through the open door.                |
| Featured suite — Garden    | `img_4826.jpg`              | `featured-garden`                 | Warm bedroom with a rounded soffit. The sample does not show a garden.       |
| Explore Rosarito           | `airbnb-coastline-view.jpg` | `coastline`, `coastline-portrait` | Elevated view of a rocky coastline.                                          |
| Dining                     | `img_4736.jpg`              | `dining`, `dining-portrait`       | Las Olas Grand condominium dining area with waterfront glazing.              |

Copies use WebP quality 83, a standard sRGB color space and composition-specific crops. Widths run from 360 to 1440 px without upscaling. The homepage identifies the source of the temporary photography beside the imagery. Its other routes hold no sample images.

The centralized manifest is `src/assets/images/homepage.ts`. The local Vite development server and the explicit GitHub Pages review build render the selected samples. The standard production build omits them. Public use of these Las Olas Grand samples must be confirmed before pushing the review or publishing it. Before publication, replace the manifest mappings with approved Rosarito Stays imagery in a separate asset directory, update alt text and attribution, and verify responsive crops and production output.

The featured carousel uses the catalog order and starts on Courtyard Suite. Its courtyard sentence is provisional mockup copy. The other slides show that their descriptions are pending review. Production keeps the suite names and links in a text-only carousel and excludes both the sample photographs and all draft copy.

The closing booking banner uses a layered terracotta plaster treatment. The available Las Olas Grand photographs do not depict the approved arch, lantern, and planting composition. The previously selected cliff-path source and WebPs are retained for local inventory and are no longer used in the banner.

The discovery cards use portrait crops on desktop and existing landscape variants on mobile. Property Highlights uses the decorative palm on desktop. On mobile, it uses a labeled common-area photo from `airbnb-garden-jacuzzi.jpg`, with 360px and 720px `discovery-garden` WebP variants. The photo shows the Las Olas Grand garden spa and is included in the local and review builds. The terrace-seating WebPs remain available in the local inventory, without an application reference.

## Complete visual inventory

| Category              | File                                | What the photograph shows                                                            |
| --------------------- | ----------------------------------- | ------------------------------------------------------------------------------------ |
| Courts and recreation | `airbnb-basketball-court.jpg`       | Blue and green basketball court, hoop and ocean beyond.                              |
| Courts and recreation | `airbnb-sports-court-palapa.jpg`    | Partial court with a thatched shelter beside the waterfront railing.                 |
| Courts and recreation | `airbnb-tennis-and-pools.jpg`       | Aerial view of a blue court and pool deck beside rocky surf.                         |
| Courts and recreation | `airbnb-volleyball-court.jpg`       | Sand volleyball court below the condominium buildings.                               |
| Pools and grounds     | `airbnb-garden-jacuzzi.jpg`         | Small spa pool framed by palms, rocks and the ocean.                                 |
| Pools and grounds     | `airbnb-pool-deck.jpg`              | Pool-facing deck seating and red umbrellas against a blue ocean horizon.             |
| Pools and grounds     | `airbnb-pools-from-above.jpg`       | Steep overhead view of pool decks and a rocky cove.                                  |
| Coast and paths       | `airbnb-cliff-path.jpg`             | Stone walkway with a cliffside railing and planted slope.                            |
| Coast and paths       | `airbnb-coastline-view.jpg`         | Elevated view of buildings and road on a coastal bluff with breaking waves.          |
| Coast and paths       | `airbnb-ocean-view.jpg`             | Open water, hazy horizon and a small sailboat.                                       |
| Kitchen               | `airbnb-kitchen-bar.jpg`            | Portrait view of a kitchen island with dark bar stools.                              |
| Kitchen               | `airbnb-kitchen-cooktop-corner.jpg` | Corner cabinets, open dishes shelf and glass cooktop.                                |
| Kitchen               | `airbnb-kitchen-fridge.jpg`         | White cabinets around stainless refrigerator and dishwasher.                         |
| Kitchen               | `img_4716.jpg`                      | Downward portrait view of a black cooktop and corner drawers.                        |
| Kitchen               | `img_4720.jpg`                      | Close-up of a stainless sink and tall faucet.                                        |
| Kitchen               | `img_4721.jpg`                      | Sink counter, backsplash and open shelves of white dishes.                           |
| Living and dining     | `airbnb-great-room-panorama.jpg`    | Wide panorama linking the kitchen island and dining table to the ocean-facing doors. |
| Living and dining     | `airbnb-living-from-kitchen.jpg`    | Sofa and dining furniture seen from beside the kitchen bar.                          |
| Living and dining     | `img_4683.jpg`                      | Wide living and dining room with sofa and glazed balcony wall.                       |
| Living and dining     | `img_4736.jpg`                      | Portrait view of a dining table beside ocean-facing sliding doors.                   |
| Living and dining     | `img_4748.jpg`                      | White sofa and artwork with balcony glazing at left.                                 |
| Living and dining     | `img_4749.jpg`                      | Closer diagonal view of the white sofa, coffee table and side lamp.                  |
| Living and dining     | `img_4758.jpg`                      | Recessed shelves with greenery, a clock and a telephone.                             |
| Living and dining     | `img_4777.jpg`                      | Glass dining table and place setting looking toward the sofa.                        |
| Living and dining     | `img_4788.jpg`                      | Frontal sofa and round coffee table on a patterned rug.                              |
| Balconies             | `img_4646.jpg`                      | Long tiled balcony with glass railing and a hammock.                                 |
| Balconies             | `img_4654.jpg`                      | Panoramic ocean-facing balcony with chairs and a hammock.                            |
| Balconies             | `img_4767.jpg`                      | Long view past loungers along a curved coastal balcony.                              |
| Balconies             | `img_4769.jpg`                      | Pair of loungers and blue seating beside a glass balcony railing.                    |
| Balconies             | `img_4776.jpg`                      | Blue chairs around a round table facing the ocean.                                   |
| Balconies             | `img_4813.jpg`                      | Balcony with two blue chairs beside a sliding bedroom door.                          |
| Bedrooms              | `apc_0095-hdr.jpg`                  | Foot of a bed facing white cabinetry and an inset television.                        |
| Bedrooms              | `apc_0110-hdr.jpg`                  | Nightstand drawer and adjustable bedside reading lamp.                               |
| Bedrooms              | `apc_0134-hdr.jpg`                  | Bed edge, inset television and glass doors opening toward the sea.                   |
| Bedrooms              | `apc_0145.jpg`                      | Upholstered bed corner with white nightstand and plant.                              |
| Bedrooms              | `img_4805.jpg`                      | Bedroom viewed through a doorway with blue balcony glazing in the distance.          |
| Bedrooms              | `img_4809.jpg`                      | Bed with gray tufted headboard next to a balcony opening.                            |
| Bedrooms              | `img_4817.jpg`                      | Angled bed view with a mirrored closet and bathroom opening.                         |
| Bedrooms              | `img_4823.jpg`                      | Bed with rounded tufted headboard and adjacent bathroom.                             |
| Bedrooms              | `img_4825.jpg`                      | Side view of bed with rounded headboard and open balcony door.                       |
| Bedrooms              | `img_4826.jpg`                      | Centered bed and bedside lamps beneath a white curved soffit.                        |
| Bedrooms              | `img_4827.jpg`                      | Bed beside mirrored closets and blue balcony doors.                                  |
| Bathrooms             | `apc_0104-hdr.jpg`                  | Ensuite entry with frosted door, tile and vanity beyond.                             |
| Bathrooms             | `apc_0154.jpg`                      | Toilet in a tiled alcove with a decorative border.                                   |
| Bathrooms             | `apc_0156.jpg`                      | Frontal view of vanity, tiled wall and tub surround.                                 |
| Bathrooms             | `img_4815.jpg`                      | Tiled bathroom with tub, vanity and shower.                                          |
| Hallways              | `img_4778.jpg`                      | Long tiled corridor ending at a dark arched doorway.                                 |
| Hallways              | `img_4779.jpg`                      | Short tiled corridor with framed wall art in an arched recess.                       |
