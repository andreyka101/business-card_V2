import {resolve} from 'path'

export default {
  base: '/business-card_V2/',
  build: {
    rollupOptions: {
      input: {
        // @ts-ignore
        main: resolve(__dirname, 'index.html'),
        // @ts-ignore
        en: resolve(__dirname, '/src/login/log.html'),
      }
    }
  }
}
