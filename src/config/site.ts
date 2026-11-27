import type { PropertyConfig } from "./property";
import { paths } from "./routes";

export { paths, suiteBookingPath, suitePath } from "./routes";

declare const __PROPERTY_CONFIG__: PropertyConfig;

export const property = __PROPERTY_CONFIG__;
export const site = {
  name: property.brand.name,
};

export interface NavigationEntry {
  label: string;
  to?: string;
  futurePath?: string;
}

export const discoveryDestinations: Record<
  keyof PropertyConfig["home"]["discovery"],
  NavigationEntry
> = {
  explore: {
    label: property.home.discovery.explore.heading,
    futurePath: property.home.discovery.explore.futurePath,
  },
  property: {
    label: "Property Details",
    futurePath:
      property.home.discovery.property.futurePath ?? paths.propertyDetails,
  },
  dining: {
    label: property.home.discovery.dining.heading,
    futurePath: property.home.discovery.dining.futurePath ?? "/dining",
  },
};

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
    entries: [
      property.destinationGuide
        ? {
            label: discoveryDestinations.explore.label,
            to: paths.exploreRosarito,
          }
        : discoveryDestinations.explore,
      discoveryDestinations.dining,
    ],
  },
  {
    label: "Details",
    entries: [
      property.propertyDetails
        ? {
            label: discoveryDestinations.property.label,
            to: paths.propertyDetails,
          }
        : discoveryDestinations.property,
      { label: "Contact & FAQ", to: paths.contact },
    ],
  },
];
