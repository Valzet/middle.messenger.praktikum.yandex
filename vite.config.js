import handlebars from 'vite-plugin-handlebars';
import { defineConfig } from "vite";
import { resolve } from 'path';

export default defineConfig({
  root: resolve( './src'),
  build: {
    outDir: resolve( './dist'),
  },
  plugins: [handlebars()],
});
