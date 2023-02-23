import { galleryItems } from './gallery-items.js'
// Change code below this line

console.log(galleryItems)

//===================================================
const gallery = document.querySelector('.gallery')

//Tworzenie div item
galleryItems.forEach(n => {
	const galleryItem = `<a class="gallery__item" href="${n.original}">
  <img
    class="gallery__image"
    src="${n.preview}"
    alt="${n.description}"
    title="${n.description}"
  />
</a>`

	gallery.insertAdjacentHTML('afterbegin', galleryItem)
})
//=======================================================
// 	//Użycie biblioteki simplelightbox do wyświetlania img na pełnym ekranie i przewijania

var lightbox = new SimpleLightbox('.gallery a', {
	captionsData: 'title',
	captionDelay: 250,
})
