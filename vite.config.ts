import { defineConfig as defineLovableConfig } from "@lovable.dev/vite-tanstack-config";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig as defineViteConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

const isVercelBuild = process.env.VERCEL === "1";

export default isVercelBuild
  ? defineViteConfig({
      plugins: [tsConfigPaths(), tailwindcss(), tanstackStart(), nitro({ preset: "vercel" }), viteReact()],
    })
  : defineLovableConfig();
