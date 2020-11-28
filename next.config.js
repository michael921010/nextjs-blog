const withPlugins = require("next-compose-plugins");
const plugins = require("./plugins");

const nextConfig = {
  webpack: (config) => {
    // 全域性變數和mixin
    config.module.rules.push({
      enforce: "pre",
      test: /.scss$/,
      loader: "sass-resources-loader",
      options: {
        resources: ["./src/styles/variables.scss"],
      },
    });

    return config;
  },
};

module.exports = withPlugins(plugins, nextConfig);
