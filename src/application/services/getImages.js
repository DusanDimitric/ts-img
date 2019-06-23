module.exports = (unsplashService) => async () => {
  const imageData = await unsplashService.getImages()
  return imageData.map(image => {
    return {
      alt_description: image.alt_description,
      urls: {
        thumb: image.urls.thumb,
      },
      links: {
        html: image.links.html,
      },
    }
  })
}
