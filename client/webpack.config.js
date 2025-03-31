const webpack = require("webpack");

module.exports = {
  resolve: {
    fallback: {
      process: require.resolve("process"),
      stream: require.resolve("stream-browserify"),
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
  ],
};
