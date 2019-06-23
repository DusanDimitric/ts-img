const { expect } = require('chai')

const getImagesBuilder = require('../../../../src/application/services/getImages')

const fakeImageData = require('../../../fixtures/images')

const mockUnsplashService = {
  getImages() {
    return Promise.resolve(fakeImageData)
  }
}

describe('getImages', () => {
  const getImages = getImagesBuilder(mockUnsplashService)

  it('Returns an array of relevant image data', async () => {
    const images = await getImages()
    expect(images.length).to.equal(14)
    expect(images).to.deep.equal(
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
  })
})
