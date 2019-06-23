global.fetch = require('node-fetch')

const Unsplash   = require('unsplash-js').default
const { toJson } = require('unsplash-js')

const { UNSPLASH_ACCESS_KEY, UNSPLASH_SECRET_KEY } = require('./service-credentials.config')

const unsplash = new Unsplash({
  applicationId : UNSPLASH_ACCESS_KEY,
  secret        : UNSPLASH_SECRET_KEY,
})

function getImages() {
  const UNSPLASH_USER = 'clemono2'
  return unsplash.users.photos(UNSPLASH_USER, 1, 14, 'popular', false)
    .then(toJson)
}

module.exports = {
  getImages,
}
