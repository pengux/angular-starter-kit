var path = require('path');
module.exports = {
  cache: true,
  entry: {
    app: './app/scripts/app.js'
  },
  output: {
    path: path.join(__dirname, 'app/scripts'),
    publicPath: 'scripts/',
    filename: 'main.js',
    chunkFilename: '[chunkhash].js'
  },
  module: {
    loaders: [
      // required to write 'require('./style.css')'
      { test: /\.css$/,    loader: 'style-loader!css-loader' },

      // required for bootstrap icons
      { test: /\.woff$/,   loader: 'url-loader?prefix=font/&limit=5000&mimetype=application/font-woff' },
      { test: /\.ttf$/,    loader: 'file-loader?prefix=font/' },
      { test: /\.eot$/,    loader: 'file-loader?prefix=font/' },
      { test: /\.svg$/,    loader: 'file-loader?prefix=font/' },

    ]
  },
  resolve: {
    root: [
      path.resolve('app', 'scripts'),
      path.resolve('app', 'bower_components'),
    ],
    alias: {
      angular: 'angular/angular.js',
      ngRoute: 'angular-route/angular-route.js',
    }
  }
};
