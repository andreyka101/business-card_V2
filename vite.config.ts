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
        reg: resolve(__dirname, '/src/login/reg.html'),
        // @ts-ignore
        client: resolve(__dirname, '/src/user/client.html'),
        // @ts-ignore
        admin: resolve(__dirname, '/src/user/admin.html'),
      }
    }
  }
}
