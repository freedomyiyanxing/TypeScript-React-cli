const path = require("path");
const ip = require("ip");
const webpackMerge = require("webpack-merge");
// const webpack = require('webpack')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const webpackBase = require("./webpack-base-config");

module.exports = webpackMerge(webpackBase, {
  mode: "development",
  devtool: "eval-source-map",
  output: {
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        include: path.join(__dirname, "../src"),
        exclude: path.join(__dirname, "../node_modules"),
        use: [
          "source-map-loader",
          {
            loader: "eslint-loader",
            options: {
              formatter: require("eslint-friendly-formatter"),
              emitWarning: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        include: path.join(__dirname, "../src"),
        use: [
          "style-loader",
          "css-loader"
        ]
      }
    ]
  },
  plugins: [],
  devServer: {
    host: ip.address(),
    port: 8088,
    hot: true,
    overlay: {
      warnings: true,
      errors: true
    },
    contentBase: path.join(__dirname, "../dist"),
    // publicPath: '/', // 默认 '/'
    historyApiFallback: {
      index: "/index.html"
    },
    proxy: {
      "/business": {
        target: "http://192.168.1.20:8089"
      }
    }
  }
});
