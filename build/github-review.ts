import { copyFile, mkdir, readFile } from "node:fs/promises";
import { resolve } from "node:path";
import type { Plugin } from "vite";
import {
  demoPhotoPath,
  demoPhotoVariants,
} from "../src/assets/images/demo-photo-variants.ts";
import type { DemoPhoto } from "../src/assets/images/demo-photo-variants.ts";
import { paths, suitePath } from "../src/config/routes.ts";
import type { CatalogSuite } from "../src/config/property.ts";

export const reviewBase = "/Rosarito-Stays/";

export function githubReview(suites: readonly CatalogSuite[]): Plugin {
  return {
    name: "rosarito-github-review",
    async generateBundle() {
      const variants = (Object.keys(demoPhotoVariants) as DemoPhoto[]).flatMap(
        (name) =>
          demoPhotoVariants[name].map(([width]) => demoPhotoPath(name, width)),
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
