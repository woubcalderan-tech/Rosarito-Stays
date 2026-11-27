import {
  ArrowRight,
  BedDouble,
  Leaf,
  MapPin,
  Sun,
  Utensils,
  Waves,
} from "lucide-react";
import { useState } from "react";
import wave from "../assets/brand/coastal-wave.svg";
import { propertyImage } from "../assets/images/homepage";
import { CompactBookingBanner } from "../booking/CompactBookingBanner";
import type {
  PropertyImage,
  ResidenceBenefit,
  ResidenceConfig,
  ResidenceGalleryCategory,
} from "../config/property";
import { property } from "../config/site";
import { Metadata } from "../ui/Content";
import { ResponsiveImage } from "../ui/ResponsiveImage";
import { PlaceholderPage } from "./Pages";
import "../styles/residence.css";

const benefitIcons = {
  waves: Waves,
  leaf: Leaf,
  sun: Sun,
  bed: BedDouble,
  utensils: Utensils,
  pin: MapPin,
};

const filters = [
  ["all", "All"],
  ["architecture", "Architecture"],
  ["outdoor-spaces", "Outdoor Spaces"],
  ["interiors", "Interiors"],
  ["ocean-views", "Ocean Views"],
] as const satisfies readonly (readonly [
  ResidenceGalleryCategory | "all",
  string,
])[];

function ResidenceImage({
  photo,
  sizes,
  priority,
}: {
  photo: PropertyImage;
  sizes: string;
  priority?: boolean;
}) {
  return (
    <ResponsiveImage
      {...propertyImage(photo, sizes)}
      position={photo.position}
      priority={priority}
    />
  );
}

function Benefits({ items }: { items: readonly ResidenceBenefit[] }) {
  return (
    <ul className="residence-benefits">
      {items.map(({ icon, label }) => {
        const Icon = benefitIcons[icon];
        return (
          <li key={label}>
            <Icon strokeWidth={1.45} aria-hidden="true" />
            <span>{label}</span>
          </li>
        );
      })}
    </ul>
  );
}

function ResidenceGallery({
  images,
}: {
  images: NonNullable<ResidenceConfig["gallery"]>;
}) {
  const [category, setCategory] = useState<ResidenceGalleryCategory | "all">(
    "all",
  );
  const visible =
    category === "all"
      ? images
      : images.filter(({ categories }) => categories.includes(category));
  const mosaic = category === "all" && images.length === 5;

  return (
    <section
      className="residence-gallery"
      id="residence-gallery"
      tabIndex={-1}
      aria-labelledby="residence-gallery-title"
    >
      <h2 id="residence-gallery-title">The Residence Gallery</h2>
      <div
        className="residence-filters"
        role="group"
        aria-label="Filter gallery by category"
      >
        {filters.map(
          ([id, label]) =>
            (id === "all" ||
              images.some(({ categories }) => categories.includes(id))) && (
              <button
                key={id}
                type="button"
                aria-pressed={category === id}
                onClick={() => setCategory(id)}
              >
                {label}
              </button>
            ),
        )}
      </div>
      <p className="sr-only" role="status">
        {visible.length} {visible.length === 1 ? "photograph" : "photographs"}
      </p>
      <div
        className={
          mosaic
            ? "residence-gallery-grid residence-mosaic"
            : "residence-gallery-grid"
        }
      >
        {visible.map(({ photo, scope, suiteId }, index) => {
          const suite = property.suites.find(({ id }) => id === suiteId);
          const desktopWidth = [33, 27, 31, 15, 16][index];
          const mobileWidth = index < 3 ? 44 : 22;
          const sizes = mosaic
            ? `(width < 48rem) ${mobileWidth}vw, (width < 64rem) 46vw, ${desktopWidth}vw`
            : `(width < 48rem) ${visible.length === 1 ? 88 : 44}vw, (width < 64rem) 46vw, 31vw`;
          return (
            <figure key={photo.id}>
              <ResidenceImage photo={photo} sizes={sizes} />
              {scope === "private-suite" && (
                <figcaption>
                  <span className="residence-caption-full">
                    Private suite interior
                    {suite && <span> · {suite.name}</span>}
                  </span>
                  <span className="residence-caption-short" aria-hidden="true">
                    Private suite
                  </span>
                </figcaption>
              )}
            </figure>
          );
        })}
      </div>
    </section>
  );
}

export function ResidencePage() {
  const residence = property.residence;
  if (!residence) return <PlaceholderPage title="The Residence" />;

  const {
    hero,
    heroCopy,
    architecture,
    architectureCopy,
    experience,
    experienceCopy,
    gallery,
    benefits,
    bookingBanner,
  } = residence;
  const heading = heroCopy?.heading ?? "The Residence";
  const hasGallery = Boolean(gallery?.length);

  return (
    <div className="residence-page">
      <Metadata
        title={heading}
        description={
          architectureCopy?.description ?? property.brand.description
        }
      />
      <section
        className={
          hero ? "residence-hero residence-hero-photo" : "residence-hero"
        }
        aria-labelledby="residence-heading"
      >
        {hero && <ResidenceImage photo={hero} sizes="100vw" priority />}
        <div className="residence-hero-copy">
          <img src={wave} alt="" width="64" height="28" />
          <h1 id="residence-heading">{heading}</h1>
          {heroCopy?.subtitle && <p>{heroCopy.subtitle}</p>}
        </div>
      </section>
      <div className="residence-content">
        {architectureCopy && (
          <section
            className="residence-editorial residence-architecture"
            aria-labelledby="residence-architecture-title"
          >
            {architecture && (
              <ResidenceImage
                photo={architecture}
                sizes="(width < 48rem) 86vw, 50vw"
              />
            )}
            <div className="residence-editorial-copy">
              {architectureCopy.eyebrow && (
                <p className="residence-eyebrow">{architectureCopy.eyebrow}</p>
              )}
              <h2 id="residence-architecture-title">
                {architectureCopy.heading}
              </h2>
              {architectureCopy.description && (
                <p>{architectureCopy.description}</p>
              )}
              {architectureCopy.actionLabel && hasGallery && (
                <a
                  className="action residence-gallery-action"
                  href="#residence-gallery"
                >
                  {architectureCopy.actionLabel}{" "}
                  <ArrowRight size={17} aria-hidden="true" />
                </a>
              )}
            </div>
          </section>
        )}
        {experienceCopy && (
          <section
            className="residence-editorial residence-experience"
            aria-labelledby="residence-experience-title"
          >
            {experience && (
              <ResidenceImage
                photo={experience}
                sizes="(width < 48rem) 86vw, 52vw"
              />
            )}
            <div className="residence-editorial-copy">
              {experienceCopy.eyebrow && (
                <p className="residence-eyebrow">{experienceCopy.eyebrow}</p>
              )}
              <h2 id="residence-experience-title">{experienceCopy.heading}</h2>
              {experienceCopy.description && (
                <p>{experienceCopy.description}</p>
              )}
              {!!experienceCopy.benefits?.length && (
                <Benefits items={experienceCopy.benefits} />
              )}
            </div>
          </section>
        )}
        {gallery && hasGallery && <ResidenceGallery images={gallery} />}
      </div>
      {!!benefits?.length && (
        <section
          className="residence-property-benefits"
          aria-label="Property benefits"
        >
          <Benefits items={benefits} />
        </section>
      )}
      {bookingBanner && (
        <CompactBookingBanner
          heading={bookingBanner.heading}
          description={bookingBanner.description}
          photo={
            bookingBanner.photo && propertyImage(bookingBanner.photo, "100vw")
          }
        />
      )}
    </div>
  );
}
