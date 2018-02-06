
const routes = require('next-routes')()

routes
  .add({name: 'profile', pattern: '/profile/:id', page: 'profile'});

module.exports = routes;
