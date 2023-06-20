# goit-js-hw-07

## Task 1 - Image Gallery with basicLightbox:
Create an image gallery that allows users to click on gallery items and view the full image in a modal window. You will be working with the files 01-gallery.html and 01-gallery.js. Here are the steps to accomplish the task:

Create and render gallery items using the provided galleryItems array and a gallery item template.
Implement event delegation on the div.gallery element to obtain the URL of the larger image when a gallery item is clicked.
Include the necessary script and style files from the basicLightbox library by adding CDN links to the minimized versions of the files.
Open the modal window when a gallery item is clicked using the basicLightbox library. Refer to the documentation and examples for guidance.
Update the src attribute of the <img> element inside the modal window with the appropriate image URL before opening the modal.
Ensure that the link behavior is blocked to prevent redirection when the gallery item is clicked.

## Task 2 - Image Gallery with SimpleLightbox:
Create a similar image gallery as in Task 1, but this time using the SimpleLightbox library. You will be working with the files 02-lightbox.html and 02-lightbox.js. Here are the steps to accomplish the task:

Create and render gallery items using the provided galleryItems array and a gallery item template. You can reuse the code from Task 1 with slight modifications to the gallery item template.
Connect the SimpleLightbox library by adding CDN links to the simple-lightbox.min.js and simple-lightbox.min.css files.
Initialize the library after creating the gallery items and adding them to the ul.gallery element. Refer to the SimpleLightbox documentation, specifically the "Usage" and "Markup" sections, for guidance.
Take note of the "Options" section in the documentation and add image captions from the alt attribute. Ensure that the captions appear below the images, with a 250-millisecond delay after opening the image.
