import { demoBooking } from "./demo-booking.ts";
import type { ClientPropertyConfig, PropertyConfig } from "./property.ts";

// Replace with a verified ClientPropertyConfig in an individual client project.
export const standardProperty:
  (PropertyConfig & { kind: "template" }) | ClientPropertyConfig = {
  kind: "template",
  brand: {
    name: "Hospitality Template",
    subtitle: "Vacation Suites",
    description: "Explore the hospitality website template.",
  },
  locale: "en",
  home: {
    headline: ["Find your", "next stay."],
    description: "Explore the hospitality website template.",
    banner: {
      eyebrow: "Plan Your Stay",
      heading: "Find Your Stay",
      description: "Explore the booking demonstration.",
    },
    discovery: {
      explore: { heading: "Explore the Area", action: "Explore the Area" },
      property: { heading: "Property Highlights", action: "View Details" },
      dining: { heading: "Dining", action: "Explore Dining" },
    },
  },
  suites: [],
  booking: demoBooking,
};
