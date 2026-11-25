import { discoveryDestinations } from "../config/site";
import type { NavigationEntry } from "../config/site";

declare const __SHOW_PREVIEW_CONTENT__: boolean;

export type DiscoveryCardId = "explore" | "property" | "dining";

interface DiscoveryCard {
  id: DiscoveryCardId;
  heading: string;
  action: string;
  destination: NavigationEntry;
}

export const discoveryCards: readonly DiscoveryCard[] = [
  {
    id: "explore",
    heading: "Explore Rosarito",
    action: "Explore Rosarito",
    destination: discoveryDestinations.explore,
  },
  {
    id: "property",
    heading: "Property Highlights",
    action: "View Details",
    destination: discoveryDestinations.property,
  },
  {
    id: "dining",
    heading: "Dining",
    action: "Explore Dining",
    destination: discoveryDestinations.dining,
  },
];

// Local mockup copy. Add verified descriptions separately when they are approved.
export const provisionalDiscoveryDescriptions: Partial<
  Record<DiscoveryCardId, string>
> = __SHOW_PREVIEW_CONTENT__
  ? {
      explore:
        "Beaches, local culture, and the best of Baja just minutes away.",
      property: "Ocean views, modern amenities, and a relaxing stay.",
      dining: "Discover great food and local favorites in Rosarito.",
    }
  : {};
