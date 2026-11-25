export const site = {
  name: "Rosarito Stays",
  location: "Rosarito, Baja California, Mexico",
  locale: "en",
} as const;
export const paths = {
  home: "/",
  residence: "/the-residence",
  accommodations: "/accommodations",
  booking: "/booking",
  contact: "/contact",
  privacy: "/privacy",
  terms: "/terms",
} as const;
export const navigation = [
  { to: paths.accommodations, label: "Accommodations" },
  { to: paths.residence, label: "The Residence" },
  { to: paths.contact, label: "Contact" },
] as const;
export function suitePath(slug: string) {
  return `${paths.accommodations}/${encodeURIComponent(slug)}`;
}
