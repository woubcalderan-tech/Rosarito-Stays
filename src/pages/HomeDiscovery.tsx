import { ArrowRight, House, Utensils } from "lucide-react";
import { Link } from "react-router";
import {
  discoveryCards,
  provisionalDiscoveryDescriptions,
} from "../data/home-discovery";
import type { DiscoveryCardId } from "../data/home-discovery";
import type { ImageAsset } from "../types/content";
import { ResponsiveImage } from "../ui/ResponsiveImage";
import "../styles/home-discovery.css";

function DiscoveryIcon({ id }: { id: DiscoveryCardId }) {
  if (id === "explore")
    return (
      <span
        className="discovery-icon discovery-icon--wave"
        aria-hidden="true"
      />
    );
  const Icon = id === "property" ? House : Utensils;
  return (
    <Icon className="discovery-icon" strokeWidth={1.65} aria-hidden="true" />
  );
}

export function HomeDiscovery({
  images,
}: {
  images?: Partial<Record<DiscoveryCardId, ImageAsset>>;
}) {
  return (
    <section
      className={`home-discovery${images ? "" : " home-discovery--text-only"}`}
      aria-label="Explore the area and property"
    >
      <div className="discovery-grid">
        {discoveryCards.map(({ id, heading, action, destination }) => {
          const image = images?.[id];
          const mobileImage = id === "property";
          const description = provisionalDiscoveryDescriptions[id];
          const actionContent = (
            <>
              <span>{action}</span>
              <ArrowRight size={17} aria-hidden="true" />
            </>
          );

          return (
            <article
              className={`discovery-card discovery-card--${id}${image && !mobileImage ? " discovery-card--photographed" : ""}`}
              key={id}
            >
              {image && (
                <figure
                  className={
                    mobileImage
                      ? "discovery-photo discovery-photo--mobile-only"
                      : "discovery-photo"
                  }
                >
                  <ResponsiveImage {...image} />
                  <figcaption>
                    <span aria-hidden="true">Sample</span>
                    <span className="sr-only">
                      Sample photo from Las Olas Grand.
                    </span>
                  </figcaption>
                </figure>
              )}
              <div className="discovery-card-body">
                <div className="discovery-card-heading">
                  <DiscoveryIcon id={id} />
                  <h2>{heading}</h2>
                </div>
                {description && (
                  <p className="discovery-description">{description}</p>
                )}
                {destination.to ? (
                  <Link
                    className="discovery-action"
                    to={destination.to}
                    aria-label={action}
                  >
                    {actionContent}
                  </Link>
                ) : (
                  <div className="discovery-pending">
                    <span className="discovery-action">{actionContent}</span>
                    <small>Coming soon</small>
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>
      {images && (
        <p className="discovery-attribution">
          Sample photos from Las Olas Grand
        </p>
      )}
    </section>
  );
}
