const path = require("path");
const withSass = require("@zeit/next-sass");

module.exports = withSass({
  // 開啟css模組化
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    // scoped class 格式
    localIdentName: "[local]__[hash:base64:5]",
  },
  webpack: (config) => {
    config.resolve.modules.push(path.resolve("./"));
    return config;
  },
});
