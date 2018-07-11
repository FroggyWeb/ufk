import gulp    from 'gulp'
import Browser from 'browser-sync'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'


import { config as webpackConfig } from './webpack'

const browser = Browser.create()
const bundler = webpack(webpackConfig)
const reload = browser.reload;

function server() {

    let config = {
        server: {
            baseDir: "./",
            directory: true
        },
        files: [
          './site/css/*.css',
          './site/*.html'
        ],
        module: "bs-html-injector",
            options: {
                files: ["./site/*.html"]
            },
        plugins: ['bs-fullscreen-message'],
        open: false,
        middleware: [
            webpackDevMiddleware(bundler, {
                stats: { colors: true },
                publicPath: webpackConfig.output.publicPath
            }),
            webpackHotMiddleware(bundler)
        ],
    }

    Browser(config)


    // gulp.watch('site/js/*.js').on('change', () => browser.reload());
}

// export const reload = calback => {
//   browser.reload;
//   calback();
// };

export { Browser, server, reload };


