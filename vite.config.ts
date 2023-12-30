import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
// import devtools from 'solid-devtools/vite';
import UnocssPlugin from '@unocss/vite';
import inlineCssModules from 'vite-plugin-inline-css-modules'
import Icons from 'unplugin-icons/vite'

export default defineConfig({
  plugins: [
    Icons({
      compiler: 'solid',
    }),
    UnocssPlugin({}),
    solidPlugin(),
    inlineCssModules(),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
});
