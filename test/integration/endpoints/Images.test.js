const { expect } = require('chai')
const sinon      = require('sinon')
const request    = require('supertest')

const fakeImageData = require('../../fixtures/images')

const UnsplashService = require('../../../src/infrastructure/services/UnsplashService')
const getImagesStub = sinon.stub(UnsplashService, 'getImages')
getImagesStub.resolves(fakeImageData)

const { server } = require('../../../src/web/server/Express')

describe('/images', () => {
  describe('GET /images', () => {
    it('Returns a list of images', done => {
      request(server)
        .get('/images')
        .end((_err, res) => {
          expect(res.status).to.equal(200)
          expect(res.body).to.deep.equal(
            fakeImageData.map(img => (
              {
                alt_description: img.alt_description,
                urls: {
                  thumb: img.urls.thumb,
                },
                links: {
                  html: img.links.html,
                },
              }
            ))
          )
          done()
        })
    })
  })
})
