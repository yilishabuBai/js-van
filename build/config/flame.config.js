const host = require('./ip.config')()
const port = 8087

const getConfig = (env, type) => {
  env = env === 'prod' ? '' : `-${env}`
  if (type === 'serve') {
    return {
      port,
      buildPublicPath: `//${host}:${port}/target/`,
      publicPath: `//${host}:${port}/local/`,
      assetsPath: '',
      sockHost: host,
      host,
      target: `//${host}:${port}/`,
      apiTarget: ''
    }
  }
  return {
    buildPublicPath: `//smeteacher${env}.jiaoyanyun.com/`,
    publicPath: `//smeteacher${env}.jiaoyanyun.com/`,
    assetsPath: '',
    target: `https://smeteacher${env}.jiaoyanyun.com/`
  }
}

module.exports = (env, type) => {
  env = env || 'prod'
  return getConfig(env, type)
}
