declare const __SHOW_PREVIEW_CONTENT__: boolean;

// The development preview uses draft copy. Only Suite.summary can be published.
export const provisionalFeaturedDescriptions: Readonly<Record<string, string>> =
  __SHOW_PREVIEW_CONTENT__
    ? {
        "courtyard-suite":
          "A tranquil retreat with a private courtyard, modern comfort and coastal charm.",
        "oceanview-suite": "Description for Oceanview Suite is pending review.",
        "terrace-suite": "Description for Terrace Suite is pending review.",
        "garden-suite": "Description for Garden Suite is pending review.",
      }
    : {};
