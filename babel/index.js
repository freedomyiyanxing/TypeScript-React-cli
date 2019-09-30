const presets = [
  [
    "@babel/preset-env",
    {
      useBuiltIns: "entry",
      corejs: "3.0.0",
      targets: {
        chrome: "58",
        ie: "11"
      }
    }
  ],
  "@babel/preset-react"
];

const plugins = [
  // [
  //   'babel-plugin-import',
  //   {
  //     'libraryName': '@material-ui/core',
  //     'libraryDirectory': 'esm',
  //     'camel2DashComponentName': false
  //   },
  //   'core',
  // ]
];

const env = {
  development: {
    plugins: ["react-hot-loader/babel"]
  }
};

module.exports = {
  presets, plugins, env
};
