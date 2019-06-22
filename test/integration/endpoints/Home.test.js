const { expect } = require('chai')
const request = require('supertest')

const { server } = require('../../../src/web/server/Express')

describe('/', () => {
  describe('GET /', () => {
    it('Returns a greeting', done => {
      request(server)
        .get('/')
        .end((_err, res) => {
          expect(res.status).to.equal(200)
          expect(res.text).to.equal('Hello World!')
          done()
        })
    })
  })
})
