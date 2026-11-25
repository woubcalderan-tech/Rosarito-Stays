import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ command, isPreview }) => ({
  plugins: [react(), tailwindcss()],
  define: {
    __LOCAL_SAMPLE_PHOTOS__: command === "serve" && !isPreview,
  },
}));
