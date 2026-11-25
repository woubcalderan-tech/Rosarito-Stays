const city = "Rosarito";
const region = "Baja California";
const country = "Mexico";

export const site = {
  name: "Rosarito Stays",
  city,
  region,
  country,
  location: [city, region, country].join(", "),
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
export interface NavigationEntry {
  label: string;
  to?: string;
}

export const navigation: readonly {
  label: string;
  entries: readonly NavigationEntry[];
}[] = [
  {
    label: "Suites",
    entries: [
      { label: "Accommodations", to: paths.accommodations },
      { label: "The Residence", to: paths.residence },
    ],
  },
  {
    label: "Local Guide",
    entries: [{ label: "Explore Rosarito" }, { label: "Dining" }],
  },
  {
    label: "Details",
    entries: [
      { label: "Property Details" },
      { label: "Contact & FAQ", to: paths.contact },
    ],
  },
];
export function suitePath(slug: string) {
  return `${paths.accommodations}/${encodeURIComponent(slug)}`;
}
