const path = require('path')
const root = process.cwd()
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const webpack = require('webpack')
const version = require('../../package.json').version

module.exports = (env) => {
  const globals = require(`${root}/env.config.js`)(env)

  return {
    cache: {
      type: 'filesystem'
    },
    entry: {
      index: './src/index.ts'
    },
    resolve: {
      extensions: ['.js', '.ts'],
      alias: {
        '@': path.resolve(root, 'src')
      }
    },
    module: {
      rules: [{
        test: /\.(t|j)s$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }]
    },
    plugins: [
      new ForkTsCheckerWebpackPlugin(),
      new webpack.DefinePlugin({
        'process.env': JSON.stringify(Object.assign({
          NODE_ENV: env === 'prod' ? 'production' : 'development',
          RUNTIME_ENV: env,
          VERSION: version
        }, globals))
      })
    ]
  }
}
