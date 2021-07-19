const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env, argv) => ({
    devtool: argv.mode === 'production' ? false : 'inline-cheap-module-source-map',

    entry: {
        background: './src/background/index.ts',
        'content-script': './src/content-script/index.ts',
        options: './src/options/index.ts',
        popup: './src/popup/index.ts',
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/',
    },

    resolve: {
        extensions: ['.js', '.less', '.ts'],
        alias: {
            '@': __dirname + '/src',
        },
        fallback: {
            crypto: require.resolve('crypto-browserify'),
            stream: require.resolve('stream-browserify'),
            buffer: require.resolve('buffer/'),
            assert: require.resolve('assert/'),
            https: require.resolve('https-browserify'),
            http: require.resolve('stream-http'),
            os: require.resolve('os-browserify/browser'),
            url: false,
        },
    },

    module: {
        strictExportPresence: true,
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                },
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    require('tailwindcss'),
                                    require('postcss-nested'),
                                    require('autoprefixer'),
                                    require('cssnano')({
                                        preset: 'default',
                                    }),
                                ],
                            },
                        },
                    },
                    // 'less-loader'
                ],
            },
            {
                test: /\.postcss$/,
                use: [
                    'vue-style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    require('tailwindcss'),
                                    require('postcss-nested'),
                                    require('autoprefixer'),
                                    require('cssnano')({
                                        preset: 'default',
                                    }),
                                ],
                            },
                        },
                    },
                ],
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader',
                options: {
                    limit: 40000,
                },
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            chunks: ['popup'],
            filename: 'popup.html',
            title: 'Re: ID',
            favicon: 'src/assets/favicon.ico',
            hash: true,
            template: 'src/assets/index.ejs',
        }),
        new HtmlWebpackPlugin({
            chunks: ['options'],
            filename: 'options.html',
            title: 'Re: ID',
            favicon: 'src/assets/favicon.ico',
            hash: true,
            template: 'src/assets/index.ejs',
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: 'public',
                    to: '',
                },
            ],
        }),
        new VueLoaderPlugin(),
        new webpack.DefinePlugin({
            VERSION: JSON.stringify(require('./public/manifest.json').version) + '',
            __VUE_OPTIONS_API__: true,
            __VUE_PROD_DEVTOOLS__: false,
        }),
        new webpack.ProvidePlugin({
            process: 'process/browser',
            Buffer: ['buffer', 'Buffer'],
        }),
    ],
    optimization: {
        minimizer: [
            new TerserPlugin({
                extractComments: false,
                terserOptions: {
                    output: {
                        ascii_only: true,
                    },
                },
            }),
        ],
    },
    experiments: {
        topLevelAwait: true,
    },
});
