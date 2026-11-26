import { ArrowRight, House, Utensils } from "lucide-react";
import { Link } from "react-router";
import { discoveryCards } from "../data/home-discovery";
import { propertyImage } from "../assets/images/homepage";
import type { DiscoveryCardId } from "../data/home-discovery";
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

const photographed = discoveryCards.some(({ photo }) => photo);

export function HomeDiscovery() {
  return (
    <section
      className={`home-discovery${photographed ? "" : " home-discovery--text-only"}`}
      aria-label="Explore the area and property"
    >
      <div className="discovery-grid">
        {discoveryCards.map(
          ({ id, heading, action, description, destination, photo }) => {
            const image =
              photo &&
              (id === "property"
                ? propertyImage(photo, "12vw", "31vw")
                : propertyImage(photo, "(width < 64rem) 32vw, 16vw", "32vw"));
            const actionContent = (
              <>
                <span>{action}</span>
                <ArrowRight size={17} aria-hidden="true" />
              </>
            );

            return (
              <article
                className={`discovery-card discovery-card--${id}${image ? " discovery-card--photographed" : ""}`}
                key={id}
              >
                {image && (
                  <figure className="discovery-photo">
                    <ResponsiveImage {...image} />
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
          },
        )}
      </div>
    </section>
  );
}
