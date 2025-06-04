// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/counter/", // <-- Match this to your GitHub repo name (case-sensitive!)
  plugins: [react()],
});
