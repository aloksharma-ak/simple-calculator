import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://aloksharma-ak.github.io/simple-calculator",
  plugins: [react()],
});
