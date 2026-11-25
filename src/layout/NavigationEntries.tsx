import { NavLink } from "react-router";
import type { NavigationEntry } from "../config/site";

export function NavigationEntries({
  entries,
}: {
  entries: readonly NavigationEntry[];
}) {
  return entries.map(({ label, to }) => (
    <li key={label}>
      {to ? (
        <NavLink to={to}>{label}</NavLink>
      ) : (
        <span className="nav-unavailable">
          {label}
          <small>Coming soon</small>
        </span>
      )}
    </li>
  ));
}
