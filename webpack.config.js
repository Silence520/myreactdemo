const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const env =process.env.NODE_ENV
if(env=="production"){

}else if(env=="development"){

}

module.exports = {
    // cheap-module-source-map
    // hidden-source-map
    devtool: 'cheap-module-source-map', //生成Source Maps,这里选择eval-source-map
    entry:{
            app:__dirname + '/src/app.js', //唯一入口文件
            lib: [ 'react', 'react-dom', 'react-router-dom', 'react-redux','prop-types','redux'],

    },
    output: {
        path: __dirname + '/dist/',
        // publicPath: '/dist/',
        filename: 'app.bundle.js'
    },
    module: {
        rules: [{
                test: /\.js?$/,
                exclude: /node_modules/, //屏蔽不需要处理的文件（文件夹）（可选）
                use: [
                          "babel-loader"
                        ],
            },
            {
                  test: /\.(jpe?g|png|gif|svg)$/i,
                  use: [
                    'url-loader?limit=1000',
                    'img-loader'
                  ]
                },
            {
                       test: /\.css$/,
                        exclude: /node_modules/,
                        use: ExtractTextPlugin.extract({
                            fallback: "style-loader",
                            use: [{
                                loader: 'postcss-loader',
                            }]
                        })
            }
        ]
    },
    devServer: {
        contentBase: '.',
        port: 9999,
        open: true,
        historyApiFallback: false,
        host: '127.0.0.1',
        overlay:{
            errors:true,
            warning:true
        }
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
        }
    },
    plugins:[
        new webpack.ProvidePlugin({
            React: 'react',
            ReactDOM: 'react-dom',
            PropTypes: 'prop-types',
        }),
        new HtmlWebpackPlugin({
            filename: __dirname + '/dist/index.html',
            template: 'index.html',
            title: 'hello webpack',
            inject:true,
            minify: {
                removeComments: true,
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false
            },
            compress: {
                warnings: false
            }
        }),
        new ExtractTextPlugin('styles/lib.bundle.css',{allchunks:true}),
        new webpack.optimize.CommonsChunkPlugin({ name: 'lib', filename: 'lib.bundle.js', minChunks: Infinity })
   ]
};