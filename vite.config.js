import handlebars from 'vite-plugin-handlebars';
import { defineConfig } from "vite";
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
global.__dirname = dirname(__filename);

export default defineConfig({
  root: resolve(global.__dirname, './src'),
  build: {
    outDir: resolve(global.__dirname, 'dist'),
  },
  plugins: [handlebars()],
});
