import handlebars from 'vite-plugin-handlebars';
import { defineConfig } from "vite";
import { resolve } from 'path';
export default defineConfig({
  root: resolve(__dirname, './src'),
  build: {
    outDir: resolve(__dirname, 'dist'),
  },
  plugins: [handlebars()],
});
