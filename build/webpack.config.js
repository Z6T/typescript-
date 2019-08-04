const merge = require('webpack-merge')

const base = require('./webpack.base.config')
const dev = require('./webpack.dev.config')
const pro = require('./webpack.pro.config');

let config = process.NODE_ENV === 'development' ? dev : pro;

module.exports = merge(base,config)