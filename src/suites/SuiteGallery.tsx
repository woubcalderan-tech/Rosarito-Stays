import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { PointerEvent } from "react";
import type { ImageAsset } from "../types/content";
import { ResponsiveImage } from "../ui/ResponsiveImage";

export function SuiteGallery({
  name,
  images,
  sharedHeroPhoto,
  detail = false,
  thumbnails = false,
}: {
  name: string;
  images: readonly ImageAsset[];
  sharedHeroPhoto?: ImageAsset;
  detail?: boolean;
  thumbnails?: boolean;
}) {
  const [active, setActive] = useState(0);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const thumbnailStrip = useRef<HTMLDivElement>(null);
  const count = images.length;
  const current = count > 0 ? active % count : 0;
  useEffect(() => {
    const strip = thumbnailStrip.current;
    const selected = strip?.children.item(current);
    if (!strip || !selected) return;
    const frame = strip.getBoundingClientRect();
    const thumb = selected.getBoundingClientRect();
    if (thumb.left < frame.left) strip.scrollLeft += thumb.left - frame.left;
    else if (thumb.right > frame.right)
      strip.scrollLeft += thumb.right - frame.right;
  }, [current, thumbnails]);
  const photo = images[current];
  if (!photo) return null;
  const multiple = count > 1;
  const sharedSizes =
    photo.src === sharedHeroPhoto?.src ? sharedHeroPhoto.sizes : undefined;

  function advance(step: number) {
    setActive((index) => (index + step + count) % count);
  }

  function startSwipe(event: PointerEvent<HTMLDivElement>) {
    if (!multiple || !event.isPrimary || event.pointerType !== "touch") return;
    touchStart.current = { x: event.clientX, y: event.clientY };
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function endSwipe(event: PointerEvent<HTMLDivElement>) {
    if (!event.isPrimary || event.pointerType !== "touch") return;
    const start = touchStart.current;
    touchStart.current = null;
    if (!start) return;
    const horizontal = event.clientX - start.x;
    const vertical = event.clientY - start.y;
    if (
      Math.abs(horizontal) >= 48 &&
      Math.abs(horizontal) > Math.abs(vertical) * 1.5
    ) {
      advance(horizontal < 0 ? 1 : -1);
    }
  }

  return (
    <>
      <div
        className={
          detail ? "suite-gallery suite-gallery--detail" : "suite-gallery"
        }
        role={multiple ? "group" : undefined}
        aria-roledescription={multiple ? "carousel" : undefined}
        aria-label={multiple ? `${name} photos` : undefined}
        onKeyDown={(event) => {
          if (!multiple || !["ArrowLeft", "ArrowRight"].includes(event.key))
            return;
          event.preventDefault();
          advance(event.key === "ArrowLeft" ? -1 : 1);
        }}
      >
        <div
          className="suite-gallery-media"
          onPointerDown={startSwipe}
          onPointerUp={endSwipe}
          onPointerCancel={() => {
            touchStart.current = null;
          }}
        >
          <ResponsiveImage
            {...photo}
            priority={detail && current === 0}
            sizes={
              sharedSizes ??
              (detail
                ? "(width < 64rem) 100vw, 59vw"
                : "(width < 48rem) 94vw, (width < 100rem) 46vw, 47rem")
            }
          />
        </div>
        {multiple && (
          <>
            <button
              type="button"
              className="suite-gallery-prev"
              aria-label={`Previous photo of ${name}`}
              onClick={() => advance(-1)}
            >
              <ChevronLeft size={20} aria-hidden="true" />
            </button>
            <button
              type="button"
              className="suite-gallery-next"
              aria-label={`Next photo of ${name}`}
              onClick={() => advance(1)}
            >
              <ChevronRight size={20} aria-hidden="true" />
            </button>
            <div
              className="suite-gallery-dots"
              role="group"
              aria-label="Choose a photo"
            >
              {images.map((image, index) => (
                <button
                  type="button"
                  key={image.src}
                  aria-label={`Show photo ${index + 1} of ${name}`}
                  aria-current={current === index || undefined}
                  onClick={() => setActive(index)}
                />
              ))}
            </div>
            <span className="sr-only" role="status">
              Photo {current + 1} of {count}
            </span>
          </>
        )}
      </div>
      {thumbnails && multiple && (
        <div
          className="suite-gallery-thumbnails"
          role="group"
          aria-label={`${name} thumbnails`}
          ref={thumbnailStrip}
        >
          {images.map((image, index) => (
            <button
              type="button"
              key={image.src}
              aria-label={`Show photo ${index + 1}: ${image.alt}`}
              aria-current={current === index || undefined}
              onPointerUp={(event) => {
                if (event.pointerType === "touch" && event.isPrimary)
                  setActive(index);
              }}
              onClick={() => setActive(index)}
            >
              <ResponsiveImage {...image} alt="" sizes="5rem" />
            </button>
          ))}
        </div>
      )}
    </>
  );
}
