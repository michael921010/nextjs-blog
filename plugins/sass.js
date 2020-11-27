const sass = require("@zeit/next-sass");
const generateScopedName = require("./generateScopedName");

module.exports = [
  sass,
  {
    // 開啟css模組化
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      // scoped class 格式
      // localIdentName: "[local]__[hash:base64:5]",
      getLocalIdent: (context, localIdentName, localName) =>
        generateScopedName(localName, context.resourcePath),
    },
  },
];
