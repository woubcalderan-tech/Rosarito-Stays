import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { paths, property } from "../config/site";
import { en } from "../localization/en";

import type { ImageAsset } from "../types/content";
import { ResponsiveImage } from "../ui/ResponsiveImage";

export function HomeBookingBanner({ image }: { image?: ImageAsset }) {
  const { banner } = property.home;
  return (
    <section className="home-booking-banner" aria-labelledby="home-end-title">
      {image && (
        <div className="home-booking-banner-photo" aria-hidden="true">
          <ResponsiveImage {...image} />
        </div>
      )}
      <div className="home-booking-banner-content">
        <p className="home-booking-banner-eyebrow">{banner.eyebrow}</p>
        <h2 id="home-end-title">{banner.heading}</h2>
        <p>{banner.description}</p>
        <Link className="home-booking-banner-action" to={paths.booking}>
          {en.booking} <ArrowRight size={15} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
