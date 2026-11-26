import type { ImageAsset } from "../types/content";
export function ResponsiveImage({
  mobile,
  position,
  priority = false,
  ...image
}: ImageAsset & { priority?: boolean }) {
  return (
    <picture>
      {mobile && <source media="(width < 48rem)" {...mobile} />}
      <img
        {...image}
        style={position ? { objectPosition: position } : undefined}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
      />
    </picture>
  );
}
