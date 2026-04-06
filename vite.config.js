import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/youtube-search": {
        target: "https://suggestqueries.google.com",
        changeOrigin: true,
        secure: true,
        rewrite: (path) =>
          path.replace("/youtube-search", "/complete/search"),
      },
    },
  },
});