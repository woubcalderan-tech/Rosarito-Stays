import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { paths } from "../config/site";
import { en } from "../localization/en";

import type { ImageAsset } from "../types/content";
import { ResponsiveImage } from "../ui/ResponsiveImage";

export function HomeBookingBanner({ image }: { image?: ImageAsset }) {
  return (
    <section className="home-booking-banner" aria-labelledby="home-end-title">
      {image && (
        <div className="home-booking-banner-photo" aria-hidden="true">
          <ResponsiveImage {...image} />
        </div>
      )}
      <div className="home-booking-banner-content">
        <p className="home-booking-banner-eyebrow">Plan Your Baja Escape</p>
        <h2 id="home-end-title">Book Your Rosarito Stay</h2>
        <p>
          Coastal comfort, local charm, and a welcoming home base for your time
          in Baja.
        </p>
        <Link className="home-booking-banner-action" to={paths.booking}>
          {en.booking} <ArrowRight size={15} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
