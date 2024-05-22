import { getPublications } from "./global-state.js";
import { loadPublication } from "./publication-load.js";
const buttons = document.querySelectorAll(".img-filters__button");

export const startfilter = () => {
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.classList.contains("img-filters__button--active")) {
        return;
      }
      document
        .querySelector(".img-filters__button--active")
        .classList.remove("img-filters__button--active");
      button.classList.add("img-filters__button--active");
      const filterType = button.id;
      document.querySelectorAll(".picture").forEach((publication) => {
        publication.remove();
      });
      switch (filterType) {
        case "filter-default":
          getPublications().forEach((publication) => {
            loadPublication(
              publication.url,
              publication.comments.length,
              publication.likes,
              publication.id
            );
          });
          break;
        case "filter-random":
          const publications = getPublications();
          const randomArryy = generateUniqueArray(
            12,
            0,
            publications.length - 1
          );
          randomArryy.forEach((index) => {
            loadPublication(
              publications[index].url,
              publications[index].comments.length,
              publications[index].likes,
              publications[index].id
            );
          });
          break;
        case "filter-discussed":
          const sortPublications = JSON.parse(
            JSON.stringify(getPublications())
          );
          sortPublications.sort((a, b) => {
            return b.comments.length - a.comments.length;
          });
          sortPublications.forEach((publication) => {
            loadPublication(
              publication.url,
              publication.comments.length,
              publication.likes,
              publication.id
            );
          });
      }
    });
  });
};
function generateUniqueArray(length, startRange, endRange) {
  if (endRange - startRange + 1 < length) {
    throw new Error("Диапазон чисел меньше требуемой длины массива");
  }
  let uniqueNumbers = new Set();
  while (uniqueNumbers.size < length) {
    let randomNumber =
      Math.floor(Math.random() * (endRange - startRange + 1)) + startRange;
    uniqueNumbers.add(randomNumber);
  }
  return Array.from(uniqueNumbers);
}
