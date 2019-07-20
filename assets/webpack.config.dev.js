const {resolve, join} = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'cheap-modules-source-map',
    entry: [
        'babel-polyfill',
        'react-hot-loader/patch',
        'react',
        'react-dom',
        'webpack-dev-server/client?http://localhost:7070',
        'webpack/hot/only-dev-server',
        './src/index.js'
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [join(__dirname, 'src'), join(__dirname, 'node_modules')]
    },
    output: {
        filename: 'js/[name].[hash:8].js',
        pathinfo: false,
        publicPath: '/'
    },
    devServer: {
        compress: true,
        hot: true,
        open: true,
        host: '0.0.0.0',
        port: 7070,
        disableHostCheck: true,
        contentBase: resolve(__dirname, 'public'),
        publicPath: '/',
        historyApiFallback: {
            index: 'DefaultLayout.js.html'
        }
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.(js|jsx)$/,
                loader: 'eslint-loader',
                include: resolve(__dirname, 'src')
            },
            {
                exclude: [
                    /\.html$/,
                    /\.(js|jsx)$/,
                    /\.css$/,
                    /\.json$/,
                    /\.scss$/
                ],
                loader: 'url-loader'
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                include: resolve(__dirname, 'src')
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader'
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader'
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function(module) {
                return (
                    module.context &&
                    module.context.indexOf('node_modules') !== -1
                );
            }
        }),

        new webpack.NamedChunksPlugin(chunk => {
            if (chunk.name) {
                return chunk.name;
            }
            return chunk.id;
        }),
        new ExtractTextPlugin({
            filename: '[name].css'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({
            inject: true,
            template: './public/index.html'
        }),
        new CopyWebpackPlugin([{from: './src/img', to: 'img'}], {
            copyUnmodified: false
        }),
        new webpack.DefinePlugin({
            'process.env': {
                production: JSON.stringify(false)
            }
        })
    ]
};
