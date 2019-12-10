const path = require("path");
const os = require("os");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const { dllScript } = require("./config");

module.exports = {
  entry: {
    app: [path.join(__dirname, "../src/index.tsx")]
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "js/[name]-[hash].js"
  },

  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      '@my-common': path.join(__dirname, '../src/common'),
      '@my-base': path.join(__dirname, '../src/base'),
      '@my-components': path.join(__dirname, '../src/components'),
      '@my-router': path.join(__dirname, '../src/router'),
      '@my-store': path.join(__dirname, '../src/store'),
      '@my-pages': path.join(__dirname, '../src/pages')
    }
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        include: path.join(__dirname, "../src"),
        exclude: path.join(__dirname, "../node_modules"),
        use: [
          "cache-loader", // npm -> https://www.npmjs.com/package/cache-loader
          {
            loader: "thread-loader", // npm -> https://www.npmjs.com/package/thread-loader
            options: {
              workers: os.cpus().length - 1,
              poolTimeout: Infinity
            }
          },
          {
            loader: "ts-loader", // npm -> https://www.npmjs.com/package/ts-loader
            options: {
              happyPackMode: true, // 使用多进程打包, 需要开启的当前配置, (具体看文档)
              transpileOnly: true // 禁用ts-loader上的类型检查
            }
          }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        include: path.join(__dirname, "../src"),
        exclude: path.join(__dirname, "../node_modules"),
        use: [
          {
            loader: "babel-loader", // https://babeljs.io/docs/en/usage
            options: {
              babelrc: false, // 不读取.babelrc文件
              configFile: path.join(__dirname, "../babel/index.js") // 引用配置文件
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // 操作html
    new HtmlWebpackPlugin({
      dllScript,
      title: "store decoration",
      filename: "index.html",
      template: path.join(__dirname, "../src/index.html"),
      favicon: path.join(__dirname, "../src/base/images/favicon.ico"),
      meta: {
        viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
        "theme-color": "#4285f4"
      }
    }),
    // 引用 dll
    new webpack.DllReferencePlugin({
      context: path.join(__dirname, ".."),
      manifest: require("../static/json/vendor-manifest.json")
    }),
    // 拷贝
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, "../static"),
        to: path.join(__dirname, "../dist")
      }
    ]),
    // 开启一个单独的进程 运行ts类型检查
    new ForkTsCheckerWebpackPlugin()
    // new BundleAnalyzerPlugin({ // 可视化工具 http://127.0.0.1:8888
    //   analyzerMode: 'server',
    //   analyzerHost: '127.0.0.1',
    //   analyzerPort: 7788,
    //   reportFilename: 'report.html',
    //   defaultSizes: 'parsed',
    //   openAnalyzer: true,
    //   generateStatsFile: false,
    //   statsFilename: 'stats.json',
    //   logLevel: 'info'
    // })
  ],
  optimization: {
    // runtimeChunk: {
    //   name: 'manifest',
    // },
    splitChunks: { // 分块打包
      chunks: "all", // 同时分割同步和异步代码
      cacheGroups: {
        vendors: { // 打包 node_modules 下的第三方包, 打入vendors.js (除按需加载的)
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          minSize: 30000, // 生成包的大小 以字节为单位
          // maxInitialRequests: 3, // 初始页面加载时并行请求的最大数量将小于或等于4 默认是3 (意思打开第一个页面的js不许超过3个请求)
          minChunks: 1,
          chunks: "initial" // 设置为 all 会导致异步加载的库如果满足了当前 cacheGroups 的条件也会导致被打包到一起
          // priority: 1 // 该配置项是设置 cacheGroups 分组处理的优先级，数值越大越优先处理 (默认 -10)
        }
        // rcCalendarBase: { // 把 rc-calendar、moment 打入  calender-moment-base.js
        //   name: 'calender-moment-base',
        //   test: (module) => {
        //     return /rc-calendar|moment/.test(module.context)
        //   },
        //   chunks: 'initial',
        //   priority: 2, // 优先 rcCalendarBase 打包
        // },
        // commons: { // 达不到 30kb 所以先注释
        //   test: /[\\/]src[\\/]common[\\/]/,
        //   name: 'commons',
        //   minSize: 30000,
        //   minChunks: 3,
        //   chunks: 'initial',
        //   priority: 1,
        //   reuseExistingChunk: true // 这个配置允许我们使用已经存在的代码块
        // },
        // momentBase: {
        //   name: 'moment-base',
        //   test: (module) => {
        //     return /moment/.test(module.context);
        //   },
        //   chunks: 'initial',
        //   priority: 1,
        // },
      }
    }
  }
};


