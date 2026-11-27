import {
  Anchor,
  ArrowRight,
  Check,
  Fish,
  Mountain,
  Umbrella,
  Utensils,
  X,
} from "lucide-react";
import { Link } from "react-router";
import type {
  DestinationAttraction,
  FictionalPropertyMarker,
  PropertyImage,
} from "../config/property";
import type { ImageAsset } from "../types/content";
import { ResponsiveImage } from "../ui/ResponsiveImage";

export const categoryIcons = {
  beach: Umbrella,
  pier: Anchor,
  dining: Utensils,
  fishing: Fish,
  mountain: Mountain,
} satisfies Record<DestinationAttraction["categoryIcon"], typeof Anchor>;

export type MapDestination =
  | { kind: "attraction"; entry: DestinationAttraction }
  | { kind: "property"; entry: FictionalPropertyMarker };

export type MapImageResolver = (
  photo: PropertyImage,
  sizes: string,
) => ImageAsset;

export function DestinationPopup({
  destination,
  headingId,
  photoDisclosure,
  resolveImage,
  onClose,
  onViewAttraction,
}: {
  destination: MapDestination;
  headingId: string;
  photoDisclosure: string;
  resolveImage: MapImageResolver;
  onClose: () => void;
  onViewAttraction: (id: string) => void;
}) {
  const { entry } = destination;
  const photo = entry.photo;
  const category =
    destination.kind === "attraction"
      ? destination.entry.category
      : "Fictional property";
  const Icon =
    destination.kind === "attraction"
      ? categoryIcons[destination.entry.categoryIcon]
      : undefined;
  const highlights = entry.highlights ?? [];
  const showDisclosure =
    destination.kind === "property" ||
    destination.entry.photo.depiction === "ai-generated-illustration";

  return (
    <section className="guide-map-popup" aria-labelledby={headingId}>
      <button
        type="button"
        className="guide-map-close"
        onClick={onClose}
        aria-label="Close destination information"
      >
        <X aria-hidden="true" />
      </button>
      {photo && (
        <figure>
          <ResponsiveImage
            key={photo.id}
            {...resolveImage(
              photo,
              "(width < 56rem) min(86vw, 34rem), min(28vw, 23rem)",
            )}
            position={photo.position}
          />
          {showDisclosure && <figcaption>{photoDisclosure}</figcaption>}
        </figure>
      )}
      <div className="guide-map-popup-copy">
        <h2 id={headingId}>{entry.name}</h2>
        <p className="guide-map-category">
          {Icon && <Icon aria-hidden="true" />}
          {category}
        </p>
        <p>{entry.description}</p>
        {destination.kind === "property" && (
          <p className="guide-map-location-note">
            The marker represents a fictional location.
          </p>
        )}
        {!!highlights.length && (
          <ul>
            {highlights.map((text) => (
              <li key={text}>
                <Check aria-hidden="true" />
                {text}
              </li>
            ))}
          </ul>
        )}
        {destination.kind === "attraction" ? (
          <button
            type="button"
            className="action action--primary"
            onClick={() => onViewAttraction(entry.id)}
          >
            View Attraction <ArrowRight aria-hidden="true" />
          </button>
        ) : (
          <Link className="action action--primary" to={destination.entry.to}>
            View the Residence <ArrowRight aria-hidden="true" />
          </Link>
        )}
      </div>
    </section>
  );
}
