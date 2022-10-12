import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// ------------------------------------------------------------
const galleryRef = document.querySelector(".gallery")

class galleryImg {
  constructor(galleryItems) {
    this.galleryItems = galleryItems
  }

  onGalleryRef() {
    console.log(this.galleryItems);
    const { preview, original, description } = this.galleryItems;
    const galleryObj = this.galleryItems.map(({ preview, original, description }) =>
      `<a class = "gallery__item" href = "${original}">
   <img class ="gallery__image" src = "${preview}" alt = "${description}" />
   </a>`).join("")
    return galleryObj
  }

  onGallery(elem) {
    elem.insertAdjacentHTML("beforeend", this.onGalleryRef())
  }
}

// ---------------------------------------------------------------------

const otherGallery = new galleryImg(galleryItems);
console.log(otherGallery.onGallery(galleryRef))

galleryRef.addEventListener("click", onClickImgMakeGallery)

function onClickImgMakeGallery(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return
  }
}

let gallery = new SimpleLightbox('.gallery a', {captionsData:"alt", captionDelay: 250});
gallery.on('show.simplelightbox')