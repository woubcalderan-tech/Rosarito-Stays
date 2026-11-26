import { discoveryDestinations, property } from "../config/site";
import type { DiscoveryCardId } from "../config/property";

export type { DiscoveryCardId } from "../config/property";

const discoveryIds: readonly DiscoveryCardId[] = [
  "explore",
  "property",
  "dining",
];

export const discoveryCards = discoveryIds.map((id) => ({
  id,
  ...property.home.discovery[id],
  destination: discoveryDestinations[id],
}));
