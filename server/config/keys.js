process.env.NODE_ENV === 'production'
  ? (module.exports = require('./prod.js'))
  : (module.exports = require('./dev.js'));
