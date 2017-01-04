'use strict';

var lb = require('loopback');
var boot = require('loopback-boot');

global.config = require('../common/config');
global.loopback = module.exports = lb();
global.Promise = require('bluebird');

loopback.start = function() {
  // start the web server
  return loopback.listen(function() {
    loopback.emit('started');
    var baseUrl = loopback.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (loopback.get('loopback-component-explorer')) {
      var explorerPath = loopback.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(loopback, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    loopback.start();
});
