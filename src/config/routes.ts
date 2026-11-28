export const paths = {
  home: "/",
  residence: "/the-residence",
  propertyDetails: "/property-details",
  exploreRosarito: "/explore-rosarito",
  dining: "/dining",
  accommodations: "/accommodations",
  booking: "/booking",
  contact: "/contact",
  privacy: "/privacy",
  terms: "/terms",
} as const;

export function suitePath(slug: string) {
  return `${paths.accommodations}/${encodeURIComponent(slug)}`;
}

export function suiteBookingPath(slug: string) {
  return `${paths.booking}?${new URLSearchParams({ suite: slug })}`;
}
