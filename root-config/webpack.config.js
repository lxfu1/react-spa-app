const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (webpackConfigEnv, argv) => {
  return {
    mode: "development",
    entry: "./src/org-root-config",
    output: {
      filename: "org-root-config.js",
      libraryTarget: "system",
      path: path.resolve("./dist"),
      uniqueName: "root-config",
      devtoolNamespace: "root-config",
      publicPath: "",
    },
    module: {
      rules: [
        {
          test: /\.(js|ts)x?$/,
          exclude: /node_modules/,
          use: {
            loader: require.resolve("babel-loader"),
          },
        },
        {
          test: /\.css$/i,
          include: [/node_modules/, /src/],
          use: [
            {
              loader: require.resolve("style-loader"),
            },
            {
              loader: require.resolve("css-loader"),
              options: {
                modules: false,
              },
            },
          ],
        },
        {
          test: /\.(bmp|png|svg|jpg|jpeg|gif|webp)$/i,
          exclude: /node_modules/,
          type: "asset/resource",
        },
        {
          test: /\.html$/i,
          exclude: /node_modules/,
          type: "asset/source",
        },
      ],
    },
    devtool: "source-map",
    devServer: {
      compress: true,
      historyApiFallback: true,
      headers: { "Access-Control-Allow-Origin": "*" },
      allowedHosts: "auto",
      // client: { host: "localhost" },
    },
    externals: ["single-spa"],
    plugins: [
      new HtmlWebpackPlugin({
        inject: false,
        template: "src/index.ejs",
        templateParameters: {
          isLocal: webpackConfigEnv && webpackConfigEnv.isLocal,
          orgName: "org1",
        },
      }),
    ],
    resolve: {
      extensions: [".mjs", ".js", ".jsx", ".wasm", ".json", ".ts", ".tsx"],
    },
  };
};
