const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: ["./src/script.js"],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          plugins: ["transform-runtime"],
          presets: ["es2015"]
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS
        ]
      },
      {
        test: /\.(png|svg|jpg|gif|ttf|woff|eot)$/,
        loader: "url-loader"
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      d3: "d3"
    }),
    new HtmlWebpackPlugin({
      title: "D3 Webpack Starterkit"
    })
  ],
  devtool: "#cheap-module-source-map",
  devServer: {
    port: 9000,
    contentBase: path.join(__dirname, "dist")
  }
};
