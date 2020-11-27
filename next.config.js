const path = require("path");
const withSass = require("@zeit/next-sass");
const genericNames = require("generic-names");

const generate = genericNames("[local]__[hash:base64:5]", {
  context: process.cwd(),
});

const generateScopedName = (localName, filePath) => {
  var relativePath = path.relative(process.cwd(), filePath);
  return generate(localName, relativePath);
};

module.exports = withSass({
  // 開啟css模組化
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    // scoped class 格式
    // localIdentName: "[local]__[hash:base64:5]",
    getLocalIdent: (context, localIdentName, localName) =>
      generateScopedName(localName, context.resourcePath),
  },
  webpack: (config) => {
    // 全域性變數和mixin
    config.module.rules.push({
      enforce: "pre",
      test: /.scss$/,
      loader: "sass-resources-loader",
      options: {
        resources: ["./styles/variables.scss"],
      },
    });

    return config;
  },
});
