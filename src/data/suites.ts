import type { Suite } from "../types/content";
// Reference names are sufficient to test the local navigation.
export const suites: readonly Suite[] = [
  { slug: "oceanview-suite", name: "Oceanview Suite" },
  { slug: "courtyard-suite", name: "Courtyard Suite" },
  { slug: "terrace-suite", name: "Terrace Suite" },
  { slug: "garden-suite", name: "Garden Suite" },
];
export const featuredSuiteSlug = "courtyard-suite";
