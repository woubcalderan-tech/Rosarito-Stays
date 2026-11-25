import { suites } from "../data/suites";
export function listSuites() {
  return suites;
}
export function getSuite(slug: string | undefined) {
  return suites.find((suite) => suite.slug === slug);
}
