// https://github.com/vuejs/vue-cli/
const path = require('path')

const resolve = dir => path.resolve(__dirname, dir)

const publicPath = process.env.NODE_ENV === 'development'
    ? '/' : './'

module.exports = {
    baseUrl: resolve('src/renderer'),
    outputDir: 'dist',
    css: {
        // https://github.com/vuejs/vue-cli/blob/dev/docs/guide/css.md#passing-options-to-pre-processor-loaders
        loaderOptions: {
            sass: {
                data: `@import "src/renderer/scss/main.scss";`
                // loader: 'sass-resources-loader',
                // options: {
                //     // Provide path to the file with resources
                //     resources: 'src/renderer/scss/main.scss',
                // },
            }
        }
    },
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
            '/gt/*': {
                target: 'http://translate.google.cn',
                // xfwd: true,
                // secure: false,
                changeOrigin: true,
                pathRewrite: {'^/gt/*': ''}
                // pathRewrite: {'^/gt/*': 'translate_a/single'}
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
