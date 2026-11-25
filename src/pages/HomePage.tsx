import { homepagePhotos } from "../assets/images/homepage";
import { BookingLink } from "../booking/BookingLink";
import { paths, site, suitePath } from "../config/site";
import { featuredSuiteSlug } from "../data/suites";
import { en } from "../localization/en";
import { getSuite } from "../services/suites";
import type { ImageAsset } from "../types/content";
import { ActionLink, Metadata, Section } from "../ui/Content";
import { ResponsiveImage } from "../ui/ResponsiveImage";
import "../styles/home-photography.css";

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
              Stay somewhere
              <br /> remembered.
            </h1>
            <div className="short-rule" aria-hidden="true" />
            <p>Vacation suites in {site.location}.</p>
          </div>
          {photos && (
            <HomepagePhoto
              image={photos.hero}
              className="home-hero-photo"
              priority
            />
          )}
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
      <Section
        className={`home-panel home-end${photos ? " home-end--photographed" : ""}`}
        labelledBy="home-end-title"
      >
        {photos && (
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
        )}
        <div
          className={
            photos ? "home-closing home-closing--photographed" : "home-closing"
          }
        >
          <div className="home-closing-copy">
            <h2 id="home-end-title">Book your Rosarito stay</h2>
            <BookingLink variant="secondary" />
          </div>
          {photos && (
            <HomepagePhoto
              image={photos.closing}
              className="home-closing-photo"
            />
          )}
        </div>
      </Section>
    </>
  );
}
