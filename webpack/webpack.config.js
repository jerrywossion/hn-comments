const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
   mode: "production",
   entry: {
      background: path.resolve(__dirname, "..", "src", "background.ts"),
      hn_content: path.resolve(__dirname, "..", "src", "hn_content.ts"),
      non_hn_content: path.resolve(__dirname, "..", "src", "non_hn_content.ts"),
   },
   output: {
      path: path.join(__dirname, "../dist"),
      filename: "scripts/[name].js",
   },
   resolve: {
      extensions: [".ts", ".js"],
   },
   module: {
      rules: [
         {
            test: /\.tsx?$/,
            loader: "ts-loader",
            exclude: /node_modules/,
         },
      ],
   },
   plugins: [
      new CopyPlugin({
         patterns: [
            {from: ".", to: ".", context: "public"},
         ]
      }),
   ],
};