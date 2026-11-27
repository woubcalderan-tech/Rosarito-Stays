import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  matchPath,
  Outlet,
  ScrollRestoration,
  useLocation,
} from "react-router";
import { BookingLink } from "../booking/BookingLink";
import { navigation, paths, property } from "../config/site";
import { getSuite } from "../services/suites";
import { useRouteFocus } from "../hooks/useRouteFocus";
import { Container } from "../ui/Content";

import { Brand } from "./Brand";
import { DesktopNavigation } from "./DesktopNavigation";
import { NavigationEntries } from "./NavigationEntries";
import { SiteFooter } from "./SiteFooter";
import "../styles/shared-layout.css";

declare const __SHOW_PREVIEW_CONTENT__: boolean;

function Header({
  home,
  accommodations,
  suiteDetails,
  mobileBookingShortcut,
}: {
  home: boolean;
  accommodations: boolean;
  suiteDetails: boolean;
  mobileBookingShortcut: boolean;
}) {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const desktop = window.matchMedia("(min-width: 64rem)");
    function closeOnDesktop(event: MediaQueryListEvent) {
      if (event.matches) setOpen(false);
    }
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, [open]);
  return (
    <header
      className={`site-header${home ? " site-header--home" : ""}${accommodations ? " site-header--accommodations" : ""}${suiteDetails ? " site-header--suite-details" : ""}${mobileBookingShortcut ? " site-header--mobile-booking" : ""}`}
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          setOpen(false);
          toggle.current?.focus();
        }
      }}
    >
      <Container>
        <div className="header-row">
          <Brand />
          <DesktopNavigation />
          <div className="header-booking">
            <BookingLink />
          </div>
          {suiteDetails && (
            <a
              className="action action--primary suite-header-booking"
              href="#suite-booking"
            >
              Book a Stay
            </a>
          )}
          <button
            ref={toggle}
            type="button"
            className="menu-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-controls="mobile-nav"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
        <nav
          id="mobile-nav"
          className="mobile-nav"
          aria-label="Main navigation"
          hidden={!open}
        >
          {navigation.map(({ label, entries }) => (
            <div className="mobile-nav-group" key={label}>
              <p>{label}</p>
              <ul>
                <NavigationEntries entries={entries} />
              </ul>
            </div>
          ))}
          <BookingLink />
        </nav>
      </Container>
    </header>
  );
}
export function SiteLayout() {
  const { key, pathname } = useLocation();
  const main = useRouteFocus();
  const home = pathname === paths.home;
  const accommodations = pathname.replace(/\/$/, "") === paths.accommodations;
  const residence =
    !!property.residence && pathname.replace(/\/$/, "") === paths.residence;
  const propertyDetails =
    !!property.propertyDetails &&
    pathname.replace(/\/$/, "") === paths.propertyDetails;
  const suiteMatch = matchPath(`${paths.accommodations}/:slug`, pathname);
  const suiteDetails = Boolean(getSuite(suiteMatch?.params.slug));
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Header
        key={key}
        home={home}
        accommodations={accommodations}
        suiteDetails={suiteDetails}
        mobileBookingShortcut={residence || propertyDetails}
      />
      <main id="main-content" tabIndex={-1} ref={main}>
        <Outlet />
      </main>
      <SiteFooter
        key={pathname}
        home={home}
        compactOnMobile={
          accommodations || suiteDetails || residence || propertyDetails
        }
      />
      {__SHOW_PREVIEW_CONTENT__ && (
        <aside
          className="review-notice"
          aria-label="Fictional portfolio disclosure"
        >
          {`${property.brand.name} is a fictional hospitality concept created as a web development portfolio demonstration. Property imagery is AI-generated. Reservations and payments are simulated.`}
        </aside>
      )}
      <ScrollRestoration />
    </>
  );
}
