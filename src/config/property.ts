export type DiscoveryCardId = "explore" | "property" | "dining";
export type SocialChannel = "instagram" | "facebook" | "youtube";

export interface PropertyImage {
  id: string;
  alt: string;
  mobileId?: string;
  position?: string;
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
    address?: string;
    social?: Partial<Record<SocialChannel, `https://${string}`>>;
  };
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
