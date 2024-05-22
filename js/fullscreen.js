import { getPublications } from "./global-state.js";
import { loadPublications } from "./publication-load.js";

const pictures = document.querySelector(".pictures");
const bigPicture = document.querySelector(".big-picture");
const body = document.querySelector("body");
const bigPictureCancel = document.querySelector(".big-picture__cancel ");
const bigPictureImg = document.querySelector(".big-picture__img img");
const likesCount = document.querySelector(".likes-count ");
const socialText = document.querySelector(".social__text ");
const socialComments = document.querySelector(".social__comments");
const commentsCounts = document.querySelector(".comments-count");
const socialLommentsLoader = document.querySelector(".social__comments-loader");
const socialCommentCount = document.querySelector(".social__comment-count--2");
const description = document.querySelector(".social__caption");
let shownCommentsCount = 5;
const SHOW_COMMENTS_PER_STEP = 5;

export const openFullScreen = () => {
  let id;
  let publications;
  pictures.addEventListener("click", (evt) => {
    shownCommentsCount = 5;

    if (
      evt.target.closest("fieldset") && evt.target.closest("fieldset").classList.contains("img-upload__start")
    ) {
      return;
    }
    evt.preventDefault();
    const target = evt.target;
    const publication = target.closest(".picture");

    publications = getPublications();

    if (!publication) {
      return;
    }
    id = publication.dataset.publicationId;
    //     export const openFullScreen = () => { ... }:

    // export: Это ключевое слово используется для экспорта функции openFullScreen, делая ее доступной для использования в других модулях.

    // const openFullScreen = () => { ... }: Это определяет функцию с именем openFullScreen. Она использует синтаксис стрелочной функции (() => { ... }).

    // pictures.addEventListener("click", (evt) => { ... });:

    // pictures: Похоже, что может существовать HTML-элемент с идентификатором или классом "pictures". Метод addEventListener используется для прослушивания события клика на этом элементе.

    // "click": Это тип прослушиваемого события, в данном случае, события клика.

    // (evt) => { ... }: Это стрелочная функция, которая служит обработчиком события для события клика. Она принимает параметр evt (объект события).

    // evt.preventDefault();:

    // evt: Это объект события, представляющий событие клика.
    // preventDefault(): Этот метод вызывается на объекте события для предотвращения выполнения действия по умолчанию, связанного с событием. В данном случае предотвращается стандартное поведение клика, которое часто связано с переходом на новую страницу.
    // const target = evt.target;:

    // target: Это элемент, на котором произошло событие клика. В данном случае, это элемент, на который был произведен клик внутри "pictures".
    // const publication = target.closest('.picture');:

    // publication: Это элемент, который ближайшим образом соответствует селектору '.picture' и находится внутри элемента, на котором произошел клик.
    // const id = publication.dataset.publicationId;:

    // id: Получает значение атрибута data-publication-id из найденного элемента .picture.
    // const publications = getPublications();:

    // publications: Это вызов функции getPublications(), предположительно, для получения каких-то данных о публикациях.
    // if (!publication) { return; };:

    // Проверка наличия элемента с классом '.picture'. Если такого элемента нет, функция завершает выполнение.
    // Этот код кажется связанным с обработкой событий клика на изображениях или элементах с классом '.picture', возможно, в контексте галереи или просмотра изображений в полноэкранном режиме.

    bigPictureImg.src = publications[id].url;
    likesCount.textContent = publications[id].likes;
    commentsCounts.textContent = publications[id].comments.length;
    description.textContent = publications[id].description;
    socialComments.innerHTML = "";

    publications[id].comments.slice(0, 5).forEach((comment) => {
      const newCommment = document.createElement("LI");
      newCommment.innerHTML = generateComment(comment.avatar, comment.message);
      socialComments.append(newCommment);
    });

    if (publications[id].comments.length > 5) {
      socialLommentsLoader.classList.remove("hidden");
    } else {
      socialLommentsLoader.classList.add("hidden");
    }

    socialCommentCount.textContent =
      publications[id].comments.length < 5
        ? publications[id].comments.length
        : "5";
    bigPicture.classList.remove("hidden");
    body.classList.add("modal-open");
  });

  socialLommentsLoader.addEventListener("click", () => {
    if (shownCommentsCount >= publications[id].comments.length) {
      socialLommentsLoader.classList.add("hidden");
      return;
    }

    publications[id].comments
      .slice(shownCommentsCount, shownCommentsCount + SHOW_COMMENTS_PER_STEP)
      .forEach((comment) => {
        const newCommment = document.createElement("LI");
        newCommment.innerHTML = generateComment(
          comment.avatar,
          comment.message
        );
        socialComments.append(newCommment);
      });

    shownCommentsCount += SHOW_COMMENTS_PER_STEP;

    socialCommentCount.textContent =
      shownCommentsCount > publications[id].comments.length
        ? publications[id].comments.length
        : shownCommentsCount;
  });

  bigPictureCancel.addEventListener("click", () => {
    bigPicture.classList.add("hidden");
    body.classList.remove("modal-open");
  });
};

const generateComment = (src, comment) => {
  return `<li class="social__comment">
 <img class="social__picture" src="${src}" alt="Аватар комментатора фотографии" width="35"
   height="35">
 <p class="social__text">${comment}</p>
</li>`;
};

// console.log(publications[id]);:

// console.log(): Это метод JavaScript для вывода сообщений в консоль разработчика. В данном случае, выводится содержимое элемента массива publications с индексом id в консоль.
// bigPictureImg.src = publications[id].url;:

// bigPictureImg: Это, вероятно, объект изображения (HTMLImageElement), который используется для отображения изображения в большом режиме.
// publications[id].url: Получает URL изображения из элемента массива publications с индексом id.
// bigPictureImg.src: Устанавливает источник (URL) изображения в объекте изображения.
// likesCount.textContent = publications[id].likes;:

// likesCount: Это, вероятно, элемент DOM, предположительно, для отображения количества лайков.
// publications[id].likes: Получает количество лайков из элемента массива publications с индексом id.
// likesCount.textContent: Устанавливает текстовое содержимое элемента для отображения количества лайков.
// bigPicture.classList.remove('hidden');:

// bigPicture: Вероятно, это элемент DOM, представляющий блок с увеличенным изображением или модальным окном.
// bigPicture.classList.remove('hidden'): Удаляет класс 'hidden' у элемента, делая его видимым.
// body.classList.add('modal-open');:

// body: Вероятно, это элемент <body> страницы.
// body.classList.add('modal-open'): Добавляет класс 'modal-open' к элементу <body>. Это может использоваться для применения стилей, связанных с открытым модальным окном.
// **pictures.addEventListener("click", (evt) => { ... });:`

// Продолжение предыдущего блока кода. Этот код относится к обработке событий клика на изображениях или элементах с классом '.picture'.
// bigPictureCancel.addEventListener("click", () => { ... });:

// bigPictureCancel: Вероятно, это элемент DOM, представляющий кнопку закрытия в увеличенном режиме изображения.
// bigPictureCancel.addEventListener("click", () => { ... });: Устанавливает обработчик событий для клика по кнопке закрытия, выполняющий код внутри стрелочной функции.
// bigPicture.classList.add('hidden');:

// bigPicture: Предположительно, это тот же элемент DOM, что и ранее.
// bigPicture.classList.add('hidden'): Добавляет класс 'hidden' к элементу, скрывая его.
// body.classList.remove('modal-open');:

// body: Предположительно, это тот же элемент <body>.
// body.classList.remove('modal-open'): Удаляет класс 'modal-open' из элемента <body>. Это может использоваться для удаления стилей, связанных с открытым модальным окном.
// В целом, этот код кажется связанным с отображением изображений в увеличенном режиме или модальном окне при клике на них, а также с закрытием этого увеличенного режима или модального окна.
