module.exports = {
  devtool: 'inline-source-map',
  entry: ["./src/index.js"],
  output: {
    path: __dirname,
    publicPath: "/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: "babel"
      }
    ]
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  devServer: {
    contentBase: "./"
  }
};
