const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./starter/src/js/index.js",
  output: {
    path: path.resolve(__dirname, "starter/dist"),
    filename: "js/bundle.js"
  },
  devServer: {
    contentBase: "./starter/dist"
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./starter/src/index.html"
    })
  ]
};
