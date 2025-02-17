import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/rybicky/", // ⚠️ Důležité! Nastav správnou cestu podle názvu repozitáře
  plugins: [react()],
});
