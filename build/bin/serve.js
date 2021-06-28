const inquirer = require('inquirer')
const webpack = require('webpack')
const { envList } = require('../config/inquirer.config')
const WebpackDevServer = require('webpack-dev-server')

inquirer.prompt([
  envList
]).then(answer => {
  const env = answer.env
  const config = require('../webpack/webpack.serve')(env)
  const compiler = webpack(config)
  const server = new WebpackDevServer(compiler, config.devServer)
  server.listen(config.devServer.port)
}).catch(err => {
  console.error(err)
})
