import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router";
import { navigation, paths } from "../config/site";
import { NavigationEntries } from "./NavigationEntries";

export function DesktopNavigation() {
  const { pathname } = useLocation();
  const [expanded, setExpanded] = useState<number | null>(null);
  const nav = useRef<HTMLElement>(null);

  useEffect(() => {
    if (expanded === null) return;
    function closeOutside(event: PointerEvent) {
      if (
        event.target instanceof Node &&
        !nav.current?.contains(event.target)
      ) {
        setExpanded(null);
      }
    }
    const desktop = window.matchMedia("(min-width: 64rem)");
    function closeOnMobile(event: MediaQueryListEvent) {
      if (!event.matches) setExpanded(null);
    }
    document.addEventListener("pointerdown", closeOutside);
    desktop.addEventListener("change", closeOnMobile);
    return () => {
      document.removeEventListener("pointerdown", closeOutside);
      desktop.removeEventListener("change", closeOnMobile);
    };
  }, [expanded]);

  return (
    <nav
      ref={nav}
      className="desktop-nav"
      aria-label="Main navigation"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget))
          setExpanded(null);
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape" && expanded !== null) {
          event.preventDefault();
          document.getElementById(`desktop-nav-trigger-${expanded}`)?.focus();
          setExpanded(null);
        }
      }}
    >
      <ul className="desktop-nav-groups">
        {navigation.map(({ label, entries }, index) => {
          const open = expanded === index;
          const pagePath = pathname.replace(/\/$/, "");
          const active =
            ((pagePath === paths.residence ||
              pagePath === paths.propertyDetails) &&
              entries.some(({ to }) => to === pagePath)) ||
            ((pathname === paths.accommodations ||
              pathname.startsWith(paths.accommodations + "/")) &&
              entries.some(({ to }) => to === paths.accommodations));
          const panel = `desktop-nav-panel-${index}`;
          return (
            <li key={label}>
              <button
                type="button"
                id={`desktop-nav-trigger-${index}`}
                className={active ? "nav-listing-active" : undefined}
                aria-expanded={open}
                aria-controls={panel}
                onClick={() => setExpanded(open ? null : index)}
              >
                {label} <ChevronDown size={13} aria-hidden="true" />
              </button>
              <ul id={panel} hidden={!open} className="desktop-nav-panel">
                <NavigationEntries entries={entries} />
              </ul>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
