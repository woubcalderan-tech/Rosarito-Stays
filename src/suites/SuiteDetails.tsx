import {
  ArrowRight,
  Bath,
  BedDouble,
  CalendarDays,
  CarFront,
  Check,
  MapPin,
  Trees,
  UserRound,
} from "lucide-react";
import { Link } from "react-router";
import { propertyImage } from "../assets/images/homepage";
import { BookingSearch } from "../booking/BookingSearch";
import { useMobileViewport } from "../hooks/useMobileViewport";
import { CompactBookingBanner } from "../booking/CompactBookingBanner";
import { paths, property, suiteBookingPath } from "../config/site";
import { en } from "../localization/en";
import type { Suite } from "../types/content";
import { Metadata } from "../ui/Content";
import { ResponsiveImage } from "../ui/ResponsiveImage";
import { amenityIcons } from "./amenity-icons";
import { SuiteGallery } from "./SuiteGallery";
import "../styles/suite-details.css";

const benefitIcons = {
  location: MapPin,
  access: CarFront,
  comfort: Trees,
  stays: CalendarDays,
};

export function SuiteDetails({ suite }: { suite: Suite }) {
  const {
    name,
    slug,
    details,
    images,
    highlightPhotos,
    maximumGuests,
    bedrooms,
  } = suite;
  const mobile = useMobileViewport();
  const bookingUrl = suiteBookingPath(slug);
  const description = details?.description ?? suite.summary ?? en.pending;
  const bathrooms = details?.bathrooms;
  const amenities = [
    ...(suite.amenities ?? []),
    ...(details?.extraAmenities ?? []),
  ];
  const rate = details?.nightlyRate;
  const formattedRate =
    rate && Number.isFinite(rate.amount) && rate.amount > 0
      ? new Intl.NumberFormat(property.locale, {
          style: "currency",
          currency: rate.currency,
          currencyDisplay: "narrowSymbol",
          minimumFractionDigits: 0,
        }).format(rate.amount)
      : undefined;
  const highlights = details?.highlights;
  const features = highlights?.features ?? [];
  const benefits = property.suiteDetails?.benefits ?? [];
  const banner = property.suiteDetails?.bookingBanner;

  return (
    <div className="suite-details-page">
      <Metadata title={name} description={description} />
      <section
        className={`suite-detail-main${images?.length ? " suite-detail-main--with-gallery" : ""}`}
        aria-labelledby="suite-title"
      >
        {mobile && (
          <div className="suite-mobile-intro">
            <nav aria-label="Breadcrumb">
              <ol className="breadcrumbs suite-detail-breadcrumbs">
                <li>
                  <Link to={paths.home}>Home</Link>
                </li>
                <li>
                  <Link to={paths.accommodations}>Suites</Link>
                </li>
                <li aria-current="page">{name}</li>
              </ol>
            </nav>
            <h1 id="suite-title">{name}</h1>
            {suite.summary && <p>{suite.summary}</p>}
          </div>
        )}
        {images?.length ? (
          <SuiteGallery
            name={name}
            images={images}
            detail
            thumbnails={mobile}
          />
        ) : null}
        <div className="suite-detail-panel">
          {mobile ? (
            <div className="suite-mobile-detail-heading">
              <p>The suite</p>
              <h2>About your stay</h2>
            </div>
          ) : (
            <>
              <nav aria-label="Breadcrumb">
                <ol className="breadcrumbs suite-detail-breadcrumbs">
                  <li>
                    <Link to={paths.accommodations}>Suites</Link>
                  </li>
                  <li aria-current="page">{name}</li>
                </ol>
              </nav>
              <h1 id="suite-title">{name}</h1>
            </>
          )}

          {(maximumGuests !== undefined ||
            bedrooms !== undefined ||
            bathrooms !== undefined) && (
            <ul
              className="suite-detail-specs"
              aria-label="Suite specifications"
            >
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
              {bathrooms !== undefined && (
                <li>
                  <Bath aria-hidden="true" /> {bathrooms}{" "}
                  {bathrooms === 1 ? "Bathroom" : "Bathrooms"}
                </li>
              )}
            </ul>
          )}

          <p className="suite-detail-description">{description}</p>

          {mobile && amenities.length > 0 && (
            <h2 className="suite-mobile-amenities-heading">Suite Amenities</h2>
          )}
          {amenities.length > 0 && (
            <ul className="suite-detail-amenities" aria-label="Amenities">
              {amenities.map(({ id, label }) => {
                const Icon = amenityIcons[id];
                return (
                  <li key={id}>
                    <Icon aria-hidden="true" />
                    <span>{label}</span>
                  </li>
                );
              })}
            </ul>
          )}

          {!mobile && (
            <>
              <div className="suite-detail-availability">
                {rate && formattedRate && (
                  <div className="suite-detail-rate">
                    <CalendarDays aria-hidden="true" />
                    <div>
                      <span className="suite-detail-rate-label">From</span>
                      <strong>{formattedRate}</strong> {rate.currency} / night
                    </div>
                  </div>
                )}
                <Link className="suite-detail-check" to={bookingUrl}>
                  <CalendarDays aria-hidden="true" /> Check Availability
                </Link>
              </div>
              <p className="suite-detail-demo-note">
                {property.kind === "fictional-demo" && formattedRate
                  ? "Demo rate. "
                  : ""}
                Availability and booking are simulated.
              </p>
              <div className="suite-detail-actions">
                <Link className="action action--secondary" to={bookingUrl}>
                  <CalendarDays size={18} aria-hidden="true" /> View
                  Availability
                </Link>
                <Link className="action action--primary" to={bookingUrl}>
                  {en.booking} <ArrowRight size={19} aria-hidden="true" />
                </Link>
              </div>
            </>
          )}
        </div>
      </section>

      {mobile && (
        <section
          className="suite-mobile-booking"
          id="suite-booking"
          aria-labelledby="suite-booking-title"
          tabIndex={-1}
        >
          <h2 id="suite-booking-title">Check Availability</h2>
          {rate && formattedRate && (
            <p className="suite-mobile-rate">
              From <strong>{formattedRate}</strong> {rate.currency} / night
              {property.kind === "fictional-demo" && " · Demo rate"}
            </p>
          )}
          <p>Select your dates and guests to continue.</p>
          <BookingSearch suite={suite} />
          <p className="suite-detail-demo-note">
            Availability, reservations, and payments are simulated.
          </p>
        </section>
      )}

      {!mobile &&
        (highlights?.introduction ||
          features.length > 0 ||
          (highlightPhotos?.length ?? 0) > 0) && (
          <section
            className="suite-detail-highlights"
            aria-labelledby="suite-highlights-title"
          >
            <div className="suite-detail-highlights-copy">
              <h2 id="suite-highlights-title">Suite Highlights</h2>
              {highlights?.introduction && <p>{highlights.introduction}</p>}
              {features.length > 0 && (
                <ul>
                  {features.map((feature) => (
                    <li key={feature}>
                      <Check size={17} aria-hidden="true" /> {feature}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {highlightPhotos?.length ? (
              <div className="suite-detail-support">
                {highlightPhotos.map((photo) => (
                  <ResponsiveImage key={photo.src} {...photo} />
                ))}
              </div>
            ) : null}
          </section>
        )}
      {!mobile && benefits.length > 0 && (
        <ul className="suite-detail-benefits" aria-label="Property benefits">
          {benefits.map(({ id, heading, description }) => {
            const Icon = benefitIcons[id];
            return (
              <li key={id}>
                <Icon aria-hidden="true" />
                <div>
                  <strong>{heading}</strong>
                  <p>{description}</p>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      {!mobile && banner && (
        <CompactBookingBanner
          heading={banner.heading.replace("{suite}", name)}
          description={banner.description}
          photo={banner.photo && propertyImage(banner.photo, "100vw")}
          to={bookingUrl}
        />
      )}
    </div>
  );
}
