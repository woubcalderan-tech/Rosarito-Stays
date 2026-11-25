import { homepagePhotos } from "../assets/images/homepage";
import { BookingLink } from "../booking/BookingLink";
import { BookingSearch } from "../booking/BookingSearch";
import { HomeBookingBanner } from "../booking/HomeBookingBanner";
import { site } from "../config/site";
import { featuredSuiteSlug } from "../data/suites";
import { FeaturedSuiteCarousel } from "../suites/FeaturedSuiteCarousel";
import { listSuites } from "../services/suites";
import type { ImageAsset } from "../types/content";
import { Metadata, Section } from "../ui/Content";
import { ResponsiveImage } from "../ui/ResponsiveImage";
import { HomeDiscovery } from "./HomeDiscovery";
import "../styles/home-photography.css";
import "../styles/home-desktop.css";
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
      <figcaption className="home-photo-credit">
        Sample photo from Las Olas Grand
      </figcaption>
    </figure>
  );
}

export function HomePage() {
  const photos = homepagePhotos;

  return (
    <>
      <Metadata description={`Explore vacation suites in ${site.location}.`} />
      <Section
        className={`home-panel home-intro${photos ? " home-intro--photographed" : ""}`}
        labelledBy="home-title"
      >
        <div className="home-intro-layout">
          <div className="home-intro-copy">
            <h1 id="home-title">
              <span>Stay somewhere</span>
              <br /> <span>remembered.</span>
            </h1>
            <div className="short-rule" aria-hidden="true" />
            <p>
              Vacation suites in {site.city},{" "}
              <span className="home-location-region">
                {site.region}
                <span className="home-location-country">, {site.country}</span>.
              </span>
            </p>
          </div>
          {photos && (
            <HomepagePhoto
              image={photos.hero}
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
        suites={listSuites()}
        initialSlug={featuredSuiteSlug}
        samples={photos?.featured}
      />
      <HomeDiscovery images={photos?.discovery} />
      <HomeBookingBanner />
    </>
  );
}
