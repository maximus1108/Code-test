var path = require('path');
var webpack = require('webpack');

//remove 'config' from path to get root.
var root = __dirname.replace(/config/, "");

module.exports = {
    entry: [
      //append webpack-dev-server and hot module replacement to entry point
      //to allow for auto reloading when any dependancy is updated.
      "webpack-dev-server/client?http://localhost:8080/",
      "webpack/hot/dev-server",

      //entry point for app
      "./src/index.js"
    ],
    output: {

        //Set location for where bundled js should be served
        path: path.resolve(root, "static", "src"),
        filename: "bundle.js"

    },

    //loaders
    module: {
        loaders: [
            {
              test: /\.jsx?$/,
              exclude: path.resolve(root, "node_modules"),
              loader: "babel-loader"
            },
            {
              test: /\.less$/,
              exclude: path.resolve(root, "node_modules"),
              loaders: ["style-loader", "css-loader", "less-loader"]
            },
            {
              loader: "url-loader",
              test: /\.png|jpg$/i
            }
        ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
};
