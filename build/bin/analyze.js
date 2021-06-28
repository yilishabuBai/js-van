const webpack = require('webpack')
const { merge } = require('webpack-merge')
const env = process.env.NODE_ENV
const config = require('../webpack/webpack.build')(env)
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; // 分析包内容
const SpeedMeatureWebpackPlugin = require('speed-measure-webpack-plugin')
const smp = new SpeedMeatureWebpackPlugin()
const webpackConfig = smp.wrap(merge(config, {
  plugins: [
    new BundleAnalyzerPlugin()
  ]
}))
const time = Date.now()

webpack(webpackConfig, (err, stats) => {
  if (err) throw err

  process.stdout.write(stats.toString('\n' + {
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n\n')

  const costTime = (Date.now() - time) / 1000

  process.stdout.write(` INFO  Build cost time: ${costTime}s\n`)
  process.stdout.write(' DONE  Build complete. The dist directory is ready to be deployed.\n\n')
})
