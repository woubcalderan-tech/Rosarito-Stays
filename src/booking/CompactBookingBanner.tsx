import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { paths } from "../config/site";
import { en } from "../localization/en";
import type { ImageAsset } from "../types/content";
import { ResponsiveImage } from "../ui/ResponsiveImage";

export function CompactBookingBanner({
  heading,
  description,
  photo,
  to = paths.booking,
}: {
  heading: string;
  description: string;
  photo?: ImageAsset;
  to?: string;
}) {
  return (
    <section
      className="compact-booking"
      aria-labelledby="compact-booking-heading"
    >
      {photo && (
        <div className="compact-booking-photo" aria-hidden="true">
          <ResponsiveImage {...photo} />
        </div>
      )}
      <div className="compact-booking-content">
        <h2 id="compact-booking-heading">{heading}</h2>
        <p>{description}</p>
        <Link className="action compact-booking-action" to={to}>
          {en.booking} <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
