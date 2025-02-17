import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/akvarium/", // Název tvého GitHub repozitáře
  plugins: [react()],
});
