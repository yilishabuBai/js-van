const webpack = require('webpack')
const env = process.env.NODE_ENV
const config = require('../webpack/webpack.build')(env)
const time = Date.now()

webpack(config, (err, stats) => {
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
