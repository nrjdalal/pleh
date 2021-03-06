const path = require('path')
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA({
  pwa: {
    dest: 'public',
    runtimeCaching,
  },

  webpack: (config) => {
    config.resolve.modules.push(path.resolve('./'))
    return config
  },
})
