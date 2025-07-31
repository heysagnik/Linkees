const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const createConfig = (format) => ({
  mode: "production",
  entry: {
    index: "./src/index.ts",
    style: "./src/styles.ts", // Separate entry for CSS
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: ({ chunk }) => {
      if (chunk.name === "style") {
        return "style.js"; // This will be removed, we only want the CSS
      }
      return format === "esm" ? "index.esm.js" : "index.js";
    },
    library: format === "esm" ? undefined : "Linkees",
    libraryTarget: format === "esm" ? "module" : "umd",
    globalObject: format === "esm" ? undefined : "this",
    clean: false,
  },
  experiments:
    format === "esm"
      ? {
          outputModule: true,
        }
      : {},
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif|jpe?g)$/,
        type: "asset/inline",
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  externals:
    format === "esm"
      ? {
          react: "react",
          "react-dom": "react-dom",
        }
      : {
          react: {
            commonjs: "react",
            commonjs2: "react",
            amd: "React",
            root: "React",
          },
          "react-dom": {
            commonjs: "react-dom",
            commonjs2: "react-dom",
            amd: "ReactDOM",
            root: "ReactDOM",
          },
        },
  optimization: {
    minimize: true,
  },
});

module.exports = [createConfig("cjs"), createConfig("esm")];
