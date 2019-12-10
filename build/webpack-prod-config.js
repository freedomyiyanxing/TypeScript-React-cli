const webpackMerge = require("webpack-merge");
// const path = require('path')
// const webpack = require('webpack')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const webpackBase = require("./webpack-base-config");

module.exports = webpackMerge(webpackBase, {
  mode: "production",
  output: {
    publicPath: "/"
  },
  // module: {
  //   rules: [
  //   ]
  // },
  plugins: []
  // optimization: {
  //   splitChunks: {
  //
  //   },
  // },
});
