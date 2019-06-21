const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = env => ({
  mode: 'development',
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.bundle.js',
    chunkFilename: 'index.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: {
                      browsers: [
                        'last 2 versions',
                      ],
                    },
                    modules: false,
                    useBuiltIns: 'entry',
                  },
                ],
                [
                  '@babel/preset-react',
                  {
                    development: (!env || !env.NODE_ENV)
                      ? 'development'
                      : env.NODE_ENV.toLowerCase() === 'development',
                  },
                ],
              ],
              plugins: [
                '@babel/plugin-proposal-export-namespace-from',
                '@babel/plugin-proposal-export-default-from',
                '@babel/plugin-proposal-class-properties',
                '@babel/plugin-proposal-optional-chaining',
                '@babel/plugin-proposal-do-expressions',
                [
                  // used only for babel helpers
                  '@babel/plugin-transform-runtime',
                  {
                    // regenerator runtime should be used from global polyfill
                    regenerator: false,
                    // define babel helpers as es modules
                    useESModules: true,
                  },
                ],
                [
                  'babel-plugin-styled-components',
                  {
                    displayName: true,
                  },
                ],
                [
                  'import',
                  {
                    libraryName: 'antd',
                    libraryDirectory: 'es',
                    style: true,
                  },
                ],
              ],
            },
          },
          {
            loader: 'eslint-loader',
            options: {
              emitWarning: true,
            },
          }],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.woff(.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            mimetype: 'application/font-woff',
          },
        },
      },
      // TTF Fonts
      {
        test: /\.ttf(.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            mimetype: 'application/octet-stream',
          },
        },
      },
      // SVG
      {
        test: /\.svg(.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            mimetype: 'image/svg+xml',
          },
        },
      },
      // Common Image Formats
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|eot|webp)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.mjs', '.wasm', '.json'],
  },
});
