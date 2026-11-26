import { propertyImage } from "../assets/images/homepage";
import { property } from "../config/site";
import type { Suite } from "../types/content";

const suites: readonly Suite[] = property.suites.map(
  ({ gallery, featured, ...suite }) => ({
    ...suite,
    images: gallery?.map((photo) =>
      propertyImage(photo, "(width < 48rem) 100vw, 55vw"),
    ),
    featured: featured && {
      order: featured.order,
      description: featured.description,
      photo: featured.photo && {
        image: propertyImage(featured.photo, "(width < 64rem) 100vw, 65.2vw"),
        position: featured.photo.position,
      },
    },
  }),
);

export function listSuites() {
  return suites;
}

export function listFeaturedSuites() {
  return suites
    .filter((suite) => suite.featured !== undefined)
    .sort((first, second) => first.featured!.order - second.featured!.order);
}

export function getSuite(slug: string | undefined) {
  return suites.find((suite) => suite.slug === slug);
}
