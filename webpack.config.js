const path = require("path")
const env = process.env.NODE_ENV

const config = {
  target: 'node',
  mode: env === "dev" ? "development" : "production",
  devtool: env === "dev" ? "nosources-source-map" : "eval-cheap-source-map",
  entry: {
      myApp: [
          "./src/extension.ts",
      ],
  },
  output: {
      path: path.resolve(__dirname, "dist/"),
      filename: "extension.js",
      libraryTarget: 'commonjs2'
  },
  externals: {
    vscode: 'commonjs vscode' // the vscode-module is created on-the-fly and must be excluded. Add other modules that cannot be webpack'ed, 📖 -> https://webpack.js.org/configuration/externals/
    // modules added here also need to be added in the .vsceignore file
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
      rules: [
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'ts-loader'
            }
          ]
        }
      ]
  },
}

module.exports = config
