(function() {
  'use strict'

  class ImageThumbnailComponent {
    static parentComponent = document.getElementById('image-list')
      
    constructor(imageData) {
      this.imageData = imageData
      this.element = this.render()
    }

    render() {
      const imageLink = document.createElement('a')
      imageLink.setAttribute('href', this.imageData.links.html)

      const imageFigure = document.createElement('figure')
      const imageFigcaption = document.createElement('figcaption')

      imageFigcaption.textContent = this.imageData.alt_description

      const imageElement = document.createElement('img')
      imageElement.setAttribute('src', this.imageData.urls.thumb)
      imageElement.setAttribute('alt', this.imageData.alt_description)

      imageFigure.appendChild(imageElement)
      imageFigure.appendChild(imageFigcaption)
      imageLink.appendChild(imageFigure)
      ImageThumbnailComponent.parentComponent.appendChild(imageLink)
    }
  }

  const imageComponents = fetch('/images')
    .then(images => images.json())
    .then(images => images.map(img => new ImageThumbnailComponent(img)))
})()
