var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
  entry: "./index.js",
  output: {
    path: './',
    filename: "bundle.js" // no hash in bundle.js because index.html is a static page
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: 'style!css'},

//{test: /\.css$/, loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader' })},
      {test: /\.png$/, loader: "url-loader?prefix=img/&limit=5000"},
      {test: /\.jpg$/, loader: "url-loader?prefix=img/&limit=5000"},
      {test: /\.gif$/, loader: "url-loader?prefix=img/&limit=5000"}
    ]
  },

  plugins: [
    // Reference: http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
    // Minify all javascript, switch loaders to minimizing mode
    new webpack.optimize.UglifyJsPlugin()
    //new ExtractTextPlugin("style-built.css")
  ]
};
