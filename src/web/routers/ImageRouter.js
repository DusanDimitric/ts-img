const router = require('express').Router()

const { getImages } = require('../../application/services')

router.get('/', async (_req, res) => {
  const images = await getImages()
  res.json(images)
})

module.exports = router
