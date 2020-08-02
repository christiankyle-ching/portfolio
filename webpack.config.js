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
      // css loader
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      // sass/scss loader
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      // image loader
      {
        test: /\.(png|svg|jpg|webp)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images'
            }
          }
        ]
      },
      // html loader
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
