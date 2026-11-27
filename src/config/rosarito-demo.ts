import {
  demoPhotoDirectory,
  demoPhotoVariants,
} from "../assets/images/demo-photo-variants.ts";
import type { DemoPhoto } from "../assets/images/demo-photo-variants.ts";
import { demoBooking } from "./demo-booking.ts";
import { paths } from "./routes.ts";
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

const oceanviewKitchen = galleryPhoto(
  "suites/oceanview-kitchen",
  "Kitchen with pendant lights and a dining table beside the ocean-facing opening",
  "50% 48%",
);

const bookingPhoto = image("banners/booking-banner", "");
const poolPhoto = image(
  "hero/hero-desktop",
  "Pool and sun loungers in a Mediterranean-style courtyard with a central arch",
);
const residenceCourtyard = galleryPhoto(
  "residence/architecture",
  "Plaster arch framing a stone fountain and courtyard with flowering bougainvillea",
  "50% 51%",
);
const residenceLounge = galleryPhoto(
  "residence/coastal-lounge",
  "Oceanfront pergola shading dining tables and lounge seating beside the coast",
  "52% 51%",
);

const demoLocation = {
  city: "Rosarito",
  region: "Baja California",
  country: "Mexico",
  timezone: "America/Tijuana",
};
const demoBrandName = "Rosarito Stays";

export const rosaritoDemo = {
  kind: "fictional-demo",
  brand: {
    name: demoBrandName,
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
    hero: { ...poolPhoto, mobileId: "hero/hero-mobile" },
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
  residence: {
    heroCopy: {
      heading: "The Residence",
      subtitle: `A boutique retreat in ${demoLocation.city}`,
    },
    architectureCopy: {
      eyebrow: "Architecture",
      heading: "Baja Mediterranean Architecture",
      description:
        "A timeless blend of Mediterranean elegance and Baja charm, with graceful arches, natural materials and open spaces that embrace the coastal setting.",
      actionLabel: "Explore The Residence",
    },
    experienceCopy: {
      eyebrow: "The Experience",
      heading: "A Relaxed Coastal Atmosphere",
      description:
        "Inviting spaces, warm textures and ocean breezes create the perfect setting to unwind, connect and enjoy the best of Rosarito.",
      benefits: [
        { icon: "waves", label: "Ocean Views" },
        { icon: "leaf", label: "Peaceful Spaces" },
        { icon: "sun", label: "Baja Lifestyle" },
      ],
    },
    benefits: [
      { icon: "bed", label: "Boutique Suites" },
      { icon: "utensils", label: "Outdoor Dining" },
      { icon: "waves", label: "Coastal Setting" },
      { icon: "leaf", label: "Relaxation Spaces" },
      { icon: "pin", label: `Prime ${demoLocation.city} Location` },
    ],
    bookingBanner: {
      heading: "Ready to experience The Residence?",
      description: "Check availability and book your stay today.",
      photo: bookingPhoto,
    },
    hero: galleryPhoto(
      "residence/hero",
      "Bougainvillea and arched doors frame a furnished oceanfront terrace at sunset",
      "51% 55%",
    ),
    architecture: residenceCourtyard,
    experience: residenceLounge,
    gallery: [
      {
        photo: galleryPhoto(
          "residence/firepit",
          "Chairs gathered around a lit fire pit in an arched courtyard at dusk",
          "50% 54%",
        ),
        categories: ["architecture", "outdoor-spaces"],
        scope: "residence",
      },
      {
        photo: suitePhotos.oceanview,
        categories: ["interiors", "ocean-views"],
        scope: "private-suite",
        suiteId: "oceanview",
      },
      {
        photo: galleryPhoto(
          "residence/coastline-sunset",
          "Illustrative Baja coastline with waves below a rocky bluff at sunset",
          "53% 48%",
        ),
        categories: ["ocean-views"],
        scope: "area",
      },
      {
        photo: galleryPhoto(
          "residence/architectural-detail",
          "Lantern, bougainvillea and potted agave beside a plaster arch",
          "50% 50%",
        ),
        categories: ["architecture"],
        scope: "residence",
      },
      {
        photo: oceanviewKitchen,
        categories: ["interiors", "ocean-views"],
        scope: "private-suite",
        suiteId: "oceanview",
      },
    ],
  },
  destinationGuide: {
    intro: {
      eyebrow: "Discover Baja California",
      heading: "Explore Rosarito",
      description:
        "From sun-kissed beaches and coastal adventures to authentic Mexican culture, discover the experiences that make Rosarito an unforgettable destination.",
      hero: image(
        "explore/hero",
        "Palm shadows on cream stucco beside a flowering arch looking out to the Pacific",
      ),
      mobileHeroPosition: "100% 50%",
    },
    attractionsSection: {
      eyebrow: "Discover the Area",
      heading: "Experiences Worth Exploring",
      description:
        "Discover the natural beauty, local culture and coastal experiences that make Baja California special.",
    },
    attractions: [
      {
        id: "rosarito-beach",
        name: "Rosarito Beach",
        category: "Beach & Relaxation",
        categoryIcon: "beach",
        cardPhotoPosition: "50% 56%",
        description:
          "Discover the coastal atmosphere of Rosarito, with sandy shores, Pacific Ocean scenery and a relaxed Baja lifestyle.",
        highlights: ["Beach walks", "Coastal relaxation", "Ocean sunsets"],
        photo: {
          ...image(
            "explore/rosarito-beach",
            "Sandy Pacific shoreline with gentle waves below daytime coastal cliffs",
          ),
          depiction: "ai-generated-illustration",
        },
        order: 1,
        marker: { style: "attraction", position: { x: 0.35, y: 0.36 } },
      },
      {
        id: "rosarito-pier",
        name: "Rosarito Beach Pier",
        category: "Coastal Sightseeing",
        categoryIcon: "pier",
        cardPhotoPosition: "57% 50%",
        description:
          "Discover the coastal scenery associated with Rosarito's pier, from ocean views to beautiful sunset photography.",
        highlights: ["Ocean views", "Coastal photography", "Sunset scenery"],
        photo: {
          ...image(
            "explore/rosarito-pier",
            "Wooden pier and pavilions stretching over the Pacific at sunset",
          ),
          depiction: "ai-generated-illustration",
        },
        order: 2,
        marker: { style: "attraction", position: { x: 0.3, y: 0.23 } },
      },
      {
        id: "puerto-nuevo",
        name: "Puerto Nuevo Lobster Village",
        category: "Dining & Local Culture",
        categoryIcon: "dining",
        cardPhotoPosition: "50% 68%",
        description:
          "Explore Baja's culinary heritage through traditional lobster dining and the coastal atmosphere associated with Puerto Nuevo.",
        highlights: [
          "Traditional lobster cuisine",
          "Baja culinary culture",
          "Coastal dining experiences",
        ],
        photo: {
          ...image(
            "explore/puerto-nuevo",
            "Lobster with lime, rice and accompaniments on a table overlooking the ocean",
          ),
          depiction: "ai-generated-illustration",
        },
        order: 3,
        marker: {
          style: "attraction",
          position: { x: 0.48, y: 0.77 },
          compactLabel: "Puerto Nuevo",
        },
      },
      {
        id: "popotla",
        name: "Popotla Fishing Village",
        category: "Culture & Tradition",
        categoryIcon: "fishing",
        cardPhotoPosition: "50% 72%",
        description:
          "Discover the traditional coastal character of Popotla through its fishing culture, seaside atmosphere and local seafood traditions.",
        highlights: [
          "Traditional fishing culture",
          "Local seafood",
          "Coastal scenery",
        ],
        photo: {
          ...image(
            "explore/popotla",
            "Colorful fishing boats pulled onto a beach beside coastal village buildings",
          ),
          depiction: "ai-generated-illustration",
        },
        order: 4,
        marker: {
          style: "attraction",
          position: { x: 0.4, y: 0.57 },
          compactLabel: "Popotla",
        },
      },
      {
        id: "cerro-el-coronel",
        name: "Cerro El Coronel",
        category: "Nature & Adventure",
        categoryIcon: "mountain",
        cardPhotoPosition: "54% 66%",
        description:
          "Discover the natural landscapes associated with Baja's coastal hills, panoramic scenery and outdoor exploration.",
        highlights: [
          "Coastal mountain landscapes",
          "Nature photography",
          "Outdoor exploration",
        ],
        photo: {
          ...image(
            "explore/cerro-el-coronel",
            "Dirt trail through coastal hills with scrub vegetation and a wide Pacific view",
          ),
          depiction: "ai-generated-illustration",
        },
        order: 5,
        marker: { style: "attraction", position: { x: 0.73, y: 0.68 } },
      },
    ],
    map: {
      kind: "illustrative",
      defaultAttractionId: "rosarito-pier",
      propertyMarker: {
        id: "rosarito-stays",
        name: demoBrandName,
        style: "brand-wave",
        locationStatus: "fictional",
        position: { x: 0.55, y: 0.42 },
        description:
          "A fictional Mediterranean-inspired coastal stay in Rosarito.",
        photo: residenceLounge,
        to: paths.residence,
      },
      disclosure:
        "Illustrative destination map. Property and marker positions are for demonstration purposes and are not intended for navigation.",
    },
    photographyDisclosure:
      "Destination imagery is AI-generated and illustrative.",
    visitorInformationDisclosure:
      "Visitor access and operating information have not been verified.",
    bookingBanner: {
      heading: "Ready for your Rosarito escape?",
      description: "Discover your perfect suite and start planning your stay.",
      actionLabel: "Book a Stay",
      photo: bookingPhoto,
      to: paths.booking,
    },
  },
  propertyDetails: {
    mobile: {
      heading: "The Property",
      description:
        "Everything you need for a comfortable and unforgettable stay in Rosarito.",
      locationHeading: "In the Heart of Rosarito",
      facilities: [
        {
          amenityId: "courtyards",
          label: "Landscaped Courtyards",
          photo: residenceCourtyard,
        },
        {
          amenityId: "lounge",
          label: "Terrace & Lounge",
          photo: residenceLounge,
        },
        { amenityId: "pool", label: "Swimming Pool", photo: poolPhoto },
      ],
    },
    hero: {
      heading: "Property Details",
      description:
        "Everything you need to know for a comfortable and seamless stay at Rosarito Stays.",
      photo: image(
        "property-details/hero",
        "Palm shadows on a cream stucco wall beside a corridor of arches and bougainvillea",
      ),
    },
    highlights: [
      { id: "boutique-suites", label: "Boutique Suites", icon: "bed" },
      { id: "pool-terrace", label: "Pool & Terrace", icon: "pool" },
      { id: "wifi", label: "Wi-Fi", icon: "wifi", suiteAmenityId: "wifi" },
      {
        id: "outdoor-dining",
        label: "Outdoor Dining",
        icon: "utensils",
        suiteAmenityId: "outdoor-dining",
      },
      { id: "courtyards", label: "Relaxing Courtyards", icon: "leaf" },
    ],
    amenities: {
      description:
        "Thoughtfully designed spaces and essential amenities to make your stay relaxing, convenient and memorable.",
      photo: poolPhoto,
      groups: [
        {
          id: "suite-comforts",
          label: "Suite Comforts",
          items: [
            {
              id: "wifi",
              label: "Wi-Fi",
              icon: "wifi",
              scope: "suite",
              suiteAmenityId: "wifi",
            },
            {
              id: "cooling",
              label: "Air Conditioning",
              icon: "snowflake",
              scope: "suite",
              suiteAmenityId: "cooling",
            },
            {
              id: "kitchen",
              label: "Kitchens and Kitchenettes",
              icon: "kitchen",
              scope: "suite",
              suiteAmenityId: "kitchen",
            },
            {
              id: "outdoor-dining",
              label: "Outdoor Dining",
              icon: "utensils",
              scope: "suite",
              suiteAmenityId: "outdoor-dining",
            },
            {
              id: "grill",
              label: "Private BBQ",
              icon: "grill",
              scope: "suite",
              suiteAmenityId: "grill",
            },
            {
              id: "terrace",
              label: "Private Terraces",
              icon: "umbrella",
              scope: "suite",
              suiteAmenityId: "terrace",
            },
          ],
        },
        {
          id: "shared-spaces",
          label: "Shared Spaces",
          items: [
            {
              id: "pool",
              label: "Swimming Pool",
              icon: "pool",
              scope: "common-area",
              status: "demo-proposal",
            },
            {
              id: "lounge",
              label: "Shared Lounge Areas",
              icon: "umbrella",
              scope: "common-area",
              status: "demo-proposal",
            },
            {
              id: "courtyards",
              label: "Landscaped Courtyards",
              icon: "leaf",
              scope: "common-area",
              status: "demo-proposal",
            },
          ],
        },
      ],
    },
    location: {
      areaLabel: `${demoLocation.city}, ${demoLocation.region}, México`,
      description:
        "Enjoy Baja’s coastal setting, with Pacific beaches, local restaurants, markets and other places to explore in and around Rosarito.",
      illustrativePhoto: image(
        "property-details/coastline",
        "Illustrative Baja coastline with homes and palms above coastal cliffs and Pacific surf",
      ),
      nearby: [
        { id: "beach", label: "Beach & Coastline", icon: "coast" },
        { id: "restaurants", label: "Local Restaurants", icon: "utensils" },
        { id: "markets", label: "Shopping & Markets", icon: "shopping" },
        { id: "tijuana", label: "Access to Tijuana", icon: "car" },
      ],
    },
    guestPhoto: { photo: suitePhotos.terrace, suiteId: "terrace" },
    bookingBanner: {
      heading: "Book Your Stay at Rosarito Stays",
      description:
        "Experience comfort, privacy and the best of Baja, all in one place.",
      photo: bookingPhoto,
    },
  },
  guestPolicies: {
    status: "demo-proposal",
    checkInFrom: "15:00",
    checkOutBy: "11:00",
    parking: {
      availability: "on-site",
      description: "Complimentary on-site parking is available for guests.",
    },
    smoking: "no-smoking-in-suites",
    pets: "not-allowed",
    quietHours: { from: "22:00", until: "08:00" },
    registeredGuestsOnly: true,
    partiesAndEvents: "not-allowed",
    additionalHouseRules: ["Please respect the property and shared spaces."],
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
        oceanviewKitchen,
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
