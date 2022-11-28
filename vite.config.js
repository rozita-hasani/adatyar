import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),VitePWA()]
})

chainWebpack: config => {
  config.module
    .rule('vue')
    .use('vue-loader')
    .loader('vue-loader')
    .tap(options => {
      // modify the options...
      options.compilerOptions = { whitespace: 'condense' };
      return options;
    });
}
