const webpack = require("webpack");
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        app: "/src/server/app.js",
        worker: "/src/worker/app.js"
    },
    externals: ["ws", "socket.io"],
    devtool: "inline-source-map",
    output: {
        path: path.resolve(__dirname, "/dist"),
        filename: "[name].js"
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          }
        ]
      },
    devServer: {
        hot: true,
        port: 3000,
        host: 'localhost'
    },
    plugins: [
        //new HtmlWebPackPlugin({
        //    inject: true,
        //    template: "./src/client/templates/index.html"
        //}),
        new webpack.HotModuleReplacementPlugin(),
    ]
};