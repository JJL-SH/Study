/*
* @Author: Bob.Liu
* @Date:   2017-10-16 17:39:13
* @Last Modified by:   Bob.Liu
* @Last Modified time: 2017-10-16 18:56:03
*/
var path = require('path');

module.exports = {
  entry: path.join(__dirname, '/entry.js'),
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js|jsx$/, 
        loaders: ['babel-loader']
      }
    ]
  }
}