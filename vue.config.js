// https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy
const path = require('path')

const resolve = dir => path.resolve(__dirname, dir)

module.exports = {
    baseUrl: resolve('src/renderer'),
    devServer: {
        // open: process.platform === 'darwin',
        open: false,
        host: '0.0.0.0',
        port: 8080,
        https: false,
        hotOnly: false,
        // before: app => {
        //     // app is an express instance
        // },
        proxy: {
            '/api': {
                target: 'http://localhost:4000',
                ws: true,
                changeOrigin: true
            }
        }
    },
    lintOnSave: true,
    // chainWebpack: config => {
    //     config.resolve.alias
    //         .set('@', resolve('src/renderer'))
    // }
    configureWebpack: {
        entry: resolve('src/renderer/main.ts'),
        // output: {
        //     path: __dirname + "/cool-build"
        // },
        resolve: {
            alias: {
                '@': resolve('src/renderer'),
                '@a': resolve('src/renderer/assets'),
                '@c': resolve('src/renderer/components'),
                '@v': resolve('src/renderer/views')
            }
        }
    }
}