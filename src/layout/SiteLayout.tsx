import { Menu, Waves, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  ScrollRestoration,
  useLocation,
} from "react-router";
import { BookingLink } from "../booking/BookingLink";
import { navigation, paths, site } from "../config/site";
import { useRouteFocus } from "../hooks/useRouteFocus";
import { Container } from "../ui/Content";

function Brand() {
  return (
    <Link to={paths.home} className="brand" aria-label={`${site.name} home`}>
      <Waves aria-hidden="true" size={30} strokeWidth={1.3} />
      <span>{site.name}</span>
      <small>Vacation Suites</small>
    </Link>
  );
}
function NavigationLinks() {
  return navigation.map(({ to, label }) => (
    <NavLink key={to} to={to}>
      {label}
    </NavLink>
  ));
}
function Header() {
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
      className="site-header"
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
          <nav className="desktop-nav" aria-label="Main navigation">
            <NavigationLinks />
          </nav>
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
          <NavigationLinks />
          <BookingLink />
        </nav>
      </Container>
    </header>
  );
}
function Footer({ tone }: { tone: "light" | "dark" | "suite" }) {
  return (
    <footer className={`site-footer site-footer--${tone}`}>
      <Container>
        <div className="footer-row">
          <Brand />
          <nav aria-label="Footer">
            {navigation.map(({ to, label }) => (
              <Link key={to} to={to}>
                {label}
              </Link>
            ))}
            <Link to={paths.privacy}>Privacy</Link>
            <Link to={paths.terms}>Terms</Link>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
export function SiteLayout() {
  const { key, pathname } = useLocation();
  const main = useRouteFocus();
  const light = pathname === paths.home || pathname === paths.accommodations;
  const suite = pathname.startsWith(`${paths.accommodations}/`);
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Header key={key} />
      <main id="main-content" tabIndex={-1} ref={main}>
        <Outlet />
      </main>
      <Footer tone={suite ? "suite" : light ? "light" : "dark"} />
      <ScrollRestoration />
    </>
  );
}
