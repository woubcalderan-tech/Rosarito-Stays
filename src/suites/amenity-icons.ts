import {
  Armchair,
  CookingPot,
  Fence,
  Flame,
  Leaf,
  Snowflake,
  Umbrella,
  Waves,
  Wifi,
} from "lucide-react";
import type { AmenityId } from "../config/property";

export const amenityIcons = {
  ocean: Waves,
  kitchen: CookingPot,
  cooling: Snowflake,
  balcony: Fence,
  courtyard: Leaf,
  wifi: Wifi,
  terrace: Umbrella,
  grill: Flame,
  garden: Leaf,
  "outdoor-dining": Umbrella,
  "outdoor-seating": Armchair,
} satisfies Record<AmenityId, typeof Waves>;
