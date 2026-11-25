import type { ImageAsset } from "../../types/content";

declare const __SHOW_PREVIEW_CONTENT__: boolean;

// Vite serves these source files in dev without adding them to the build asset graph.
function sampleUrl(name: string, width: number) {
  return `${import.meta.env.BASE_URL}src/assets/images/placeholders/${name}-${width}.webp`;
}

function candidates(name: string, widths: number[]) {
  return widths
    .map((width) => `${sampleUrl(name, width)} ${width}w`)
    .join(", ");
}

function photo(name: string, asset: ImageAssetInfo): ImageAsset {
  const { width, height, widths, alt, sizes } = asset;
  return {
    src: sampleUrl(name, width),
    srcSet: candidates(name, widths),
    width,
    height,
    alt,
    sizes,
  };
}

interface ImageAssetInfo {
  width: number;
  height: number;
  widths: number[];
  alt: string;
  sizes: string;
}

export interface FeaturedSuiteSample {
  image: ImageAsset;
  position: string;
}

function featuredPhoto(
  name: string,
  alt: string,
  position: string,
): FeaturedSuiteSample {
  return {
    image: photo(name, {
      width: 1440,
      height: 900,
      widths: [640, 1056, 1440],
      alt,
      sizes: "(width < 64rem) 100vw, 65.2vw",
    }),
    position,
  };
}

function discoveryPhoto(
  name: string,
  alt: string,
  landscapeName = name,
): ImageAsset {
  return {
    ...photo(name + "-portrait", {
      width: 640,
      height: 800,
      widths: [320, 640],
      alt,
      sizes: "(width < 64rem) 32vw, 16vw",
    }),
    mobile: {
      srcSet: candidates(landscapeName, [360, 720]),
      sizes: "32vw",
      width: 720,
      height: 480,
    },
  };
}

export const homepagePhotos = __SHOW_PREVIEW_CONTENT__
  ? {
      hero: {
        ...photo("hero-pool", {
          width: 1100,
          height: 825,
          widths: [640, 1100],
          alt: "Las Olas Grand pool deck with red umbrellas and a view of the ocean",
          sizes: "(width < 48rem) 100vw, 75vw",
        }),
        mobile: {
          srcSet: candidates("hero-pool-mobile", [480, 720]),
          sizes: "100vw",
          width: 720,
          height: 780,
        },
      },
      featured: {
        "oceanview-suite": featuredPhoto(
          "featured-oceanview",
          "Las Olas Grand bedroom with an open door to an ocean-facing balcony",
          "50% 48%",
        ),
        "courtyard-suite": featuredPhoto(
          "featured-bedroom",
          "Las Olas Grand bedroom beside a glass door to an ocean-facing balcony",
          "50% 52%",
        ),
        "terrace-suite": featuredPhoto(
          "featured-terrace",
          "Las Olas Grand balcony with blue chairs, a glass railing and a bedroom visible through an open door",
          "50% 53%",
        ),
        "garden-suite": featuredPhoto(
          "featured-garden",
          "Las Olas Grand bedroom with a tufted headboard beneath a rounded soffit",
          "50% 51%",
        ),
      },
      discovery: {
        explore: discoveryPhoto(
          "coastline",
          "Rocky coastline below Las Olas Grand",
        ),
        dining: discoveryPhoto(
          "dining",
          "Las Olas Grand condominium dining table beside blue glass balcony doors",
          "dining-area",
        ),
      },
    }
  : undefined;
