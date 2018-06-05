// https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy
const path = require('path')

const resolve = dir => path.resolve(__dirname, dir)

const publicPath = process.env.NODE_ENV === 'development'
    ? '/' : './'

module.exports = {
    baseUrl: resolve('src/renderer'),
    outputDir: 'dist',
    devServer: {
        // open: process.platform === 'darwin',
        open: false,
        // host: '0.0.0.0',
        port: 8080,
        https: false,
        hotOnly: false,
        // before: app => {
        //     // app is an express instance
        // },
        proxy: {
            '/tr/*': {
                target: 'https://translate.google.cn',
                xfwd: true,
                changeOrigin: true,
                pathRewrite: {'^/tr/*': 'translate_a/single'}
            }
        }
    },
    lintOnSave: true,
    configureWebpack: {
        entry: resolve('src/renderer/main.ts'),
        output: {
            path: resolve('dist'),
            publicPath
        },
        resolve: {
            alias: {
                '@': resolve('src/renderer'),
                '@a': resolve('src/renderer/assets'),
                '@c': resolve('src/renderer/components'),
                '@v': resolve('src/renderer/views'),
                '@u': resolve('src/renderer/utils')
            }
        }
    }
}
