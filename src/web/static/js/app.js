(function() {
  'use strict'

  function ImageThumbnailComponent(imageData) {
    this.imageData = imageData
    this.element = this.render()
  }

  ImageThumbnailComponent.parentComponent = document.getElementById('image-list')

  ImageThumbnailComponent.prototype.render = function() {
    var imageLink = document.createElement('a')
    imageLink.setAttribute('href', this.imageData.links.html)

    var imageFigure = document.createElement('figure')
    var imageFigcaption = document.createElement('figcaption')

    imageFigcaption.textContent = this.imageData.alt_description

    var imageElement = document.createElement('img')
    imageElement.setAttribute('src', this.imageData.urls.thumb)
    imageElement.setAttribute('alt', this.imageData.alt_description)

    imageFigure.appendChild(imageElement)
    imageFigure.appendChild(imageFigcaption)
    imageLink.appendChild(imageFigure)
    ImageThumbnailComponent.parentComponent.appendChild(imageLink)
    return imageLink
  }
  ImageThumbnailComponent.prototype.show = function() {
    this.element.style.display = 'block'
  }
  ImageThumbnailComponent.prototype.hide = function() {
    this.element.style.display = 'none'
  }

  var imageComponents
  fetch('/images')
    .then(function(images) { return images.json() })
    .then(function(images) { 
      imageComponents = images.map(function(img) { return new ImageThumbnailComponent(img) })
    })

  var searchBar = document.getElementById('search-bar')

  var debounceTimeout
  searchBar.addEventListener('input', function(e) {
    clearTimeout(debounceTimeout)
    debounceTimeout = setTimeout(function() {
      filterImages(searchBar.value)
    }, 300)
  })

  function filterImages(searchQuery) {
    if (searchQuery === '') {
      imageComponents.forEach(function(img) {
        img.show()
      })
    }
    else {
      imageComponents.forEach(function(img) {
        if (img.imageData.alt_description.includes(searchQuery)) {
          img.show()
        }
        else {
          img.hide()
        }
      })
    }
  }
})()
