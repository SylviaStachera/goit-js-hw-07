import { galleryItems } from './gallery-items.js'
// Change code below this line

console.log(galleryItems)

//===================================================
const gallery = document.querySelector('.gallery')

//Tworzenie div item

galleryItems.forEach(n => {
	//console.log(n.preview)
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
//Tworzenie delegowania zdarzeń

const selectImg = e => {
	e.preventDefault()
	if (e.target.nodeName !== 'IMG') {
		return
	}
	const selectLargeImg = e.target.dataset.source

	//console.log(selectLargeImg)

	const galleryLargeItem = document.querySelector('.gallery__image')
	// console.log(galleryLargeItem)
	// console.log(galleryLargeItem.dataset.source)

	galleryLargeItem.setAttribute('src', galleryLargeItem.dataset.source)
}

//Implementacja delegowania
gallery.addEventListener('click', selectImg)
