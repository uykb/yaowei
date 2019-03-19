const path = require('path');

module.exports = {
    contentBase: path.resolve(__dirname, "dist"),
    host: 'localhost',
    compress: true,
    hot: true,  // just enable in dev mode, and need to remove in product mode.
    port: 8081
  };