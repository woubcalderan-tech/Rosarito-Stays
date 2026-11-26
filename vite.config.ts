import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { githubReview, reviewBase } from "./build/github-review.ts";
import { rosaritoDemo } from "./src/config/rosarito-demo.ts";
import { standardProperty } from "./src/config/standard-property.ts";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export default defineConfig(({ command, isPreview, mode }) => {
  const review = mode === "review";
  const profile =
    review || (command === "serve" && !isPreview)
      ? rosaritoDemo
      : standardProperty;
  return {
    base: review ? reviewBase : "/",
    build: { outDir: review ? "dist-review" : "dist" },
    plugins: [
      react(),
      tailwindcss(),
      {
        name: "rosarito-property-metadata",
        transformIndexHtml: {
          order: "pre",
          handler(html) {
            return {
              html: html
                .replace(
                  '<html lang="en">',
                  () => `<html lang="${escapeHtml(profile.locale)}">`,
                )
                .replace(
                  "<title></title>",
                  () => `<title>${escapeHtml(profile.brand.name)}</title>`,
                ),
              tags: profile.brand.favicon
                ? [
                    {
                      tag: "link",
                      attrs: { rel: "icon", href: profile.brand.favicon },
                    },
                  ]
                : [],
            };
          },
        },
      },
      ...(review && command === "build"
        ? [githubReview(rosaritoDemo.suites)]
        : []),
    ],
    define: {
      __PROPERTY_CONFIG__: JSON.stringify(profile),
      __SHOW_PREVIEW_CONTENT__: profile.kind === "fictional-demo",
    },
  };
});
