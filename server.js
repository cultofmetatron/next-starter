const express = require('express');
const next = require('next');
const { parse } = require('url')
const dev = process.env.NODE_ENV !== 'production';''
const mainApp = next({ dev });
const handle = mainApp.getRequestHandler();

const serverRoutes = reuqire('./server');

mainApp.prepare()
.then(() => {
  const server = express();

  serverRoutes(mainApp, server);

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})