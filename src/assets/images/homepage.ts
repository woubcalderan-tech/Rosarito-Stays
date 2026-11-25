import type { ImageAsset } from "../../types/content";

declare const __LOCAL_SAMPLE_PHOTOS__: boolean;

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

const tile = {
  width: 720,
  height: 480,
  widths: [360, 720],
  sizes: "(width < 48rem) 30vw, (width < 85rem) 31vw, 390px",
};

export const homepagePhotos = __LOCAL_SAMPLE_PHOTOS__
  ? {
      hero: {
        ...photo("hero-pool", {
          width: 1100,
          height: 825,
          widths: [640, 1100],
          alt: "Las Olas Grand pool deck with red umbrellas and a view of the ocean",
          sizes: "(width < 48rem) 100vw, 60vw",
        }),
        mobile: {
          srcSet: candidates("hero-pool-mobile", [480, 720]),
          sizes: "100vw",
          width: 720,
          height: 780,
        },
      },
      featured: photo("featured-bedroom", {
        width: 1440,
        height: 900,
        widths: [640, 1056, 1440],
        alt: "Las Olas Grand bedroom beside a glass door to an ocean-facing balcony",
        sizes: "(width < 48rem) 100vw, 65vw",
      }),
      scenes: [
        {
          label: "Coastline",
          image: photo("coastline", {
            ...tile,
            alt: "Rocky coastline below Las Olas Grand",
          }),
        },
        {
          label: "Terrace seating",
          image: photo("terrace-seating", {
            ...tile,
            alt: "Blue terrace chairs at Las Olas Grand overlooking the ocean",
          }),
        },
        {
          label: "Dining area",
          image: photo("dining-area", {
            ...tile,
            alt: "Las Olas Grand condominium dining table beside blue glass balcony doors",
          }),
        },
      ],
      closing: photo("cliff-path", {
        width: 800,
        height: 533,
        widths: [480, 800],
        alt: "Stone path beside coastal plantings at Las Olas Grand",
        sizes: "(width < 48rem) 100vw, 36vw",
      }),
    }
  : undefined;
