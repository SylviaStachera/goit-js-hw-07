import { galleryItems } from './gallery-items.js'
// Change code below this line

console.log(galleryItems)

//===================================================
const gallery = document.querySelector('.gallery')

//Tworzenie div item

galleryItems.forEach((n) => {
//console.log(n.preview)
const galleryItem = `<div class="gallery__item">
<a class="gallery__link" href="${n.preview}">
  <img
    class="gallery__image"
    src="${n.original}"
    data-source="${n.preview}"
    alt="${n.description}"
  />
</a>
</div>`  

gallery.insertAdjacentHTML('afterbegin', galleryItem)
})



