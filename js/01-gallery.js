import { galleryItems } from './gallery-items.js'
// Change code below this line

console.log(galleryItems)

//===================================================
const gallery = document.querySelector('.gallery')

//Tworzenie div item
galleryItems.forEach(n => {
	const galleryItem = `<div class="gallery__item">
<a class="gallery__link" href="${n.original}">
  <img
    class="gallery__image"
    src="${n.preview}"
    data-source="${n.original}"
    alt="${n.description}"
  />
</a>
</div>`

	gallery.insertAdjacentHTML('afterbegin', galleryItem)
})
//=======================================================

//Tworzenie delegowania zdarzeń na div gallery
const selectImg = e => {
	e.preventDefault()
	if (e.target.nodeName !== 'IMG') {
		return
	}
	const srcLargeImg = e.target.dataset.source

	//Użycie biblioteki lightbox do wyświetlania img na pełnym ekranie
	const instance = basicLightbox.create(`<img src="${srcLargeImg}">`)
	instance.show()

	//Zamknięcie przy pomocy klawisza Escape
	const closeImg = () => {
		const visible = instance.visible()
		if (visible === true) {
			instance.close()
		}
	}

	gallery.addEventListener('keydown', closeImg)
}

//Implementacja delegowania
gallery.addEventListener('click', selectImg)
