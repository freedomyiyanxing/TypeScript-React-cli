const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'production',
  entry: {
    vendor: [
      'react',
      'react-dom'
    ],
  },
  output: {
    path: path.join(__dirname, '../static/js'),
    filename: '[name]_library_[chunkhash].js',
    library: '[name]_library',
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, '../static/json/[name]-manifest.json'),
      name: '[name]_library',
      context: path.join(__dirname, '..'),
    })
  ]
}
