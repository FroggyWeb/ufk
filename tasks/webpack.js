import path    from 'path'
import webpack from 'webpack'
import process from 'process'

const isProduction = (process.env.NODE_ENV ) ? true : false;

let config = {
    mode: isProduction ? 'production' : 'development',

    // I would recommend using different config variables
    // depending on the eviroment.
    // The package 'webpack-merge' can help with that.
    // This tenary setup is just for simplicity sake.
    entry: isProduction ? {
        main: './js/main.js'
    } : {
        main: [
            './js/main.js',
            'webpack-hot-middleware/client?reload=true'
        ],
        hot: [
            'webpack/hot/dev-server'
        ]
    },

    output: {
        filename: './js/[name]-bundle.js',
        path: path.resolve(__dirname, '../site/'),
        publicPath: '/site/'
    },

    context: path.resolve(__dirname, '../site/'),

    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
          'vue$': 'vue/dist/vue.esm.js',
      }
    },

    module: {
      rules: [
        {
            test: /\.js?$/,
            loader: "babel-loader"
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          use: [
            {
              loader: 'file-loader',
              options: {name: '../img/[name].[ext]'}
            }
          ]
        },

      ]
    },

    stats: 'errors-only',

    devtool: isProduction ? 'sourcemap' : 'eval-sourcemap',

    externals: {
      jquery: 'jQuery'
    },

    plugins: isProduction ? [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        })

    ] : [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            'window.jQuery': "jquery",
            'window.$': "jquery",
            _: "underscore"
        })
    ]
}


function scripts() {
    return new Promise(resolve => webpack(config, (err, stats) => {
      if(err) console.log('Webpack', err)
      console.log(stats.toString({ /* stats options */ }))
      resolve()
    }))
}

module.exports = { config, scripts }
