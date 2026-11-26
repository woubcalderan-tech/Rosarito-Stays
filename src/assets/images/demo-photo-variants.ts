export const demoPhotoDirectory = "src/assets/images/fictional-demo";

export const demoPhotoVariants = {
  "hero/hero-desktop": [
    [640, 360],
    [1100, 619],
    [1672, 941],
  ],
  "hero/hero-mobile": [
    [480, 853],
    [720, 1279],
    [941, 1672],
  ],
  "suites/suite-oceanview": [
    [640, 400],
    [1056, 660],
    [1440, 900],
  ],
  "suites/suite-courtyard": [
    [640, 400],
    [1056, 660],
    [1440, 900],
  ],
  "suites/suite-terrace": [
    [640, 400],
    [1056, 660],
    [1440, 900],
  ],
  "suites/suite-garden": [
    [640, 400],
    [1056, 660],
    [1440, 900],
  ],
  "suites/oceanview-balcony": [
    [480, 270],
    [768, 432],
    [1200, 675],
    [1672, 941],
  ],
  "suites/oceanview-bathroom": [
    [480, 270],
    [768, 432],
    [1200, 675],
    [1672, 941],
  ],
  "suites/oceanview-living": [
    [480, 270],
    [768, 432],
    [1200, 675],
    [1672, 941],
  ],
  "suites/oceanview-kitchen": [
    [480, 270],
    [768, 432],
    [1200, 675],
    [1672, 941],
  ],
  "suites/courtyard-patio": [
    [480, 270],
    [768, 432],
    [1200, 675],
    [1672, 941],
  ],
  "suites/courtyard-bathroom": [
    [480, 270],
    [768, 432],
    [1200, 675],
    [1672, 941],
  ],
  "suites/courtyard-kitchenette": [
    [480, 270],
    [768, 432],
    [1200, 675],
    [1672, 941],
  ],
  "suites/courtyard-living": [
    [480, 270],
    [768, 432],
    [1200, 675],
    [1672, 941],
  ],
  "suites/terrace-outdoor": [
    [480, 270],
    [768, 432],
    [1200, 675],
    [1672, 941],
  ],
  "suites/terrace-bathroom": [
    [480, 270],
    [768, 432],
    [1200, 675],
    [1672, 941],
  ],
  "suites/terrace-refreshment-area": [
    [480, 270],
    [768, 432],
    [1200, 675],
    [1672, 941],
  ],
  "suites/terrace-living": [
    [480, 270],
    [768, 432],
    [1200, 675],
    [1672, 941],
  ],
  "suites/garden-outdoor-dining": [
    [480, 270],
    [768, 432],
    [1200, 675],
    [1672, 941],
  ],
  "suites/garden-bathroom": [
    [480, 270],
    [768, 432],
    [1200, 675],
    [1672, 941],
  ],
  "suites/garden-kitchen": [
    [480, 270],
    [768, 432],
    [1200, 675],
    [1672, 941],
  ],
  "suites/garden-living": [
    [480, 270],
    [768, 432],
    [1200, 675],
    [1672, 941],
  ],
  "discovery/explore-rosarito": [
    [360, 240],
    [720, 480],
  ],
  "discovery/explore-rosarito-portrait": [
    [320, 400],
    [640, 800],
  ],
  "discovery/property-highlights": [
    [360, 360],
    [720, 720],
  ],
  "discovery/dining": [
    [360, 240],
    [720, 480],
  ],
  "discovery/dining-portrait": [
    [320, 400],
    [640, 800],
  ],
  "banners/booking-banner": [
    [480, 270],
    [960, 540],
    [1672, 941],
  ],
} as const;

export type DemoPhoto = keyof typeof demoPhotoVariants;

export function demoPhotoPath(name: DemoPhoto, width: number) {
  return `${demoPhotoDirectory}/${name}-${width}.webp`;
}
