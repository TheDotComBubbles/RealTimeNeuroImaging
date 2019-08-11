const webpack = require("webpack");
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        app: "./src/client/app.js",
    },
    externals: ["ws", "socket.io"],
    devtool: "inline-source-map",
    output: {
        path: path.resolve(__dirname, "../server/public"),
        filename: "[name].js",
        publicPath: "/public",
        hotUpdateChunkFilename: 'hot/hot-update.js',
        hotUpdateMainFilename: 'hot/hot-update.json'
    },
    module: {
        rules: [
          {
            test: /\.(s*)css$/,
            use: [
                { loader: "style-loader" }, 
                { loader: "css-loader" }, 
                'sass-loader'
            ]
          },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          },
          {
            test: /\.html$/,
            use: [
              {
                loader: "html-loader"
              }
            ]
          }
        ]
      },
    devServer: {
        hot: true,
        port: 3001
    },
    plugins: [
        new HtmlWebPackPlugin({
            inject: true,
            template: "./src/client/templates/index.html"
        }),
        new webpack.HotModuleReplacementPlugin(),
    ]
};