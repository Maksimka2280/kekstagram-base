import { getPublications } from "./global-state.js";


const pictures = document.querySelector(".pictures");
const bigPicture = document.querySelector(".big-picture");
const body = document.querySelector('body');
const bigPictureCancel  = document.querySelector('.big-picture__cancel ');
const bigPictureImg = document.querySelector('.big-picture__img');

export const openFullScreen = () => {
  pictures.addEventListener("click", (evt) => {
    evt.preventDefault();
    const target = evt.target;
    const publication = target.closest('.picture');
    if(!publication){
     return;
    };
      bigPicture.classList.remove('hidden');
      body.classList.add('modal-open');
      publication.log(publicationId);

  });
  bigPictureCancel.addEventListener("click", () =>  {

    bigPicture.classList.add('hidden');
    body.classList.remove('modal-open');

  });
};
