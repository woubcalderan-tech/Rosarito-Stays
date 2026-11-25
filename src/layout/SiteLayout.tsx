import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Outlet, ScrollRestoration, useLocation } from "react-router";
import { BookingLink } from "../booking/BookingLink";
import { navigation, paths } from "../config/site";
import { useRouteFocus } from "../hooks/useRouteFocus";
import { Container } from "../ui/Content";

import { Brand } from "./Brand";
import { DesktopNavigation } from "./DesktopNavigation";
import { NavigationEntries } from "./NavigationEntries";
import { SiteFooter } from "./SiteFooter";
import "../styles/shared-layout.css";

function Header({ home }: { home: boolean }) {
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
      className={home ? "site-header site-header--home" : "site-header"}
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
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Header key={key} home={pathname === paths.home} />
      <main id="main-content" tabIndex={-1} ref={main}>
        <Outlet />
      </main>
      <SiteFooter />
      <ScrollRestoration />
    </>
  );
}
