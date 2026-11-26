import { bannerPhoto, heroPhoto } from "../assets/images/homepage";
import { BookingLink } from "../booking/BookingLink";
import { BookingSearch } from "../booking/BookingSearch";
import { HomeBookingBanner } from "../booking/HomeBookingBanner";
import { property } from "../config/site";
import { FeaturedSuiteCarousel } from "../suites/FeaturedSuiteCarousel";
import { listFeaturedSuites } from "../services/suites";
import type { ImageAsset } from "../types/content";
import { Metadata, Section } from "../ui/Content";
import { ResponsiveImage } from "../ui/ResponsiveImage";
import { HomeDiscovery } from "./HomeDiscovery";
import "../styles/home-photography.css";
import "../styles/home-desktop.css";
import "../styles/home-mobile.css";
import "../styles/home-booking-banner.css";

function HomepagePhoto({
  image,
  className,
  priority,
}: {
  image: ImageAsset;
  className: string;
  priority?: boolean;
}) {
  return (
    <figure className={className}>
      <ResponsiveImage {...image} priority={priority} />
    </figure>
  );
}

export function HomePage() {
  const { home, location } = property;

  return (
    <>
      <Metadata description={property.brand.description} />
      <Section
        className={`home-panel home-intro${heroPhoto ? " home-intro--photographed" : ""}`}
        labelledBy="home-title"
      >
        <div className="home-intro-layout">
          <div className="home-intro-copy">
            <h1 id="home-title">
              <span>{home.headline[0]}</span>
              <br /> <span>{home.headline[1]}</span>
            </h1>
            <div className="short-rule" aria-hidden="true" />
            <p className="home-verified-copy">
              {location ? `${home.description} ` : home.description}
              {location && (
                <>
                  {location.city},{" "}
                  <span className="home-location-region">
                    {location.region}
                    <span className="home-location-country">
                      , {location.country}
                    </span>
                    .
                  </span>
                </>
              )}
            </p>
            {home.mobileDescription && (
              <p className="home-mobile-ocean-copy">
                {home.mobileDescription}
                {location && (
                  <>
                    <br /> in {location.city}, {location.region}.
                  </>
                )}
              </p>
            )}
          </div>
          {heroPhoto && (
            <HomepagePhoto
              image={heroPhoto}
              className="home-hero-photo"
              priority
            />
          )}
          <BookingSearch />
          <div className="home-intro-action">
            <BookingLink />
          </div>
        </div>
      </Section>
      <FeaturedSuiteCarousel
        suites={listFeaturedSuites()}
        initialId={property.initialFeaturedSuiteId}
      />
      <HomeDiscovery />
      <HomeBookingBanner image={bannerPhoto} />
    </>
  );
}
