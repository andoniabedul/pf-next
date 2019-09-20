const withLess = require('@zeit/next-less')
module.exports = withLess({
  exportPathMap: function () {
    return {
      '/': { page: '/' }
    }
  }
});