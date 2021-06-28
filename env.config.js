module.exports = env => {
  const config = {
    dev: {},
    fz: {},
    pre: {},
    prod: {}
  }
  return Object.assign({}, config[env])
}
