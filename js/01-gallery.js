import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery')
const makeGallery = galleryItems => {

    return galleryItems.map(item => {
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery__item');

        const galleryLink = document.createElement('a');
        galleryLink.href = (item.original);
        galleryItem.appendChild(galleryLink);

        const galleryImg = document.createElement('img');
        galleryImg.classList.add('gallery__image');
        galleryImg.src = (item.preview);
        galleryImg.alt = (item.description);
        galleryImg.getAttribute = ('data-source', item.original);
        galleryLink.appendChild(galleryImg);

        galleryRef.append(galleryItem);
        return galleryItem
    });
}

console.log(basicLightbox);
makeGallery(galleryItems);
