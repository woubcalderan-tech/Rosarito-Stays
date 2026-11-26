import { property } from "../../config/site";
import type { PropertyImage } from "../../config/property";
import type { ImageAsset } from "../../types/content";

function source(id: string, sizes: string) {
  const catalog = property.photos;
  const variants = catalog?.variants[id];
  const largest = variants?.at(-1);
  if (!catalog || !variants || !largest) {
    throw new Error(`Missing photo variants for "${id}"`);
  }

  const [width, height] = largest;
  const url = (candidate: number) =>
    `${import.meta.env.BASE_URL}${catalog.directory}/${id}-${candidate}.webp`;
  return {
    src: url(width),
    srcSet: variants.map(([width]) => `${url(width)} ${width}w`).join(", "),
    width,
    height,
    sizes,
  };
}

export function propertyImage(
  { id, alt, mobileId }: PropertyImage,
  sizes: string,
  mobileSizes = sizes,
): ImageAsset {
  const image = { ...source(id, sizes), alt };
  if (!mobileId) return image;
  const { srcSet, width, height } = source(mobileId, mobileSizes);
  return { ...image, mobile: { srcSet, width, height, sizes: mobileSizes } };
}

const { home } = property;
export const heroPhoto = home.hero && propertyImage(home.hero, "75vw", "100vw");
export const bannerPhoto =
  home.banner.photo && propertyImage(home.banner.photo, "100vw");
