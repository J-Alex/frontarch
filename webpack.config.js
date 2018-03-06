/*
*   -Separar el servidor.
*   -Archivo de configuracion de entornos Dev y Prod.
*   -Script build de los assets státicos
*   -Watch Livereload para vistas .html
*   -Update a la v3 y posteriormente a la v4
*   -HotReloading de módulos?
*   -CLI Scaffolding para subir a Yeoman 
*/

const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
//const webpackUglifyJsPlugin = require('webpack-uglify-js-plugin')

module.exports = {
    devtool: 'source-map',
    entry: './src/pack.js',
    output: {
        path: path.resolve(__dirname, 'public/res/js/'),
        filename: 'script.min.js',
        publicPath: '/res/js/'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        compress: true,
        //useLocalIp: true,
        host: '127.0.0.1',
        port: 7500,
        open: true,
        /*bonjour: true,*/
        //stats: 'errors-only'
    },
    module: {
        rules:[
            {
                test: /\.s[ac]ss$/,
                use: ExtractTextPlugin.extract({
                  fallback: 'style-loader',
                  use: [
                      {
                        loader: 'css-loader',
                        options: { url: false }
                      },
                      'sass-loader'
                  ]
                })
            },
            { 
                test: /\.js$/,
                exclude: /node_modules/,
                use:[
                    { loader: 'ng-annotate-loader' },
                    { loader: 'nginject-loader' },
                    { loader: "babel-loader" }
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('styles.min.css'),
        /*new webpack.optimize.UglifyJsPlugin({
            uglifyOptions: {
                sourceMap: true,
                beautify: false,
                ecma: 6,
                compress: true,
                comments: false
            }
        }),*/
        new webpack.LoaderOptionsPlugin({ minimize: true }),
        new webpack.ProvidePlugin({   
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery',
            'window.jQuery': 'jquery'
        })
    ]
};
