const router = require('express').Router();

let auth0ROutes = require('./server/auth');

//app is a nextjs appp and server is an expess server
export.modules = (app, server) => {
  auth0ROutes(server);
  server.use(router);
};
