import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";
import checker from "vite-plugin-checker";
import type { UserConfig as VitestUserConfigInterface } from "vitest/config";
import react from "@vitejs/plugin-react";

const vitestConfig: VitestUserConfigInterface = {
  test: {
    globals: true,
  },
};

export default defineConfig({
  plugins: [checker({ typescript: true }), react()],
  test: vitestConfig.test,
  css: {
    modules: {
      localsConvention: "camelCaseOnly",
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
