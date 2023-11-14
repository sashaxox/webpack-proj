const path = require("path");

module.exports = (env) => {
  return {
    mode: env.mode ?? "development",
    entry: "./src/index.js",
    output: {
      filename: "[name].[contenthash].js",
      path: path.resolve(__dirname, "build"),
      clean: true,
    },
  };
};
