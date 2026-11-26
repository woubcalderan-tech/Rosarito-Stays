import {
  demoPhotoDirectory,
  demoPhotoVariants,
} from "../assets/images/demo-photo-variants.ts";
import type { DemoPhoto } from "../assets/images/demo-photo-variants.ts";
import { demoBooking } from "./demo-booking.ts";
import type {
  CatalogSuite,
  PropertyConfig,
  PropertyImage,
} from "./property.ts";

function image(
  id: DemoPhoto,
  alt: string,
  mobileId?: DemoPhoto,
): PropertyImage {
  return { id, alt, mobileId };
}

function featured(
  order: number,
  description: string,
  id: DemoPhoto,
  alt: string,
  position: string,
): CatalogSuite["featured"] {
  return { order, description, photo: { ...image(id, alt), position } };
}

export const rosaritoDemo = {
  kind: "fictional-demo",
  brand: {
    name: "Rosarito Stays",
    subtitle: "Vacation Suites",
    logo: "/src/assets/brand/coastal-wave.svg",
    favicon: "/src/assets/brand/favicon.png",
    description:
      "Explore vacation suites in Rosarito, Baja California, Mexico.",
  },
  location: {
    city: "Rosarito",
    region: "Baja California",
    country: "Mexico",
    timezone: "America/Tijuana",
  },
  locale: "en",
  home: {
    headline: ["Stay somewhere", "remembered."],
    description: "Vacation suites in",
    mobileDescription: "Oceanview vacation suites",
    hero: image(
      "hero/hero-desktop",
      "Pool and sun loungers in a Mediterranean-style courtyard with a central arch",
      "hero/hero-mobile",
    ),
    banner: {
      eyebrow: "Plan Your Baja Escape",
      heading: "Book Your Rosarito Stay",
      description:
        "Coastal comfort, local charm, and a welcoming home base for your time in Baja.",
      photo: image("banners/booking-banner", ""),
    },
    discovery: {
      explore: {
        heading: "Explore Rosarito",
        action: "Explore Rosarito",
        futurePath: "/explore-rosarito",
        description:
          "Beaches, local culture, and the best of Baja just minutes away.",
        photo: image(
          "discovery/explore-rosarito-portrait",
          "Illustrated Baja coastline with a sandy cove and waves below a rocky bluff",
          "discovery/explore-rosarito",
        ),
      },
      property: {
        heading: "Property Highlights",
        action: "View Details",
        description: "Ocean views, modern amenities, and a relaxing stay.",
        photo: image(
          "discovery/property-highlights",
          "Bench and lantern in a plaster arch framed by potted plants",
          "discovery/property-highlights",
        ),
      },
      dining: {
        heading: "Dining",
        action: "Explore Dining",
        description: "Discover great food and local favorites in Rosarito.",
        photo: image(
          "discovery/dining-portrait",
          "Set dining table under woven lanterns on a terrace overlooking the coast at sunset",
          "discovery/dining",
        ),
      },
    },
  },
  suites: [
    {
      id: "oceanview",
      slug: "oceanview-suite",
      name: "Oceanview Suite",
      featured: featured(
        1,
        "Description for Oceanview Suite is pending review.",
        "suites/suite-oceanview",
        "Bedroom opening onto a balcony with a view of the ocean",
        "60% 50%",
      ),
    },
    {
      id: "courtyard",
      slug: "courtyard-suite",
      name: "Courtyard Suite",
      featured: featured(
        2,
        "A tranquil retreat with a private courtyard, modern comfort and coastal charm.",
        "suites/suite-courtyard",
        "Bedroom with open doors to a flowering courtyard and a shaded arch",
        "53% 50%",
      ),
    },
    {
      id: "terrace",
      slug: "terrace-suite",
      name: "Terrace Suite",
      featured: featured(
        3,
        "Description for Terrace Suite is pending review.",
        "suites/suite-terrace",
        "Bedroom opening onto a covered terrace with seating and an ocean view",
        "57% 50%",
      ),
    },
    {
      id: "garden",
      slug: "garden-suite",
      name: "Garden Suite",
      featured: featured(
        4,
        "Description for Garden Suite is pending review.",
        "suites/suite-garden",
        "Bedroom looking onto a planted patio with pink flowers",
        "52% 50%",
      ),
    },
  ],
  initialFeaturedSuiteId: "courtyard",
  booking: demoBooking,
  photos: { directory: demoPhotoDirectory, variants: demoPhotoVariants },
} satisfies PropertyConfig;
