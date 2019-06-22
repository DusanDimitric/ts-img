const server = require('express')()

const { PORT } = require('../web.config')

server.set('port', PORT)

const HomeRouter = require('../routers/HomeRouter')

server.use('/', HomeRouter)

function startServer() {
  server.listen(server.get('port'), () => {
    process.stdout.write(`App listening on port ${server.get('port')}!\n`)
  })
}

module.exports = {
  server,
  startServer,
}
