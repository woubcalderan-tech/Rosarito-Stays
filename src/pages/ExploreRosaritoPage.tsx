import { ArrowRight, Check, MapPin } from "lucide-react";
import { useId, useRef, useState, useSyncExternalStore } from "react";
import type { CSSProperties, Ref } from "react";
import wave from "../assets/brand/coastal-wave.svg";
import { propertyImage } from "../assets/images/homepage";
import { CompactBookingBanner } from "../booking/CompactBookingBanner";
import type {
  DestinationAttraction,
  DestinationGuide,
} from "../config/property";
import { property } from "../config/site";
import { categoryIcons } from "../maps/DestinationPopup";
import { IllustrativeMap } from "../maps/IllustrativeMap";
import type { IllustrativeMapHandle } from "../maps/IllustrativeMap";
import { RosaritoBackdrop } from "../maps/RosaritoBackdrop";
import { Metadata } from "../ui/Content";
import { ResponsiveImage } from "../ui/ResponsiveImage";
import { NotFoundPage } from "./Pages";
import "../styles/explore-rosarito.css";

const mobileGuideQuery = "(width < 48rem)";

function subscribeToMobileGuide(onChange: () => void) {
  const query = window.matchMedia(mobileGuideQuery);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

function isMobileGuide() {
  return window.matchMedia(mobileGuideQuery).matches;
}

function scrollForReview(element: HTMLElement) {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  element.scrollIntoView({
    block: "start",
    behavior: reduce ? "instant" : "smooth",
  });
}

function AttractionCard({
  attraction,
  selected,
  expanded,
  wide,
  onToggle,
  onViewMap,
  ref,
}: {
  attraction: DestinationAttraction;
  selected: boolean;
  expanded: boolean;
  wide: boolean;
  onToggle: () => void;
  onViewMap: () => void;
  ref?: Ref<HTMLElement>;
}) {
  const id = useId();
  const Icon = categoryIcons[attraction.categoryIcon];
  const sizes =
    "(width < 48rem) 92vw, (width < 64rem) 44vw, " +
    (wide ? "min(47vw, 52rem)" : "min(31vw, 35rem)");

  return (
    <article
      ref={ref}
      className="explore-card"
      data-selected={selected}
      data-attraction={attraction.id}
      aria-labelledby={id + "-name"}
    >
      <ResponsiveImage
        {...propertyImage(attraction.photo, sizes)}
        position={attraction.cardPhotoPosition ?? attraction.photo.position}
      />
      <div className="explore-card-copy">
        <h3 id={id + "-name"} tabIndex={-1}>
          {attraction.name}
        </h3>
        {selected && <span className="sr-only">Selected on the map</span>}
        <p className="explore-card-category">
          <Icon aria-hidden="true" />
          {attraction.category}
        </p>
        <p>{attraction.description}</p>
        {!!attraction.highlights.length && (
          <ul className="explore-card-highlights">
            {attraction.highlights.map((text) => (
              <li key={text}>
                <Check aria-hidden="true" />
                {text}
              </li>
            ))}
          </ul>
        )}
        <button
          type="button"
          className="action action--secondary explore-card-toggle"
          aria-expanded={expanded}
          aria-controls={id + "-more"}
          onClick={onToggle}
        >
          {expanded ? "Show Less" : "Explore More"}{" "}
          <ArrowRight aria-hidden="true" />
        </button>
        <div className="explore-card-more" id={id + "-more"} hidden={!expanded}>
          {attraction.extendedDescription && (
            <p>{attraction.extendedDescription}</p>
          )}
          <button
            type="button"
            className="action action--primary"
            onClick={onViewMap}
          >
            <MapPin aria-hidden="true" /> View on Map
          </button>
        </div>
      </div>
    </article>
  );
}

function DestinationGuidePage({ guide }: { guide: DestinationGuide }) {
  const mobile = useSyncExternalStore(subscribeToMobileGuide, isMobileGuide);
  const defaultSelectedId = mobile ? null : guide.map.defaultAttractionId;
  const [selection, setSelectedId] = useState<string | null>();
  // A cleared selection is explicit. Only the untouched map follows the breakpoint.
  const selectedId = selection === undefined ? defaultSelectedId : selection;
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const map = useRef<IllustrativeMapHandle>(null);
  const mapSection = useRef<HTMLElement>(null);
  const cards = useRef(new Map<string, HTMLElement>());
  const attractions = [...guide.attractions].sort((a, b) => a.order - b.order);
  const { intro, attractionsSection, bookingBanner } = guide;
  const heroCrop = {
    "--explore-hero-position": intro.hero.position,
    "--explore-mobile-hero-position": intro.mobileHeroPosition,
  } as CSSProperties;

  function visitCard(id: string) {
    const card = cards.current.get(id);
    if (!card) return;
    card.querySelector("h3")?.focus({ preventScroll: true });
    scrollForReview(card);
  }

  function visitMap(id: string) {
    if (mapSection.current) scrollForReview(mapSection.current);
    map.current?.focusDestination(id, { preventScroll: true });
  }

  return (
    <div className="explore-page">
      <Metadata title={intro.heading} description={intro.description} />
      <section
        className="explore-hero"
        aria-labelledby="explore-title"
        style={heroCrop}
      >
        <ResponsiveImage {...propertyImage(intro.hero, "100vw")} priority />
        <div className="explore-hero-copy">
          <p className="explore-eyebrow">{intro.eyebrow}</p>
          <h1 id="explore-title">{intro.heading}</h1>
          <p className="explore-hero-description">{intro.description}</p>
        </div>
      </section>
      <section
        ref={mapSection}
        className="explore-map-section"
        aria-label="Explore the destination map"
      >
        <IllustrativeMap
          ref={map}
          attractions={attractions}
          settings={guide.map}
          selectedId={selectedId}
          defaultSelectedId={defaultSelectedId}
          onSelectionChange={setSelectedId}
          onViewAttraction={visitCard}
          backdrop={<RosaritoBackdrop city={property.location?.city} />}
          brandMark={wave}
          photographyDisclosure={guide.photographyDisclosure}
          resolveImage={propertyImage}
        />
      </section>
      {!!attractions.length && (
        <section
          className="explore-attractions"
          aria-labelledby="explore-attractions-title"
        >
          <header className="explore-section-copy">
            <p className="explore-eyebrow">{attractionsSection.eyebrow}</p>
            <h2 id="explore-attractions-title">{attractionsSection.heading}</h2>
            <p>{attractionsSection.description}</p>
          </header>
          <div className="explore-grid" data-five={attractions.length === 5}>
            {attractions.map((attraction, index) => (
              <AttractionCard
                key={attraction.id}
                ref={(card) => {
                  if (card) cards.current.set(attraction.id, card);
                  else cards.current.delete(attraction.id);
                }}
                attraction={attraction}
                selected={selectedId === attraction.id}
                expanded={expandedId === attraction.id}
                wide={attractions.length === 5 && index >= 3}
                onToggle={() =>
                  setExpandedId(
                    expandedId === attraction.id ? null : attraction.id,
                  )
                }
                onViewMap={() => visitMap(attraction.id)}
              />
            ))}
          </div>
          <p className="explore-photo-disclosure">
            {guide.photographyDisclosure}
            {guide.visitorInformationDisclosure &&
              " " + guide.visitorInformationDisclosure}
          </p>
        </section>
      )}
      <CompactBookingBanner
        heading={bookingBanner.heading}
        description={bookingBanner.description}
        photo={
          bookingBanner.photo && propertyImage(bookingBanner.photo, "100vw")
        }
        to={bookingBanner.to}
        actionLabel={bookingBanner.actionLabel}
      />
    </div>
  );
}

export function ExploreRosaritoPage() {
  const guide = property.destinationGuide;
  return guide ? <DestinationGuidePage guide={guide} /> : <NotFoundPage />;
}
