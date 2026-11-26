import { copyFile, mkdir, readFile } from "node:fs/promises";
import { resolve } from "node:path";
import type { Plugin } from "vite";
import { paths, suitePath } from "../src/config/site.ts";
import { suites } from "../src/data/suites.ts";

export const reviewBase = "/Rosarito-Stays/";

// Only the optimized variants used by the approved homepage belong in the review.
const reviewPhotos = {
  "hero-pool": [640, 1100],
  "hero-pool-mobile": [480, 720],
  "featured-oceanview": [640, 1056, 1440],
  "featured-bedroom": [640, 1056, 1440],
  "featured-terrace": [640, 1056, 1440],
  "featured-garden": [640, 1056, 1440],
  coastline: [360, 720],
  "coastline-portrait": [320, 640],
  "dining-area": [360, 720],
  "dining-portrait": [320, 640],
  "discovery-garden": [360, 720],
};

export function githubReview(): Plugin {
  return {
    name: "rosarito-github-review",
    async generateBundle() {
      const variants = Object.entries(reviewPhotos).flatMap(([name, widths]) =>
        widths.map(
          (width) => `src/assets/images/placeholders/${name}-${width}.webp`,
        ),
      );

      await Promise.all(
        variants.map(async (fileName) => {
          this.emitFile({
            type: "asset",
            fileName,
            source: await readFile(fileName),
          });
        }),
      );
    },
    transformIndexHtml() {
      return [
        {
          tag: "style",
          children:
            ".review-notice{margin:0;padding:.6rem 1rem;border-top:1px solid #d8cbb9;background:#f4ece2;color:#352013;font:400 .75rem/1.5 system-ui,sans-serif;text-align:center}",
        },
        {
          tag: "aside",
          attrs: {
            class: "review-notice",
            "aria-label": "Design preview notice",
          },
          children:
            "Design preview. Photographs are temporary. Mobile optimization is unfinished. Reservations and payments are not functional.",
          injectTo: "body",
        },
      ];
    },
    async writeBundle(output) {
      // Physical Pages entry points give known routes HTTP 200 on direct visits.
      const outDir = output.dir!;
      const index = resolve(outDir, "index.html");
      const routes = [
        ...Object.values(paths),
        ...suites.map(({ slug }) => suitePath(slug)),
      ];

      await Promise.all(
        routes
          .filter((route) => route !== paths.home)
          .map(async (route) => {
            const dir = resolve(outDir, route.slice(1));
            await mkdir(dir, { recursive: true });
            await copyFile(index, resolve(dir, "index.html"));
          }),
      );
      await copyFile(index, resolve(outDir, "404.html"));
    },
  };
}
