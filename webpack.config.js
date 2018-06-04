const { resolve } = require('path')

module.exports = {
    // entry: resolve(__dirname, "src/index.js"),
    entry: "./src/index",
    output: {
        filename: "build.js",
        publicPath: resolve(__dirname, "./dist/")
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: "babel-loader",
            query: {
                presets: ['es2015', "stage-3"]
            }
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [],
    devtool: 'eval-source-map',
    devServer: {
        contentBase: "./", //本地服务器所加载的页面所在的目录
        colors: true, //终端中输出结果为彩色
        historyApiFallback: true, //不跳转
        inline: true //实时刷新
    }
};