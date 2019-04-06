// Imports: Dependencies
const path = require('path');
//__dirname代表当前文件的绝对路径
//node用来解析绝对路径的方法
const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'app');
const htmlWebpackPlugin = require('html-webpack-plugin');
require('@babel/register');
// Webpack Configuration
const config = {
  // Entry
  entry: path.resolve(APP_PATH, 'index.jsx'),
  // Output
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  // Loaders
  module: {
    rules : [
      // JavaScript/JSX Files
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ],
        include: APP_PATH
      },
      {
        test: /\.(scss|sass)$/i,
        use: [
          { loader:'style-loader' },
          { loader: 'css-loader',
            options: {
              modules: true
            }
          },
          {
            // Loader for webpack to process CSS with PostCSS
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  require('autoprefixer')
                ];
              }
            }
          },
          { loader: 'sass-loader',
            options: {
              modules: true
            }
          }
        ],
        include: APP_PATH
      },
    ]
  },
  // Plugins
  plugins: [
    new htmlWebpackPlugin({
      title: 'my first react app with webpack'
    })
  ],
};
// Exports
module.exports = config;