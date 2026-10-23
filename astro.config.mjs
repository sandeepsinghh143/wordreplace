import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://wordreplace.com",
  server: {
    host: "0.0.0.0",
    port: 3000,
    allowedHosts: [".monkeycode-ai.live"],
  },
  vite: {
    server: {
      allowedHosts: [".monkeycode-ai.live"],
      headers: {
        "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
        Pragma: "no-cache",
        Expires: "0",
      },
    },
  },
});
