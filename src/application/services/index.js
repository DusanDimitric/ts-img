const UnsplashService = require('../../infrastructure/services/UnsplashService')

const getImages = require('./getImages')(UnsplashService)

module.exports = {
  getImages,
}
