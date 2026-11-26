export interface ImageAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
  srcSet?: string;
  sizes?: string;
  mobile?: { srcSet: string; sizes?: string; width?: number; height?: number };
}

export interface Suite {
  readonly id: string;
  readonly slug: string;
  readonly name: string;
  readonly summary?: string;
  readonly images?: readonly ImageAsset[];
  readonly featured?: {
    order: number;
    description?: string;
    photo?: { image: ImageAsset; position: string };
  };
}
