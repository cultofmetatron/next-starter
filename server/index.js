const router = require('express').Router();
const path = require('path');
let auth0Routes = require('./auth');

let routes = require('../routes');

// app is a nextjs appp and server is an expess server
module.exports = (app, server) => {
  auth0Routes(router);

  const handler = routes.getRequestHandler(app);

  server.use(router);
  server.use(handler);

};
