const css = require("@zeit/next-css");
const generateScopedName = require("./generateScopedName");

module.exports = [
  css,
  {
    // 開啟css模組化
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      // scoped class 格式
      getLocalIdent: (context, localIdentName, localName) =>
        generateScopedName(localName, context.resourcePath),
    },
  },
];
