var host = process.env.HOST || 'localhost:5000'
const pkg = require('./package.json')

module.exports = {
  info: {
    // API informations (required)
    title: pkg.description, // Title (required)
    version: pkg.version // Version (required)
  },
  host: host, // Host (optional)
  basePath: '/', // Base path (optional)
  apis: ['./app.js', './definitions.yaml']
}
