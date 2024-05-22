const FiltersTypes = {
  "effect-none": "",
  "effect-chrome": " grayscale(1)",
  "effect-sepia": "sepia(1)",
  "effect-marvin": "invert(100%)",
  "effect-phobos": "blur(3px)",
  "effect-heat": "brightness(3)",
};

const img = document.querySelector('.img-upload__preview img');

const containerFilters = document.querySelector(".img-upload__effects");

export const startPublicationFilters = () => {
  containerFilters.addEventListener("click", (evt) => {
    const target = evt.target.closest(".effects__item").querySelector("input");
    img.style.filter = FiltersTypes[target.id]
  });
};
