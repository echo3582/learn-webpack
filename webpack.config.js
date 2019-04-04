var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');

//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
  entry: APP_PATH,
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js'
  },

  plugins: [
    new HtmlwebpackPlugin({
      title: 'Hello World app'
    })
  ],

  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader:'style-loader' },
          { loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ],
        include: APP_PATH
      },

      {
        test: /\.scss$/,
        use: [
          { loader:'style-loader' },
          { loader: 'css-loader',
            options: {
              modules: true
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

      {
        test: /\.jpg$/,
        use: [
          { loader: 'url-loader' },
        ]
      },
    ]
  },
}