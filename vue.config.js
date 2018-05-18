// https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy
module.exports = {
    devServer: {
        open: process.platform === 'darwin',
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
    }
}