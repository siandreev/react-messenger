const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function(app) {
    app.use(createProxyMiddleware("/img", {target: 'http://localhost:8000/'}));
    app.use(createProxyMiddleware("/api", {target: "ws://localhost:8000/", ws: true}));
}