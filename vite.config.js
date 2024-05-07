import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    tailwindcss: "./tailwind.config.js",
    postcss: "./postcss.config.js",
  },
});
