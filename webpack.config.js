var path = require('path');
module.exports = {
    //注意这里是exports不是export
    devtool: 'eval-source-map', //生成Source Maps,这里选择eval-source-map
    entry: __dirname + '/src/app.js', //唯一入口文件
    output: {
        // //输出目录
        // path: __dirname + '/build', //打包后的js文件存放的地方
        // filename: 'bundle.js' //打包后的js文件
        path: __dirname + '/dist/',
        publicPath: '/dist/',
        filename: 'lib.bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/, //屏蔽不需要处理的文件（文件夹）（可选）
                loader: 'babel-loader'
            }
        ]
    },
    devServer: {
        contentBase: '.',
        port: 9999,
        open: true,
        historyApiFallback: false,
        host: '127.0.0.1'
    },
    resolve: {
        extensions: ['.web.js', '.js', '.jsx', '.json'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
        }
    },
};
