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
  readonly slug: string;
  readonly name: string;
  readonly summary?: string;
  readonly images?: readonly ImageAsset[];
}
