const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  output: {
    filename: "index.js",
  },
  plugins: [new HtmlWebpackPlugin()],
};
