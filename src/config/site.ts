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
  futurePath?: string;
}

export const discoveryDestinations = {
  explore: { label: "Explore Rosarito", futurePath: "/explore-rosarito" },
  property: { label: "Property Details", futurePath: "/property-details" },
  dining: { label: "Dining", futurePath: "/dining" },
} satisfies Record<string, NavigationEntry>;

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
    entries: [discoveryDestinations.explore, discoveryDestinations.dining],
  },
  {
    label: "Details",
    entries: [
      discoveryDestinations.property,
      { label: "Contact & FAQ", to: paths.contact },
    ],
  },
];
export function suitePath(slug: string) {
  return `${paths.accommodations}/${encodeURIComponent(slug)}`;
}
