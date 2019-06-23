const path = require('path')

const express = require('express')
const server  = express()

const { PORT } = require('../web.config')

server.set('port', PORT)

server.use(express.static(path.join(__dirname, '../', 'static')))

function startServer() {
  server.listen(server.get('port'), () => {
    process.stdout.write(`App listening on port ${server.get('port')}!\n`)
  })
}

module.exports = {
  server,
  startServer,
}
