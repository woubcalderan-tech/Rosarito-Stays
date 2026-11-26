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
  photo: PropertyImage & { position: string },
): CatalogSuite["featured"] {
  return { order, description, photo };
}

const suitePhotos = {
  oceanview: {
    ...image(
      "suites/suite-oceanview",
      "Bedroom opening onto a balcony with a view of the ocean",
    ),
    position: "60% 50%",
  },
  courtyard: {
    ...image(
      "suites/suite-courtyard",
      "Bedroom with open doors to a flowering courtyard and a shaded arch",
    ),
    position: "53% 50%",
  },
  terrace: {
    ...image(
      "suites/suite-terrace",
      "Bedroom opening onto a covered terrace with seating and an ocean view",
    ),
    position: "57% 50%",
  },
  garden: {
    ...image(
      "suites/suite-garden",
      "Bedroom looking onto a planted patio with pink flowers",
    ),
    position: "52% 50%",
  },
};
function galleryPhoto(
  id: DemoPhoto,
  alt: string,
  position: string,
): PropertyImage {
  return { id, alt, position };
}

const bookingPhoto = image("banners/booking-banner", "");

const demoLocation = {
  city: "Rosarito",
  region: "Baja California",
  country: "Mexico",
  timezone: "America/Tijuana",
};

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
  location: demoLocation,
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
      photo: bookingPhoto,
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
  accommodations: {
    heading: "Find your stay",
    introduction:
      "Spacious, comfortable suites designed for relaxation, connection and the Baja lifestyle.",
    hero: suitePhotos.oceanview,
    benefits: {
      privateSuites: "Private Suites",
      capacity: "Up to {guests} Guests",
      ocean: "Ocean Views",
      outdoor: "Outdoor Spaces",
      location: "Prime Rosarito Location",
    },
    bookingBanner: {
      heading: "Ready to book your stay?",
      description: "Check availability and reserve your Rosarito suite today.",
      photo: bookingPhoto,
    },
  },
  suiteDetails: {
    benefits: [
      {
        id: "location",
        heading: `${demoLocation.city}, ${demoLocation.region}`,
        description: demoLocation.country,
      },
      {
        id: "access",
        heading: "Easy Access",
        description: "Close to beaches, dining and attractions",
      },
      {
        id: "comfort",
        heading: "Resort-Style Comfort",
        description: "Relax, explore and unwind",
      },
      {
        id: "stays",
        heading: "Flexible Stays",
        description: "Nightly and extended stays",
      },
    ],
    bookingBanner: {
      heading: "Ready to stay in the {suite}?",
      description: "Check availability and book your Rosarito escape today.",
      photo: bookingPhoto,
    },
  },
  suites: [
    {
      id: "oceanview",
      slug: "oceanview-suite",
      details: {
        bathrooms: 2,
        description:
          "A spacious coastal retreat with stunning Pacific Ocean views, comfortable living spaces and a fully equipped kitchen. Perfect for families or groups seeking a relaxed Baja escape with the comfort of a private ocean-facing balcony.",
        nightlyRate: { amount: 199, currency: "USD" },
        highlights: {
          introduction:
            "Make yourself at home with inviting living spaces, an ocean-facing balcony and room to spend time together.",
          features: [
            "Comfortable bedrooms and premium linens",
            "Private ocean-facing balcony",
            "Fully equipped kitchen",
            "Spacious living and dining areas",
            "Ideal for families and groups",
          ],
          photoIds: [
            "suites/oceanview-balcony",
            "suites/oceanview-kitchen",
            "suites/oceanview-bathroom",
          ],
        },
      },
      maximumGuests: 6,
      bedrooms: 2,
      summary:
        "A spacious suite with stunning ocean views, ideal for families or groups seeking a relaxed Baja escape.",
      gallery: [
        suitePhotos.oceanview,
        galleryPhoto(
          "suites/oceanview-living",
          "Living room with cream seating and open doors to the ocean-facing balcony",
          "50% 52%",
        ),
        galleryPhoto(
          "suites/oceanview-kitchen",
          "Kitchen with pendant lights and a dining table beside the ocean-facing opening",
          "50% 48%",
        ),
        galleryPhoto(
          "suites/oceanview-bathroom",
          "Stone bathroom with an arched mirror, walk-in shower, and an ocean-facing window",
          "50% 48%",
        ),
        galleryPhoto(
          "suites/oceanview-balcony",
          "Private balcony with woven chairs, a small table, and a view of the ocean beyond the railing",
          "50% 53%",
        ),
      ],
      amenities: [
        { id: "ocean", label: "Ocean View" },
        { id: "kitchen", label: "Full Kitchen" },
        { id: "cooling", label: "A/C" },
        { id: "balcony", label: "Private Balcony" },
      ],
      name: "Oceanview Suite",
      featured: featured(
        1,
        "Description for Oceanview Suite is pending review.",
        suitePhotos.oceanview,
      ),
    },
    {
      id: "courtyard",
      slug: "courtyard-suite",
      details: {
        bathrooms: 1,
        description:
          "A tranquil retreat with a private courtyard, modern comfort and coastal charm. Perfect for couples, small families or friends seeking a relaxing Rosarito escape surrounded by warm architecture and inviting outdoor spaces.",
        nightlyRate: { amount: 149, currency: "USD" },
        extraAmenities: [{ id: "outdoor-seating", label: "Outdoor Seating" }],
        highlights: {
          introduction:
            "Enjoy a thoughtfully designed suite with indoor-outdoor living, an enclosed courtyard and space to unwind.",
          features: [
            "Comfortable bedroom and premium linens",
            "Private courtyard with seating",
            "Convenient kitchenette",
            "Inviting indoor-outdoor living",
            "Ideal for couples and small groups",
          ],
          photoIds: [
            "suites/courtyard-patio",
            "suites/courtyard-kitchenette",
            "suites/courtyard-bathroom",
          ],
        },
      },
      maximumGuests: 4,
      bedrooms: 1,
      summary:
        "A tranquil retreat with a private courtyard, modern comfort and coastal charm.",
      gallery: [
        galleryPhoto(
          "suites/courtyard-living",
          "Cream sofa and woven chairs beside open doors to the enclosed flowering courtyard",
          "50% 54%",
        ),
        suitePhotos.courtyard,
        galleryPhoto(
          "suites/courtyard-patio",
          "Private courtyard with a dining table, arched seating alcove, and flowering vines",
          "50% 53%",
        ),
        galleryPhoto(
          "suites/courtyard-kitchenette",
          "Wood kitchenette with open shelving and doors to the enclosed courtyard",
          "50% 47%",
        ),
        galleryPhoto(
          "suites/courtyard-bathroom",
          "Stone bathroom with a vanity and an opening onto the flowering courtyard",
          "50% 48%",
        ),
      ],
      amenities: [
        { id: "courtyard", label: "Private Courtyard" },
        { id: "wifi", label: "High-Speed Wi-Fi" },
        { id: "cooling", label: "A/C" },
        { id: "kitchen", label: "Kitchenette" },
      ],
      name: "Courtyard Suite",
      featured: featured(
        2,
        "A tranquil retreat with a private courtyard, modern comfort and coastal charm.",
        suitePhotos.courtyard,
      ),
    },
    {
      id: "terrace",
      slug: "terrace-suite",
      details: {
        bathrooms: 1,
        description:
          "A bright and stylish coastal retreat centered around a spacious private ocean-facing terrace. Enjoy sunset dining, outdoor lounging and a dedicated BBQ area, complemented by comfortable interiors and refreshing ocean breezes.",
        nightlyRate: { amount: 179, currency: "USD" },
        extraAmenities: [{ id: "outdoor-dining", label: "Outdoor Dining" }],
        highlights: {
          introduction:
            "Spend time on the oceanfront terrace, from a quiet morning under the pergola to dinner at sunset.",
          features: [
            "Comfortable coastal bedroom",
            "Spacious private oceanfront terrace",
            "Outdoor BBQ and dining",
            "Convenient refreshment station",
            "Relaxing sunset lounge area",
          ],
          photoIds: [
            "suites/terrace-living",
            "suites/terrace-refreshment-area",
            "suites/terrace-bathroom",
          ],
        },
      },
      maximumGuests: 4,
      bedrooms: 1,
      summary:
        "A bright, stylish suite with a large private terrace, perfect for sunsets, outdoor dining and ocean breezes.",
      gallery: [
        galleryPhoto(
          "suites/terrace-outdoor",
          "Oceanfront terrace with a wooden pergola, lounge seating, dining table, and a grill",
          "50% 49%",
        ),
        suitePhotos.terrace,
        galleryPhoto(
          "suites/terrace-living",
          "Living room with cream seating opening to the oceanfront terrace",
          "50% 52%",
        ),
        galleryPhoto(
          "suites/terrace-refreshment-area",
          "Refreshment counter and round table beside open doors to the terrace",
          "50% 49%",
        ),
        galleryPhoto(
          "suites/terrace-bathroom",
          "Stone bathroom with a long vanity, glass shower, and small ocean-facing window",
          "50% 46%",
        ),
      ],
      amenities: [
        { id: "terrace", label: "Private Terrace" },
        { id: "grill", label: "BBQ Area" },
        { id: "cooling", label: "A/C" },
        { id: "wifi", label: "High-Speed Wi-Fi" },
      ],
      name: "Terrace Suite",
      featured: featured(
        3,
        "Description for Terrace Suite is pending review.",
        suitePhotos.terrace,
      ),
    },
    {
      id: "garden",
      slug: "garden-suite",
      details: {
        bathrooms: 2,
        description:
          "A charming retreat surrounded by lush greenery, offering privacy, comfort and a true Baja garden atmosphere. Thoughtfully designed living spaces, a full kitchen and private outdoor dining create a welcoming home away from home.",
        nightlyRate: { amount: 159, currency: "USD" },
        highlights: {
          introduction:
            "Enjoy a quiet garden setting with shaded outdoor dining and comfortable spaces to settle in.",
          features: [
            "Comfortable bedrooms",
            "Peaceful private garden",
            "Fully equipped kitchen",
            "Inviting garden-facing living room",
            "Private outdoor dining",
          ],
          photoIds: [
            "suites/garden-outdoor-dining",
            "suites/garden-kitchen",
            "suites/garden-bathroom",
          ],
        },
      },
      maximumGuests: 4,
      bedrooms: 2,
      summary:
        "A charming suite surrounded by lush greenery, offering privacy, comfort and a true Baja garden feel.",
      gallery: [
        suitePhotos.garden,
        galleryPhoto(
          "suites/garden-living",
          "Living room with botanical artwork and open doors to a landscaped patio",
          "50% 52%",
        ),
        galleryPhoto(
          "suites/garden-kitchen",
          "Wood kitchen and round dining table looking out onto lush planting",
          "50% 50%",
        ),
        galleryPhoto(
          "suites/garden-bathroom",
          "Stone bathroom with an arched mirror and greenery outside the window",
          "50% 46%",
        ),
        galleryPhoto(
          "suites/garden-outdoor-dining",
          "Outdoor dining table surrounded by trees, flowering vines, and garden planting",
          "50% 55%",
        ),
      ],
      amenities: [
        { id: "garden", label: "Garden View" },
        { id: "kitchen", label: "Full Kitchen" },
        { id: "cooling", label: "A/C" },
        { id: "outdoor-dining", label: "Outdoor Dining" },
      ],
      name: "Garden Suite",
      featured: featured(
        4,
        "Description for Garden Suite is pending review.",
        suitePhotos.garden,
      ),
    },
  ],
  initialFeaturedSuiteId: "courtyard",
  booking: demoBooking,
  photos: { directory: demoPhotoDirectory, variants: demoPhotoVariants },
} satisfies PropertyConfig;
