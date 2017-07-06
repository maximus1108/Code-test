var config = require('../config/webpack.config.dev.js');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server')
var path = require("path");


// compile config for dev server
var compiler = webpack(config);

var server = new WebpackDevServer(compiler, {
  // allow hot module replacement
  hot: true,
  //set root for server
  contentBase: path.resolve(__dirname.replace(/scripts/, ""), "static"),
  //set path for server to watch for updates
  publicPath: "/src/",

  disableHostCheck: true
});

//listen on port
server.listen(8080);
