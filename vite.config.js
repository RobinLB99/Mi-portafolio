import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    scripts: {
        dev: "vite",
        build: "vite build",
        preview: "vite preview",
    },
    root: "./",
    build: {
        outDir: "./dist",
    },
    server: {
        port: 8081,
    },
});
