const path = require('path')
const withCss = require('@zeit/next-css')
const withPurgeCss = require('next-purgecss')

module.exports = withCss(withPurgeCss())

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'css')]
  },
  trailingSlash: true,
  devIndicators: {
    buildActivity: false
  },
  eslint: {
    ignoreDuringBuilds: false
  }
}
