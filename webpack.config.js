/**
 * Webpack configuration
 */

const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
    mode: "production",
    entry: path.resolve(__dirname, "src", "index.tsx"),
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    resolve: {
        modules: ["src", "node_modules"],
        extensions: [".ts", ".tsx", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/i,
                exclude: [/node_modules/],
                use: [{
                    loader: "ts-loader",
                    options: {
                        transpileOnly: true,
                        onlyCompileBundledFiles: true,
                    },
                }],
            },
        ],
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            minify: TerserPlugin.uglifyJsMinify,
            terserOptions: {
                annotations: false,
                mangle: true,
                compress: {
                    // disable this feature to avoid the syntax error of the generated code
                    // reduce_vars: false,
                }
            },
        })],
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin(),
        new webpack.DefinePlugin({
            // add the following line to the ensure the error will be logged
            "process.env.NODE_ENV": JSON.stringify("development"),
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html"),
            minify: {
                removeComments: true,
                minifyJS: true,
                collapseInlineTagWhitespace: true,
                collapseWhitespace: true,
                preserveLinebreaks: false,
                removeAttributeQuotes: true,
            },
        }),
    ],
};
