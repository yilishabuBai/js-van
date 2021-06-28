const { merge } = require('webpack-merge')

module.exports = env => {
  const flame = require('../config/flame.config')(env, 'build')
  const baseConfig = require('./webpack.base')(env)

  return merge(baseConfig, {
    output: {
      publicPath: flame.buildPublicPath,
      filename: `${flame.assetsPath}[name].js`
    },
    mode: 'production',
    devtool: 'hidden-source-map'
  })
}
