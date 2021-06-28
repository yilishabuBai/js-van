const envList = {
  type: 'list',
  messages: 'Which environment do you want to serve ?',
  name: 'env',
  choices: [
    'dev',
    'fz',
    'pre',
    'prod'
  ]
}

module.exports = {
  envList
}
