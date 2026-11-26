import { BedDouble, MapPin, Trees, UsersRound, Waves } from "lucide-react";
import { propertyImage } from "../assets/images/homepage";
import { CompactBookingBanner } from "../booking/CompactBookingBanner";
import { property } from "../config/site";
import { en } from "../localization/en";
import { listSuites } from "../services/suites";
import { SuiteCard } from "../suites/SuiteCard";
import { Metadata } from "../ui/Content";
import { ResponsiveImage } from "../ui/ResponsiveImage";
import "../styles/accommodations.css";

// The mobile picture source keeps the hidden desktop request out of the network.
const mobileHeroPlaceholder = {
  srcSet: "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",
};

export function AccommodationsPage() {
  const content = property.accommodations;
  const suites = listSuites();
  const capacity = Math.max(
    0,
    ...suites.map(({ maximumGuests }) => maximumGuests ?? 0),
  );
  const benefits = [
    { id: "suites", label: content?.benefits?.privateSuites, Icon: BedDouble },
    {
      id: "capacity",
      label: capacity
        ? content?.benefits?.capacity?.replace("{guests}", String(capacity))
        : undefined,
      Icon: UsersRound,
    },
    { id: "ocean", label: content?.benefits?.ocean, Icon: Waves },
    { id: "outdoor", label: content?.benefits?.outdoor, Icon: Trees },
    { id: "location", label: content?.benefits?.location, Icon: MapPin },
  ].filter(({ label }) => label);
  const hero =
    content?.hero && propertyImage(content.hero, "(width < 48rem) 94vw, 69vw");
  const banner = content?.bookingBanner;

  return (
    <div className="accommodations">
      <Metadata
        title={en.accommodations}
        description={
          content?.introduction ??
          `Browse the suites at ${property.brand.name}.`
        }
      />
      <section className="accommodations-hero" aria-labelledby="listing-title">
        {hero && (
          <div className="accommodations-hero-photo">
            <ResponsiveImage
              {...hero}
              mobile={mobileHeroPlaceholder}
              priority
            />
          </div>
        )}
        <div className="accommodations-hero-copy">
          <p className="eyebrow">{en.accommodations}</p>
          <h1 id="listing-title">{content?.heading ?? "Find your stay"}</h1>
          <div className="short-rule" aria-hidden="true" />
          {content?.introduction && (
            <p className="accommodations-intro">{content.introduction}</p>
          )}
        </div>
      </section>
      {benefits.length > 0 && (
        <ul className="accommodations-benefits" aria-label="Property benefits">
          {benefits.map(({ id, label, Icon }) => (
            <li key={id}>
              <Icon aria-hidden="true" /> {label}
            </li>
          ))}
        </ul>
      )}
      <section className="accommodations-list" aria-label="Suites">
        {suites.length ? (
          <div className="accommodations-grid">
            {suites.map((suite) => (
              <SuiteCard key={suite.id} suite={suite} sharedHeroPhoto={hero} />
            ))}
          </div>
        ) : (
          <p>No suites are listed yet.</p>
        )}
      </section>
      {banner && (
        <CompactBookingBanner
          heading={banner.heading}
          description={banner.description}
          photo={banner.photo && propertyImage(banner.photo, "100vw")}
        />
      )}
    </div>
  );
}
