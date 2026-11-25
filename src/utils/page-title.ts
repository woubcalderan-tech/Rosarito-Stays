import { site } from "../config/site";
export function pageTitle(title?: string) {
  return title ? `${title} | ${site.name}` : site.name;
}
