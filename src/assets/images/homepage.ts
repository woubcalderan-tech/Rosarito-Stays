import type { ImageAsset } from "../../types/content";
import { demoPhotoPath, demoPhotoVariants } from "./demo-photo-variants";
import type { DemoPhoto } from "./demo-photo-variants";

declare const __SHOW_PREVIEW_CONTENT__: boolean;

function source(name: DemoPhoto, sizes: string) {
  const variants = demoPhotoVariants[name];
  const [width, height] = variants[variants.length - 1]!;
  const base = import.meta.env.BASE_URL;
  return {
    src: base + demoPhotoPath(name, width),
    srcSet: variants
      .map(([width]) => `${base}${demoPhotoPath(name, width)} ${width}w`)
      .join(", "),
    width,
    height,
    sizes,
  };
}

function photo(name: DemoPhoto, alt: string, sizes: string): ImageAsset {
  return { ...source(name, sizes), alt };
}

function alternateSource(name: DemoPhoto, sizes: string) {
  const { srcSet, width, height } = source(name, sizes);
  return { srcSet, width, height, sizes };
}

export interface FeaturedSuitePhoto {
  image: ImageAsset;
  position: string;
}

function featuredPhoto(
  name: DemoPhoto,
  alt: string,
  position: string,
): FeaturedSuitePhoto {
  return {
    image: photo(name, alt, "(width < 64rem) 100vw, 65.2vw"),
    position,
  };
}

function discoveryPhoto(
  portrait: DemoPhoto,
  landscape: DemoPhoto,
  alt: string,
): ImageAsset {
  return {
    ...photo(portrait, alt, "(width < 64rem) 32vw, 16vw"),
    mobile: alternateSource(landscape, "32vw"),
  };
}

export const homepagePhotos = __SHOW_PREVIEW_CONTENT__
  ? {
      hero: {
        ...photo(
          "hero/hero-desktop",
          "Pool and sun loungers in a Mediterranean-style courtyard with a central arch",
          "75vw",
        ),
        mobile: alternateSource("hero/hero-mobile", "100vw"),
      },
      featured: {
        "oceanview-suite": featuredPhoto(
          "suites/suite-oceanview",
          "Bedroom opening onto a balcony with a view of the ocean",
          "60% 50%",
        ),
        "courtyard-suite": featuredPhoto(
          "suites/suite-courtyard",
          "Bedroom with open doors to a flowering courtyard and a shaded arch",
          "53% 50%",
        ),
        "terrace-suite": featuredPhoto(
          "suites/suite-terrace",
          "Bedroom opening onto a covered terrace with seating and an ocean view",
          "57% 50%",
        ),
        "garden-suite": featuredPhoto(
          "suites/suite-garden",
          "Bedroom looking onto a planted patio with pink flowers",
          "52% 50%",
        ),
      },
      discovery: {
        explore: discoveryPhoto(
          "discovery/explore-rosarito-portrait",
          "discovery/explore-rosarito",
          "Illustrated Baja coastline with a sandy cove and waves below a rocky bluff",
        ),
        property: {
          ...photo(
            "discovery/property-highlights",
            "Bench and lantern in a plaster arch framed by potted plants",
            "12vw",
          ),
          mobile: alternateSource("discovery/property-highlights", "31vw"),
        },
        dining: discoveryPhoto(
          "discovery/dining-portrait",
          "discovery/dining",
          "Set dining table under woven lanterns on a terrace overlooking the coast at sunset",
        ),
      },
      banner: photo("banners/booking-banner", "", "100vw"),
    }
  : undefined;
