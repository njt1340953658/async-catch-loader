require("babel-polyfill");
const path = require("path");
const webpack = require("webpack");
const Memoryfs = require("memory-fs");
module.exports = (entry, options = {}) => {
  const compiler = webpack({
    context: __dirname,
    entry: `./${entry}`,
    output: {
      path: path.resolve(__dirname),
      filename: "bundle.js"
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: {
            loader: path.resolve(__dirname, "../lib/index.js"),
            options
          }
        }
      ]
    }
  });

  compiler.outputFileSystem = new Memoryfs();

  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) reject(err);
      resolve(stats);
    });
  });
};
