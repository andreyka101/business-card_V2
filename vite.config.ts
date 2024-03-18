import {resolve} from 'path'

export default {
  base: '/business-card_V2/',
  build: {
    rollupOptions: {
      input: {
        // @ts-ignore
        main: resolve(__dirname, 'index.html'),
        // @ts-ignore
        log: resolve(__dirname, '/src/login/log.html'),
        // @ts-ignore
        reg: resolve(__dirname, '/src/registration/reg.html'),
      }
    }
  }
}
