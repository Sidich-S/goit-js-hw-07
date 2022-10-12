import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryRef = document.querySelector(".gallery")

function makeGallery(gallery) {
    return gallery.map(({ preview, original, description }) => `
    <div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img loading="lazy"
             class="gallery__image"
             src="${preview}"
             data-source="${original}"
             alt="${description}"/>
      </a>
    </div>`).join("")
}
  
const onGallery = makeGallery(galleryItems)
galleryRef.insertAdjacentHTML("beforeend", onGallery)

// ---------------------------------------------------------------
galleryRef.addEventListener("click", makeDigImg)

function makeDigImg(event) {
  event.preventDefault()
  if (event.target.nodeName !== "IMG") {
    return
  }
    const choice = basicLightbox.create(`<img src = "${event.target.dataset.source}" 
        width="800" height="600"/>`)
        choice.show();
  
    document.addEventListener("keydown", function closePicture (event){
    console.log(event.key, event.code);
    if (event.code !== "Escape") {
      return
    }
    choice.close()
    document.removeEventListener("keydown", closePicture)
  });
  
}
