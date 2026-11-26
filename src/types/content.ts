import type { CatalogSuite } from "../config/property";

export interface ImageAsset {
  src: string;
  alt: string;
  position?: string;
  width: number;
  height: number;
  srcSet?: string;
  sizes?: string;
  mobile?: { srcSet: string; sizes?: string; width?: number; height?: number };
}

export interface Suite extends Omit<CatalogSuite, "gallery" | "featured"> {
  readonly images?: readonly ImageAsset[];
  readonly highlightPhotos?: readonly ImageAsset[];
  readonly featured?: {
    order: number;
    description?: string;
    photo?: { image: ImageAsset; position: string };
  };
}
