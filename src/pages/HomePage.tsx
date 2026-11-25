import { homepagePhotos } from "../assets/images/homepage";
import { BookingLink } from "../booking/BookingLink";
import { BookingSearch } from "../booking/BookingSearch";
import { HomeBookingBanner } from "../booking/HomeBookingBanner";
import { paths, site, suitePath } from "../config/site";
import { featuredSuiteSlug } from "../data/suites";
import { en } from "../localization/en";
import { getSuite } from "../services/suites";
import type { ImageAsset } from "../types/content";
import { ActionLink, Container, Metadata, Section } from "../ui/Content";
import { ResponsiveImage } from "../ui/ResponsiveImage";
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
  const featuredSuite = getSuite(featuredSuiteSlug);
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
      <Section className="home-panel home-feature" labelledBy="featured-title">
        <div className={photos ? "home-feature-layout" : undefined}>
          {photos && (
            <HomepagePhoto
              image={photos.featured}
              className="home-feature-photo"
            />
          )}
          <div>
            <p className="eyebrow">Featured Suite</p>
            <h2 id="featured-title">
              {featuredSuite?.name ?? en.accommodations}
            </h2>
            <ActionLink
              to={
                featuredSuite
                  ? suitePath(featuredSuite.slug)
                  : paths.accommodations
              }
              variant="secondary"
            >
              {featuredSuite ? en.viewSuite : en.accommodations}
            </ActionLink>
          </div>
        </div>
      </Section>
      {photos && (
        <div className="home-discovery">
          <Container>
            <figure className="home-scenes">
              <ul>
                {photos.scenes.map(({ label, image }) => (
                  <li key={label}>
                    <ResponsiveImage {...image} />
                    <span>{label}</span>
                  </li>
                ))}
              </ul>
              <figcaption className="home-photo-credit">
                Sample photos from Las Olas Grand
              </figcaption>
            </figure>
          </Container>
        </div>
      )}
      <HomeBookingBanner />
    </>
  );
}
