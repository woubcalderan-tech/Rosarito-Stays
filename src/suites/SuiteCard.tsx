import { ArrowRight, BedDouble, UserRound } from "lucide-react";
import { Link } from "react-router";
import { suitePath } from "../config/site";
import { en } from "../localization/en";
import type { ImageAsset, Suite } from "../types/content";
import { SuiteGallery } from "./SuiteGallery";

import { amenityIcons } from "./amenity-icons";

export function SuiteCard({
  suite,
  sharedHeroPhoto,
}: {
  suite: Suite;
  sharedHeroPhoto?: ImageAsset;
}) {
  const { name, slug, maximumGuests, bedrooms, summary, amenities, images } =
    suite;
  return (
    <article className="accommodations-card">
      {images && (
        <SuiteGallery
          name={name}
          images={images}
          sharedHeroPhoto={sharedHeroPhoto}
        />
      )}
      <div className="accommodations-card-copy">
        <div className="accommodations-card-heading">
          <h2>{name}</h2>
          {(maximumGuests !== undefined || bedrooms !== undefined) && (
            <ul className="accommodations-specs">
              {maximumGuests !== undefined && (
                <li>
                  <UserRound aria-hidden="true" /> Up to {maximumGuests}{" "}
                  {maximumGuests === 1 ? "Guest" : "Guests"}
                </li>
              )}
              {bedrooms !== undefined && (
                <li>
                  <BedDouble aria-hidden="true" /> {bedrooms}{" "}
                  {bedrooms === 1 ? "Bedroom" : "Bedrooms"}
                </li>
              )}
            </ul>
          )}
        </div>
        {summary && <p>{summary}</p>}
        <div className="accommodations-card-actions">
          {amenities?.length ? (
            <ul className="accommodations-amenities">
              {amenities.map(({ id, label }) => {
                const Icon = amenityIcons[id];
                return (
                  <li key={id}>
                    <Icon aria-hidden="true" /> {label}
                  </li>
                );
              })}
            </ul>
          ) : null}
          <Link
            className="action action--secondary accommodations-suite-link"
            to={suitePath(slug)}
            aria-label={`${en.viewSuite}: ${name}`}
          >
            {en.viewSuite} <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
