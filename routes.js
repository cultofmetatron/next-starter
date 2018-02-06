
const routes = require('next-routes')()

routes
  .add({name: 'profile', pattern: '/profile', page: 'index'});

module.exports = routes;
