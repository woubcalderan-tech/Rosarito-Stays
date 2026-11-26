import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef, useState } from "react";
import type { TouchEvent } from "react";
import { Link } from "react-router";
import type { FeaturedSuitePhoto } from "../assets/images/homepage";
import { suitePath } from "../config/site";
import { provisionalFeaturedDescriptions } from "../data/featured-suite-copy";
import { en } from "../localization/en";
import type { Suite } from "../types/content";
import { ResponsiveImage } from "../ui/ResponsiveImage";
import "../styles/featured-suite.css";

declare const __SHOW_PREVIEW_CONTENT__: boolean;

export function FeaturedSuiteCarousel({
  suites,
  initialSlug,
  photos,
}: {
  suites: readonly Suite[];
  initialSlug: string;
  photos?: Readonly<Record<string, FeaturedSuitePhoto>>;
}) {
  const [activeIndex, setActiveIndex] = useState(() =>
    Math.max(
      0,
      suites.findIndex(({ slug }) => slug === initialSlug),
    ),
  );
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const suite = suites[activeIndex];
  if (!suite) return null;

  const photo = photos?.[suite.slug];
  const provisional = suite.summary
    ? undefined
    : provisionalFeaturedDescriptions[suite.slug];
  const description = suite.summary ?? provisional;

  function advance(delta: number) {
    setActiveIndex((index) => (index + delta + suites.length) % suites.length);
  }

  function startSwipe(event: TouchEvent) {
    const touch = event.touches[0];
    touchStart.current =
      event.touches.length === 1 && touch
        ? { x: touch.clientX, y: touch.clientY }
        : null;
  }

  function endSwipe(event: TouchEvent) {
    const start = touchStart.current;
    touchStart.current = null;
    const touch = event.changedTouches[0];
    if (!start || !touch || event.touches.length > 0) return;
    const horizontal = touch.clientX - start.x;
    const vertical = touch.clientY - start.y;
    if (
      Math.abs(horizontal) >= 48 &&
      Math.abs(horizontal) > Math.abs(vertical) * 1.5
    ) {
      advance(horizontal < 0 ? 1 : -1);
    }
  }

  return (
    <section
      className={`featured-suite${photo ? "" : " featured-suite--text-only"}`}
      aria-label="Featured suites"
      aria-roledescription="carousel"
    >
      <div className="featured-suite-visual">
        {photo && (
          <figure
            className="featured-suite-photo"
            style={{ objectPosition: photo.position }}
            onTouchStart={startSwipe}
            onTouchEnd={endSwipe}
            onTouchCancel={() => {
              touchStart.current = null;
            }}
          >
            <ResponsiveImage {...photo.image} />
          </figure>
        )}
        {suites.length > 1 && (
          <div
            className="featured-suite-controls"
            role="group"
            aria-label="Featured suite controls"
          >
            <button
              type="button"
              className="featured-suite-step featured-suite-prev"
              aria-label="Previous suite"
              onClick={() => advance(-1)}
            >
              <ArrowLeft size={21} aria-hidden="true" />
            </button>
            <div
              className="featured-suite-pagination"
              role="group"
              aria-label="Select a suite"
            >
              {suites.map(({ slug, name }, index) => (
                <button
                  type="button"
                  key={slug}
                  aria-label={`Show ${name}`}
                  aria-current={activeIndex === index ? "true" : undefined}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
            <button
              type="button"
              className="featured-suite-step featured-suite-next"
              aria-label="Next suite"
              onClick={() => advance(1)}
            >
              <ArrowRight size={21} aria-hidden="true" />
            </button>
          </div>
        )}
      </div>
      <div className="featured-suite-info">
        <div className="featured-suite-copy">
          <p className="featured-suite-eyebrow">Featured Suite</p>
          <h2>{suite.name}</h2>
          <div className="featured-suite-divider" aria-hidden="true" />
          {description && (
            <p className="featured-suite-description">
              {__SHOW_PREVIEW_CONTENT__ && provisional && (
                <span className="sr-only">Provisional design copy. </span>
              )}
              {description}
            </p>
          )}
          <Link
            className="featured-suite-link"
            to={suitePath(suite.slug)}
            aria-label={`View Suite: ${suite.name}`}
          >
            {en.viewSuite} <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </div>
      <p className="sr-only" role="status" aria-atomic="true">
        {suite.name}, slide {activeIndex + 1} of {suites.length}
      </p>
    </section>
  );
}
