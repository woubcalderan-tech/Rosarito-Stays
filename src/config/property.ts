export type DiscoveryCardId = "explore" | "property" | "dining";
export type SocialChannel = "instagram" | "facebook" | "youtube";

export interface PropertyImage {
  id: string;
  alt: string;
  mobileId?: string;
  position?: string;
}

export interface IllustrativeMapPosition {
  x: number;
  y: number;
}

interface DestinationSource {
  label: string;
  url?: `https://${string}`;
}

export interface DestinationAttraction {
  id: string;
  name: string;
  category: string;
  categoryIcon: "beach" | "pier" | "dining" | "fishing" | "mountain";
  description: string;
  extendedDescription?: string;
  cardPhotoPosition?: string;
  highlights: readonly string[];
  photo: PropertyImage & {
    depiction: "ai-generated-illustration" | "destination-photograph";
    attribution?: DestinationSource;
  };
  order: number;
  marker: {
    style: "attraction";
    position: IllustrativeMapPosition;
    compactLabel?: string;
  };
  verifiedDestination?: {
    coordinates?: { latitude: number; longitude: number };
    visitorInformation?: string;
    source: DestinationSource;
    verifiedOn: string;
  };
}

export interface FictionalPropertyMarker {
  id: string;
  name: string;
  style: "brand-wave";
  locationStatus: "fictional";
  position: IllustrativeMapPosition;
  description: string;
  highlights?: readonly string[];
  photo?: PropertyImage;
  to: `/${string}`;
}

export interface DestinationGuide {
  intro: {
    eyebrow: string;
    heading: string;
    description: string;
    hero: PropertyImage;
    mobileHeroPosition?: string;
  };
  attractionsSection: { eyebrow: string; heading: string; description: string };
  attractions: readonly DestinationAttraction[];
  map: {
    kind: "illustrative";
    defaultAttractionId: string;
    propertyMarker: FictionalPropertyMarker;
    disclosure: string;
  };
  photographyDisclosure: string;
  visitorInformationDisclosure?: string;
  bookingBanner: {
    heading: string;
    description: string;
    actionLabel: string;
    photo?: PropertyImage;
    to: `/${string}`;
  };
}

export interface DiningExperience {
  id: string;
  category: string;
  heading: string;
  description: string;
  highlights: readonly string[];
  photo: PropertyImage & {
    depiction: "ai-generated-illustration" | "destination-photograph";
  };
}

export type DiningHighlightIcon =
  "fish" | "utensils-crossed" | "waves-horizontal" | "cooking-pot";

export interface DiningConfig {
  hero: {
    eyebrow: string;
    heading: string;
    description: string;
    photo: PropertyImage;
  };
  editorialHeading: string;
  mobileIntro: {
    eyebrow: string;
    heading: string;
    description: string;
    highlights: readonly { icon: DiningHighlightIcon; label: string }[];
  };
  featuredExperience: DiningExperience;
  supportingExperiences: readonly DiningExperience[];
  privateSuiteDining: {
    heading: string;
    description: string;
    photo: PropertyImage;
    actionLabel: string;
    to: `/${string}`;
  };
  bookingBanner: {
    heading: string;
    description: string;
    photo: PropertyImage;
    actionLabel: string;
    to: `/${string}`;
  };
  disclosure: string;
}

export type AmenityId =
  | "ocean"
  | "kitchen"
  | "cooling"
  | "balcony"
  | "courtyard"
  | "wifi"
  | "terrace"
  | "grill"
  | "garden"
  | "outdoor-dining"
  | "outdoor-seating";

export interface SuiteAmenity {
  id: AmenityId;
  label: string;
}

export interface SuiteDetailConfig {
  bathrooms?: number;
  description?: string;
  extraAmenities?: readonly SuiteAmenity[];
  nightlyRate?: { amount: number; currency: string };
  highlights?: {
    introduction?: string;
    features?: readonly string[];
    photoIds?: readonly string[];
  };
}

export type ResidenceGalleryCategory =
  "architecture" | "outdoor-spaces" | "interiors" | "ocean-views";

export interface ResidenceBenefit {
  icon: "waves" | "leaf" | "sun" | "bed" | "utensils" | "pin";
  label: string;
}

interface ResidenceSectionCopy {
  eyebrow?: string;
  heading: string;
  description?: string;
}

export interface ResidenceConfig {
  heroCopy?: { heading: string; subtitle?: string };
  architectureCopy?: ResidenceSectionCopy & { actionLabel?: string };
  experienceCopy?: ResidenceSectionCopy & {
    benefits?: readonly ResidenceBenefit[];
  };
  benefits?: readonly ResidenceBenefit[];
  bookingBanner?: {
    heading: string;
    description: string;
    photo?: PropertyImage;
  };
  hero?: PropertyImage;
  architecture?: PropertyImage;
  experience?: PropertyImage;
  gallery?: readonly {
    photo: PropertyImage;
    categories: readonly ResidenceGalleryCategory[];
    scope: "residence" | "private-suite" | "area";
    suiteId?: string;
  }[];
}

export type PropertyDetailsIcon =
  | "bed"
  | "pool"
  | "wifi"
  | "snowflake"
  | "kitchen"
  | "utensils"
  | "umbrella"
  | "leaf"
  | "grill"
  | "coast"
  | "shopping"
  | "car";

interface PropertyDetailsItem {
  id: string;
  label: string;
  icon: PropertyDetailsIcon;
}

type PropertyDetailsAmenity = PropertyDetailsItem &
  (
    | { scope: "common-area"; status: "demo-proposal" | "verified" }
    | { scope: "suite"; suiteAmenityId: AmenityId }
  );

export interface PropertyDetailsConfig {
  hero?: { heading: string; description: string; photo?: PropertyImage };
  mobile?: {
    heading?: string;
    description?: string;
    locationHeading?: string;
    facilities?: readonly {
      amenityId: string;
      label: string;
      photo: PropertyImage;
    }[];
  };
  highlights?: readonly (PropertyDetailsItem & {
    suiteAmenityId?: AmenityId;
  })[];
  amenities?: {
    description?: string;
    photo?: PropertyImage;
    groups: readonly {
      id: string;
      label: string;
      items: readonly PropertyDetailsAmenity[];
    }[];
  };
  location?: {
    areaLabel?: string;
    description: string;
    illustrativePhoto?: PropertyImage;
    nearby?: readonly {
      id: string;
      label: string;
      icon?: PropertyDetailsIcon;
      travelMinutes?: number;
      transport?: "walking" | "driving" | "transit";
    }[];
  };
  guestPhoto?: { photo: PropertyImage; suiteId: string };
  bookingBanner?: {
    heading: string;
    description: string;
    photo?: PropertyImage;
  };
}

export interface GuestPolicies {
  status: "demo-proposal" | "verified";
  checkInFrom?: string;
  checkOutBy?: string;
  parking?: {
    availability: "on-site" | "off-site" | "unavailable";
    description?: string;
  };
  smoking?: "allowed" | "no-smoking-in-suites" | "prohibited";
  pets?: "allowed" | "not-allowed" | "on-request";
  quietHours?: { from: string; until: string };
  registeredGuestsOnly?: boolean;
  partiesAndEvents?: "allowed" | "not-allowed" | "on-request";
  additionalHouseRules?: readonly string[];
}

type ContactFaqFact = "stay-times" | "parking" | "wifi" | "pets" | "occupancy";

export interface ContactFaqQuestion {
  id: string;
  question: string;
  answer: ({ text: string } | { fact: ContactFaqFact }) & {
    link?: { to: `/${string}`; label: string };
  };
}

export interface ContactPageConfig {
  hero: { heading: string; description: string; photo?: PropertyImage };
  information: {
    eyebrow: string;
    heading: string;
    description: string;
    unavailable: string;
    locationLabel?: string;
    decorativePhoto?: PropertyImage;
  };
  form: {
    heading: string;
    description: string;
    notice: string;
    submitLabel: string;
    resetLabel: string;
    confirmation: string;
    subjects: readonly { id: string; label: string }[];
  };
  faq: {
    heading: string;
    description: string;
    groups: readonly {
      id: string;
      heading: string;
      icon: "calendar" | "plane" | "bed";
      questions: readonly ContactFaqQuestion[];
    }[];
  };
  bookingBanner: {
    heading: string;
    description: string;
    photo?: PropertyImage;
  };
}

export type SuiteBenefitId = "location" | "access" | "comfort" | "stays";

export interface CatalogSuite {
  id: string;
  slug: string;
  name: string;
  summary?: string;
  gallery?: readonly PropertyImage[];
  maximumGuests?: number;
  bedrooms?: number;
  amenities?: readonly SuiteAmenity[];
  details?: SuiteDetailConfig;
  featured?: {
    order: number;
    description?: string;
    photo?: PropertyImage & { position: string };
  };
}

export interface PropertyConfig {
  kind: "fictional-demo" | "client" | "template";
  brand: {
    name: string;
    subtitle: string;
    logo?: string;
    favicon?: string;
    description: string;
  };
  location?: {
    city: string;
    region: string;
    country: string;
    timezone: string;
  };
  locale: string;
  home: {
    headline: readonly [string, string];
    description: string;
    mobileDescription?: string;
    hero?: PropertyImage;
    banner: {
      eyebrow: string;
      heading: string;
      description: string;
      photo?: PropertyImage;
    };
    discovery: Record<
      DiscoveryCardId,
      {
        heading: string;
        action: string;
        futurePath?: `/${string}`;
        description?: string;
        photo?: PropertyImage;
      }
    >;
  };
  residence?: ResidenceConfig;
  destinationGuide?: DestinationGuide;
  dining?: DiningConfig;
  propertyDetails?: PropertyDetailsConfig;
  guestPolicies?: GuestPolicies;
  accommodations?: {
    heading: string;
    introduction: string;
    hero?: PropertyImage;
    benefits?: {
      privateSuites?: string;
      capacity?: string;
      ocean?: string;
      outdoor?: string;
      location?: string;
    };
    bookingBanner?: {
      heading: string;
      description: string;
      photo?: PropertyImage;
    };
  };
  suiteDetails?: {
    benefits?: readonly {
      id: SuiteBenefitId;
      heading: string;
      description: string;
    }[];
    bookingBanner?: {
      heading: string;
      description: string;
      photo?: PropertyImage;
    };
  };
  contact?: {
    email?: string;
    telephone?: string;
    whatsapp?: string;
    address?: string;
    verified?: boolean;
    social?: Partial<Record<SocialChannel, `https://${string}`>>;
  };
  contactPage?: ContactPageConfig;
  suites: readonly CatalogSuite[];
  initialFeaturedSuiteId?: string;
  booking: {
    mode: "demo";
    guestCounts: readonly number[];
    earliestCheckIn?: string;
    latestCheckIn: string;
    latestCheckOut: string;
    minimumNights: number;
    description: string;
  };
  photos?: {
    directory: string;
    variants: Readonly<Record<string, readonly (readonly [number, number])[]>>;
  };
}

export type ClientPropertyConfig = PropertyConfig & { kind: "client" };
