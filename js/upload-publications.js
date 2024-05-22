const uploadInput = document.querySelector(".img-upload__input ");
const imageuploadform = document.querySelector(".img-upload__overlay");
const body = document.querySelector("body");
const imgpublication = document.querySelector(".img-upload__preview img");
const minImgs = document.querySelectorAll(".effects__preview");

export const startUpLoad = () => {
  uploadInput.addEventListener("change", () => {
    const reader = new FileReader();
    imageuploadform.classList.remove("hidden");
    body.classList.add("modal-open");
    reader.onload = (evt) => {
      imgpublication.src = evt.target.result;
      minImgs.forEach((minImg) => {
        minImg.style.backgroundImage = `url(${evt.target.result})`;
      });

    };

    reader.readAsDataURL(uploadInput.files[0]);
  });
};
