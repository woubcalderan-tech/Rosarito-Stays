import {
  ArrowRight,
  CookingPot,
  Fish,
  UtensilsCrossed,
  WavesHorizontal,
} from "lucide-react";
import { Link } from "react-router";
import { propertyImage } from "../assets/images/homepage";
import { CompactBookingBanner } from "../booking/CompactBookingBanner";
import type { DiningExperience, DiningHighlightIcon } from "../config/property";
import { property } from "../config/site";
import { Metadata } from "../ui/Content";
import { ResponsiveImage } from "../ui/ResponsiveImage";
import { NotFoundPage } from "./Pages";
import "../styles/dining.css";

const culinaryIcons = {
  fish: Fish,
  "utensils-crossed": UtensilsCrossed,
  "waves-horizontal": WavesHorizontal,
  "cooking-pot": CookingPot,
} satisfies Record<DiningHighlightIcon, typeof Fish>;

// The 3:1 hero fills a taller frame on phones, so its cropped image is wider than the viewport.
const heroPhotoSizes =
  "(width < 22rem) 48rem, (width < 48rem) clamp(39rem, 150vw, 54rem), 100vw";
const editorialPhotoSizes =
  "(width < 48rem) calc(100vw - 2rem), min(56vw, 65rem)";
const cardPhotoSizes =
  "(width < 22rem) calc(100vw - 2rem), (width < 48rem) calc(47vw - 1rem), " +
  "(width < 64rem) 49vw, min(24vw, 28rem)";

function DiningExperienceCard({
  experience,
  featured = false,
  disclosure,
}: {
  experience: DiningExperience;
  featured?: boolean;
  disclosure?: string;
}) {
  const headingId = `dining-${experience.id}`;
  return (
    <article
      className={`dining-experience${featured ? " dining-experience--featured" : ""}`}
      aria-labelledby={headingId}
    >
      <ResponsiveImage
        {...propertyImage(
          experience.photo,
          featured ? editorialPhotoSizes : cardPhotoSizes,
        )}
        position={experience.photo.position}
      />
      <div className="dining-experience-copy">
        <p className="dining-eyebrow">{experience.category}</p>
        <h3 id={headingId}>{experience.heading}</h3>
        <p>{experience.description}</p>
        <ul className="dining-experience-highlights">
          {experience.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
        {disclosure && <p className="dining-disclosure">{disclosure}</p>}
      </div>
    </article>
  );
}

export function DiningPage() {
  const dining = property.dining;
  if (!dining) return <NotFoundPage />;

  const { hero, mobileIntro, privateSuiteDining, bookingBanner } = dining;
  return (
    <div className="dining-page">
      <Metadata title={hero.heading} description={hero.description} />
      <section className="dining-hero" aria-labelledby="dining-title">
        <ResponsiveImage
          {...propertyImage(hero.photo, heroPhotoSizes)}
          position={hero.photo.position}
          priority
        />
        <div className="dining-hero-copy">
          <p className="dining-eyebrow">{hero.eyebrow}</p>
          <h1 id="dining-title">{hero.heading}</h1>
          <p className="dining-hero-description">{hero.description}</p>
        </div>
      </section>

      <div className="dining-content">
        <section className="dining-editorial">
          <h2 className="dining-eyebrow dining-ruled dining-editorial-heading">
            {dining.editorialHeading}
          </h2>
          <div className="dining-mobile-intro">
            <p className="dining-eyebrow dining-ruled">{mobileIntro.eyebrow}</p>
            <h2>{mobileIntro.heading}</h2>
            <p>{mobileIntro.description}</p>
            <ul className="dining-intro-highlights">
              {mobileIntro.highlights.map(({ icon, label }) => {
                const Icon = culinaryIcons[icon];
                return (
                  <li key={label}>
                    <Icon aria-hidden="true" />
                    {label}
                  </li>
                );
              })}
            </ul>
          </div>
          <DiningExperienceCard
            experience={dining.featuredExperience}
            featured
            disclosure={dining.disclosure}
          />
          <div className="dining-grid">
            {dining.supportingExperiences.map((experience) => (
              <DiningExperienceCard
                key={experience.id}
                experience={experience}
              />
            ))}
          </div>
        </section>

        <section className="dining-private" aria-labelledby="dining-private">
          <div>
            <h2 id="dining-private">{privateSuiteDining.heading}</h2>
            <p>{privateSuiteDining.description}</p>
            <Link className="action action--primary" to={privateSuiteDining.to}>
              {privateSuiteDining.actionLabel}{" "}
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
          <ResponsiveImage
            {...propertyImage(privateSuiteDining.photo, editorialPhotoSizes)}
            position={privateSuiteDining.photo.position}
          />
        </section>
      </div>

      <CompactBookingBanner
        heading={bookingBanner.heading}
        description={bookingBanner.description}
        photo={propertyImage(bookingBanner.photo, "min(96vw, 112rem)")}
        to={bookingBanner.to}
        actionLabel={bookingBanner.actionLabel}
      />
    </div>
  );
}
