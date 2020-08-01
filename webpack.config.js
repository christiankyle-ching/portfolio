const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images'
            }
          }
        ]
      },
      {
        test: /\.html$/i,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true }
          }
        ]
      }
      
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
      favicon: './src/images/favicon.png'
    }),
    new HtmlWebpackPlugin({
      template: './src/works.html',
      filename: './works.html',
      favicon: './src/images/favicon.png'
    }),
    new HtmlWebpackPlugin({
      template: './src/about.html',
      filename: './about.html',
      favicon: './src/images/favicon.png'
    }),
  ],

  devtool: 'inline-source-map',
};
