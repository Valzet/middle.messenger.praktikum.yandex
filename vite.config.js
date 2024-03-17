import handlebars from 'vite-plugin-handlebars';
import { defineConfig } from "vite";
import { resolve } from 'path';
import path from 'path';
export default defineConfig({
  root: resolve( './src'),
  build: {
    outDir: resolve( './dist'),
  },
  plugins: [handlebars()],
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
    alias: {
      assets: path.resolve(__dirname, 'src/assets'),
      components: path.resolve(__dirname, 'src/components'),
      pages: path.resolve(__dirname, 'src/pages'),
      utils: path.resolve(__dirname, 'src/utils'),
      data: path.resolve(__dirname, 'src/data' )
    },
  },
});
