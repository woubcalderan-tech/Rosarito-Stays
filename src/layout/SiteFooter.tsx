import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";
import { Link } from "react-router";
import facebook from "../assets/brand/social/facebook.svg?inline";
import instagram from "../assets/brand/social/instagram.svg?inline";
import youtube from "../assets/brand/social/youtube.svg?inline";
import { navigation, paths, property } from "../config/site";
import { Brand } from "./Brand";
import { NavigationEntries } from "./NavigationEntries";
import "../styles/home-mobile-footer.css";

const socialChannels = [
  { id: "instagram", label: "Instagram", icon: instagram, size: 18 },
  { id: "facebook", label: "Facebook", icon: facebook, size: 18 },
  { id: "youtube", label: "YouTube", icon: youtube, size: 20 },
] as const;

export function SiteFooter({ home }: { home: boolean }) {
  const [expanded, setExpanded] = useState<string | null>(null);
  const id = useId();
  const social = property.contact?.social;
  const demo = property.kind === "fictional-demo";
  const visibleChannels = socialChannels.filter(
    ({ id }) => social?.[id] || demo,
  );
  return (
    <footer className={home ? "site-footer site-footer--home" : "site-footer"}>
      <div
        className={`footer-main${visibleChannels.length ? " footer-main--with-social" : ""}`}
      >
        <div className="footer-brand-area">
          <Brand footer />
        </div>
        <nav
          className="footer-nav"
          aria-label="Footer"
          onKeyDown={(event) => {
            if (event.key !== "Escape" || !expanded) return;
            const trigger =
              event.currentTarget.querySelector<HTMLButtonElement>(
                'button[aria-expanded="true"]',
              );
            if (!trigger?.offsetWidth) return;
            event.preventDefault();
            setExpanded(null);
            trigger.focus();
          }}
        >
          {navigation.map(({ label, entries }, index) => {
            const open = expanded === label;
            const panelId = `${id}-footer-panel-${index}`;
            return (
              <div className="footer-nav-group" key={label}>
                <p>{label}</p>
                {home && (
                  <button
                    className="footer-nav-toggle"
                    type="button"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setExpanded(open ? null : label)}
                  >
                    {label} <ChevronDown aria-hidden="true" />
                  </button>
                )}
                <ul
                  id={home ? panelId : undefined}
                  data-mobile-expanded={home ? open : undefined}
                >
                  <NavigationEntries entries={entries} />
                </ul>
              </div>
            );
          })}
        </nav>
        {visibleChannels.length > 0 && (
          <div
            className="footer-social"
            role="group"
            aria-label={social ? "Social links" : "Social links coming soon"}
          >
            {visibleChannels.map(({ id, label, icon, size }) => {
              const url = social?.[id];
              const image = (
                <img
                  key={id}
                  src={icon}
                  alt={label}
                  width={size}
                  height={size}
                />
              );
              return url ? (
                <a key={id} href={url}>
                  {image}
                </a>
              ) : (
                image
              );
            })}
          </div>
        )}
      </div>
      <nav className="footer-legal" aria-label="Legal">
        <Link to={paths.privacy}>Privacy Policy</Link>
        <Link to={paths.terms}>Terms &amp; Conditions</Link>
      </nav>
    </footer>
  );
}
