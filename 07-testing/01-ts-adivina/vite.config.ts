import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import type { UserConfig as VitestUserConfigInterface } from "vitest/config";

const vitestConfig: VitestUserConfigInterface = {
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["src/setuptest.ts"],
  },
};

export default defineConfig({
  plugins: [checker({ typescript: true })],
  test: vitestConfig.test,
});