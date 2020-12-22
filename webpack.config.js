const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output:{
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  resolve:{
    extensions: ['.js']
  },
  mode: 'development',
  devServer:{
    open: true,
    port: 9000
  },
  module:{
    rules:[
      {
        test: /\.js?$/,
        exclude: '/node_modules/',
        use:{
          loader: 'babel-loader',
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '100tifi.co SPA',
      template: path.resolve(__dirname, './public/index.html'),
      filename: './index.html'
    })
  ]
}