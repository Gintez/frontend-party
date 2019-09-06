/*
    Some configs relied on codebases:
    - https://github.com/rokoroku/react-redux-typescript-boilerplate/
    - https://medium.com/dailyjs/typescript-babel-ce24f724398
    - https://webpack.js.org/guides/caching/

    More about TypeScript
    - https://iamturns.com/typescript-babel/
*/

const path = require('path');
const webpack = require('webpack');
const hash = require('string-hash');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DIST_PATH = path.resolve(__dirname, 'dist');
const SOURCE_PATH = path.resolve(__dirname, 'src');
const ENVIRONMENT = process.env.NODE_ENV || 'development';
const isProduction = ENVIRONMENT === 'production';

const plugins = [
    new CleanWebpackPlugin(DIST_PATH),
    new HtmlWebpackPlugin({
        template: './index.html',
    }),
    new webpack.DefinePlugin({
        PRODUCTION: isProduction
    }),
];

if (isProduction) {
    plugins.push(
        new webpack.HashedModuleIdsPlugin(),
    );
}

module.exports = {
    context: SOURCE_PATH,
    entry: {
        app: './index.tsx',
    },
    output: {
        path: DIST_PATH,
        filename: 'public/[name].[contenthash].js',
        publicPath: '/',
    },
    devtool: isProduction ? false : 'source-map',
    resolve: {
        extensions: ['.js', '.tsx', '.ts', '.json'],
        alias: {
            app: __dirname + '/src/app',
        },
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.svg$/,
                issuer: /\.tsx/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                    ({ resource }) => {
                        return {
                            loader: 'react-svg-loader',
                            options: {
                                svgo: {
                                    plugins: [
                                        { removeTitle: true },
                                        {
                                            cleanupIDs: {
                                                remove: true,
                                                minify: true,
                                                prefix: `svg${hash(path.relative(__dirname, resource))}`,
                                            },
                                        }
                                    ],
                                },
                            },
                        };
                    },
                ],
            },
            {
                test: /\.(png|jpg|gif|svg|ttf)$/,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                          disable: true,
                        },
                    },
                ]
            },
        ],
    },
    plugins,
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /node_modules/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },
    devServer: {
        port: 8081,
        contentBase: DIST_PATH,
        publicPath: '/',
        logLevel: 'debug',
        historyApiFallback: true,
    },
};
