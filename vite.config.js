import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import eslint from "vite-plugin-eslint";

export default defineConfig(() => {
  return {
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      type: "module",
      outDir: "build",
    },
    plugins: [
      react({ include: "**/*.jsx" }),
      svgr({ svgrOptions: { icon: true } }),
      eslint(),
    ],
  };
});

// which allows you to import from folders under the /src folder
// import Button from '~/components/Button';
