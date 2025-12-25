import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // same as 0.0.0.0 → allows access from Docker / LAN
    port: 5173, // optional, but matches your Docker port mapping
  },
});
