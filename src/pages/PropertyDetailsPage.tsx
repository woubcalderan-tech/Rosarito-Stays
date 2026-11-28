import {
  BedDouble,
  CalendarDays,
  CarFront,
  Check,
  CookingPot,
  Flame,
  Leaf,
  MapPin,
  ShieldCheck,
  ShoppingBag,
  Snowflake,
  Umbrella,
  Utensils,
  Waves,
  Wifi,
} from "lucide-react";
import type { ReactNode } from "react";
import wave from "../assets/brand/coastal-wave.svg";
import { propertyImage } from "../assets/images/homepage";
import { CompactBookingBanner } from "../booking/CompactBookingBanner";
import type {
  AmenityId,
  GuestPolicies,
  PropertyDetailsConfig,
  PropertyDetailsIcon,
  PropertyImage,
} from "../config/property";
import { property } from "../config/site";
import { useMobileViewport } from "../hooks/useMobileViewport";
import { Metadata } from "../ui/Content";
import { PolicyTime as Time } from "../ui/PolicyTime";
import { ResponsiveImage } from "../ui/ResponsiveImage";
import { PlaceholderPage } from "./Pages";
import "../styles/property-details.css";

const icons = {
  bed: BedDouble,
  pool: Waves,
  coast: Waves,
  wifi: Wifi,
  snowflake: Snowflake,
  kitchen: CookingPot,
  utensils: Utensils,
  umbrella: Umbrella,
  leaf: Leaf,
  grill: Flame,
  shopping: ShoppingBag,
  car: CarFront,
} satisfies Record<PropertyDetailsIcon, typeof Waves>;

function DetailsIcon({ name }: { name: PropertyDetailsIcon }) {
  const Icon = icons[name];
  return <Icon aria-hidden="true" strokeWidth={1.55} />;
}

function Photo({
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

function suiteLabel(label: string, id?: AmenityId, showSingleSuite = false) {
  if (!id) return label;
  const suites = property.suites.filter(
    ({ amenities, details }) =>
      amenities?.some((item) => item.id === id) ||
      details?.extraAmenities?.some((item) => item.id === id),
  );
  if (!suites.length) return undefined;
  const [firstSuite] = suites;
  if (showSingleSuite && firstSuite && suites.length === 1)
    return label + " — " + firstSuite.name;
  return (
    label +
    (suites.length === property.suites.length
      ? " in all suites"
      : " in selected suites")
  );
}

function PolicyCard({
  icon: Icon,
  heading,
  children,
}: {
  icon: typeof CalendarDays;
  heading: string;
  children: ReactNode;
}) {
  return (
    <section className="property-policy-card">
      <h3>
        <Icon aria-hidden="true" strokeWidth={1.55} />
        {heading}
      </h3>
      {children}
    </section>
  );
}

const smokingRules = {
  allowed: "Smoking is permitted.",
  "no-smoking-in-suites": "No smoking inside the suites.",
  prohibited: "No smoking on the property.",
};
const petRules = {
  allowed: "Pets are welcome.",
  "not-allowed": "No pets.",
  "on-request": "Pets by prior arrangement.",
};
const eventRules = {
  allowed: "Parties and events are permitted.",
  "not-allowed": "No parties or events.",
  "on-request": "Parties and events by prior arrangement.",
};
const parkingLabels = {
  "on-site": "On-site parking is available.",
  "off-site": "Off-site parking is available.",
  unavailable: "Parking is unavailable.",
};

function GuestInformation({
  guestPhoto,
  policies,
  mobile,
}: {
  guestPhoto: PropertyDetailsConfig["guestPhoto"];
  policies?: GuestPolicies;
  mobile: boolean;
}) {
  const suite = property.suites.find(({ id }) => id === guestPhoto?.suiteId);
  const {
    checkInFrom,
    checkOutBy,
    parking,
    quietHours,
    smoking,
    pets,
    registeredGuestsOnly,
    partiesAndEvents,
    additionalHouseRules,
  } = policies ?? {};
  const timing = Boolean(checkInFrom || checkOutBy);
  const rules = [
    smoking && smokingRules[smoking],
    pets && petRules[pets],
    quietHours && (
      <>
        Quiet hours: <Time value={quietHours.from} /> –{" "}
        <Time value={quietHours.until} />.
      </>
    ),
    registeredGuestsOnly && "Registered guests only.",
    partiesAndEvents && eventRules[partiesAndEvents],
    ...(additionalHouseRules ?? []),
  ].filter(Boolean);
  if (!guestPhoto && !timing && !parking && !rules.length) return null;

  return (
    <section
      className="property-guest"
      aria-labelledby="property-guest-heading"
    >
      <h2 id="property-guest-heading" className="sr-only">
        Guest Information
      </h2>
      {guestPhoto && (
        <figure className="property-guest-photo">
          <Photo photo={guestPhoto.photo} sizes="(width < 48rem) 92vw, 35vw" />
          <figcaption>
            Private suite interior{suite ? " · " + suite.name : ""}
          </figcaption>
        </figure>
      )}
      {(timing || parking) && (
        <div className="property-policy-stack">
          {mobile && (
            <div className="property-stay-heading">
              <p className="property-eyebrow">Stay Information</p>
              <h3>Good to Know</h3>
            </div>
          )}
          {mobile && checkInFrom && (
            <PolicyCard icon={CalendarDays} heading="Check-In">
              <p>
                From <Time value={checkInFrom} />
              </p>
            </PolicyCard>
          )}
          {mobile && checkOutBy && (
            <PolicyCard icon={CalendarDays} heading="Check-Out">
              <p>
                By <Time value={checkOutBy} />
              </p>
            </PolicyCard>
          )}
          {!mobile && timing && (
            <PolicyCard icon={CalendarDays} heading="Check-In & Check-Out">
              <dl className="property-arrival-times">
                {checkInFrom && (
                  <div>
                    <dt>Check-In</dt>
                    <dd>
                      From <Time value={checkInFrom} />
                    </dd>
                  </div>
                )}
                {checkOutBy && (
                  <div>
                    <dt>Check-Out</dt>
                    <dd>
                      By <Time value={checkOutBy} />
                    </dd>
                  </div>
                )}
              </dl>
            </PolicyCard>
          )}
          {parking && (
            <PolicyCard icon={CarFront} heading="Parking">
              <p>
                {parking.description || parkingLabels[parking.availability]}
              </p>
            </PolicyCard>
          )}
        </div>
      )}
      {!!rules.length && (
        <PolicyCard icon={ShieldCheck} heading="House Rules">
          <ul className="property-house-rules">
            {rules.map((rule, index) => (
              <li key={index}>
                <Check aria-hidden="true" />
                <span>{rule}</span>
              </li>
            ))}
          </ul>
        </PolicyCard>
      )}
    </section>
  );
}

export function PropertyDetailsPage() {
  const isMobile = useMobileViewport();
  const config = property.propertyDetails;
  if (!config) return <PlaceholderPage title="Property Details" />;

  const { hero, highlights, amenities, location, guestPhoto, bookingBanner } =
    config;
  const heading = hero?.heading ?? "Property Details";
  const mobile = isMobile ? config.mobile : undefined;
  const introHeading = mobile?.heading ?? heading;
  const introDescription = mobile?.description ?? hero?.description;
  const region = property.location;
  const area =
    location?.areaLabel ??
    (region && [region.city, region.region, region.country].join(", "));
  const details = amenities?.groups.flatMap(({ items }) =>
    items.flatMap((item) => {
      const label =
        item.scope === "suite"
          ? suiteLabel(
              item.label,
              item.suiteAmenityId,
              item.suiteAmenityId === "grill",
            )
          : item.status === "verified" || property.kind === "fictional-demo"
            ? item.label
            : undefined;
      return label ? [{ ...item, label }] : [];
    }),
  );
  const highlightItems = highlights?.flatMap((item) => {
    const label = suiteLabel(item.label, item.suiteAmenityId);
    return label ? [{ ...item, label }] : [];
  });
  const mobileAmenities = details?.filter(({ scope }) => scope === "suite");
  const displayedAmenities = isMobile ? mobileAmenities : details;
  const facilities = mobile?.facilities?.filter(({ amenityId }) =>
    details?.some(
      ({ id, scope }) => id === amenityId && scope === "common-area",
    ),
  );
  const destinations = !!location?.nearby?.length && (
    <ul className="property-destinations">
      {location.nearby.map(({ id, label, icon, travelMinutes, transport }) => (
        <li key={id}>
          <DetailsIcon name={icon ?? "coast"} />
          <span>
            {label}
            {travelMinutes != null && (
              <small>
                About {travelMinutes} min
                {transport && " · " + transport}
              </small>
            )}
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="property-details-page">
      <Metadata
        title={heading}
        description={hero?.description ?? property.brand.description}
      />
      <section
        className={
          hero?.photo ? "property-hero property-hero--photo" : "property-hero"
        }
        aria-labelledby="property-details-heading"
      >
        {hero?.photo && (
          <Photo
            photo={hero.photo}
            sizes="(width < 48rem) clamp(38rem, 147vw, 54rem), 100vw"
            priority
          />
        )}
        <div className="property-hero-copy">
          {isMobile ? (
            <p className="property-eyebrow">{heading}</p>
          ) : (
            <img src={wave} alt="" width="88" height="28" />
          )}
          <h1 id="property-details-heading">{introHeading}</h1>
          {introDescription && <p>{introDescription}</p>}
        </div>
      </section>
      {!isMobile && !!highlightItems?.length && (
        <section
          className="property-highlights"
          aria-label="Property highlights"
        >
          <ul>
            {highlightItems.map(({ id, icon, label }) => (
              <li key={id}>
                <DetailsIcon name={icon} />
                {label}
              </li>
            ))}
          </ul>
        </section>
      )}
      <div className="property-details-content">
        {(isMobile
          ? !!displayedAmenities?.length
          : amenities?.description ||
            amenities?.photo ||
            !!displayedAmenities?.length) && (
          <section
            className="property-amenities"
            aria-labelledby="property-amenities-heading"
          >
            <div>
              {isMobile && (
                <p className="property-eyebrow">Property Amenities</p>
              )}
              <h2 id="property-amenities-heading">
                {isMobile
                  ? "Comforts for a Relaxing Stay"
                  : "Amenities & Facilities"}
              </h2>
              {!isMobile && amenities?.description && (
                <p>{amenities.description}</p>
              )}
              {!!displayedAmenities?.length && (
                <ul className="property-amenity-list">
                  {displayedAmenities.map(({ id, icon, label }) => (
                    <li key={id}>
                      <DetailsIcon name={icon} />
                      {label}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {!isMobile && amenities?.photo && (
              <Photo
                photo={amenities.photo}
                sizes="(width < 48rem) 92vw, 50vw"
              />
            )}
          </section>
        )}
        {!!facilities?.length && (
          <section
            className="property-facilities"
            aria-labelledby="property-facilities-heading"
          >
            <div>
              <p className="property-eyebrow">On-Site Facilities</p>
              <h2 id="property-facilities-heading">On-Site Facilities</h2>
            </div>
            <ul>
              {facilities.map(({ amenityId, label, photo }) => (
                <li key={amenityId}>
                  <Photo photo={photo} sizes="(width < 22.5rem) 43vw, 29vw" />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </section>
        )}
        {location && (
          <section
            className="property-location"
            aria-labelledby="property-location-heading"
          >
            {location.illustrativePhoto && (
              <figure>
                <Photo
                  photo={location.illustrativePhoto}
                  sizes="(width < 23.75rem) 90vw, (width < 48rem) 41vw, 44vw"
                />
                <figcaption>Illustrative coastline</figcaption>
              </figure>
            )}
            <div className="property-location-copy">
              {isMobile && <p className="property-eyebrow">The Location</p>}
              <h2 id="property-location-heading">
                {mobile?.locationHeading ?? "The Location"}
              </h2>
              <p>{location.description}</p>
              {area && (
                <p className="property-area">
                  <MapPin aria-hidden="true" />
                  {area}
                </p>
              )}
            </div>
            {destinations}
          </section>
        )}
        <GuestInformation
          guestPhoto={isMobile ? undefined : guestPhoto}
          mobile={isMobile}
          policies={
            property.guestPolicies?.status === "verified" ||
            property.kind === "fictional-demo"
              ? property.guestPolicies
              : undefined
          }
        />
      </div>
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
