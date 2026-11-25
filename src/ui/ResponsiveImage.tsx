import type { ImageAsset } from "../types/content";
export function ResponsiveImage({
  mobile,
  priority = false,
  ...image
}: ImageAsset & { priority?: boolean }) {
  return (
    <picture>
      {mobile && <source media="(width < 48rem)" {...mobile} />}
      <img
        {...image}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
      />
    </picture>
  );
}
