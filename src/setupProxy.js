const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  var wsProxy = proxy('/socket', {
    target: 'http://ec2-15-188-195-154.eu-west-3.compute.amazonaws.com:8080',
    changeOrigin: true, // for vhosted sites, changes host header to match to target's host
    ws: true, // enable websocket proxy
    logLevel: 'debug',
  });
  app.use(wsProxy);
};
