const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "app.js",
    },

    devtool: "source-map",

    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },

    plugins: [
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "public/index.html"),
        filename: "index.html",
        }),
    ],

    devServer: {
        port: 3000,
    },

    module: {
        rules: [
        {
            test: /\.ts(x?)$/,
            exclude: /node_modules/,
            use: [
            {
                loader: "ts-loader",
            },
            ],
        },
        {
            test: /\.css$/,
            use: ["style-loader", "css-loader"],
        },
        {
            test: /\.(png|jpg|svg|gif)?$/,
            use: "file-loader",
        },
        {
            enforce: "pre",
            test: /\.js$/,
            loader: "source-map-loader",
        },
        ],
    },

    externals: {
        react: "React",
        "react-dom": "ReactDOM",
    },
};