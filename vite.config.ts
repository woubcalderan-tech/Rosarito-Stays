import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { githubReview, reviewBase } from "./build/github-review.ts";

export default defineConfig(({ command, isPreview, mode }) => {
  const review = mode === "review";
  return {
    base: review ? reviewBase : "/",
    build: { outDir: review ? "dist-review" : "dist" },
    plugins: [
      react(),
      tailwindcss(),
      ...(review && command === "build" ? [githubReview()] : []),
    ],
    define: {
      __SHOW_PREVIEW_CONTENT__: review || (command === "serve" && !isPreview),
    },
  };
});
