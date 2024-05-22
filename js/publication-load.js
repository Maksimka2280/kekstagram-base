import{setPublications} from'./global-state.js'

const publicationTemplade = document.querySelector('#picture').content;
const pictures = document.querySelector('.pictures');
 const mgFiltersInactive = document.querySelector('.img-filters');



export const loadPublications = () => {
  fetch("/backend/publications.php", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      setPublications(data);
      data.forEach(publication => {

       loadPublication( publication.url, publication.comments.length, publication.likes, publication.id, )
      });
    });
    mgFiltersInactive.classList.remove('img-filters--inactive');

};


// export const loadPublications = () => { ... };:

// export: Это ключевое слово, используемое для экспорта функции loadPublications, чтобы она была доступна в других модулях.
// loadPublications: Это имя экспортируемой функции.
// fetch("/backend/publications.php", { method: "GET" }):

// fetch: Это встроенная функция в JavaScript, предназначенная для отправки запросов.
// "/backend/publications.php": Это URL, к которому отправляется GET-запрос.
// { method: "GET" }: Это объект опций для fetch, указывающий, что выполняется GET-запрос.
// .then((res) => res.json()):

// then(): Это метод Promise, который выполняет указанный обратный вызов после успешного завершения предыдущей асинхронной операции.
// (res) => res.json(): Это обработка ответа. Здесь мы используем res.json(), чтобы преобразовать тело ответа в формат JSON.
// .then((data) => { ... }):

// Еще один then(), который обрабатывает данные (уже в формате JSON), полученные из предыдущего then().
// setPublications(data);:

// Вызываем функцию setPublications (предположительно из предыдущего кода), чтобы обновить данные о публикациях в соответствии с полученными данными.
// data.forEach(publication => { ... });:

// data.forEach(): Используем цикл forEach, чтобы перебрать каждую публикацию в полученных данных.
// publication: Это переменная, представляющая текущую публикацию в цикле.
// loadPublication(publication.url, publication.comments.length, publication.likes, publication.id);:

// Вызываем функцию loadPublication для загрузки данных о каждой публикации. Передаем параметры, такие как URL изображения, количество комментариев, количество лайков и идентификатор публикации.
// Этот код, похоже, предназначен для загрузки данных о публикациях с сервера, обновления их в локальном хранилище (с помощью setPublications) и вызова функции loadPublication для каждой публикации с полученными данными.









 export const loadPublication = (src, countComments, countLikes, publicationId ) => {



    const publication = publicationTemplade.cloneNode(true);

    publication.querySelector( 'a' ).dataset.publicationId = publicationId;



  publication.querySelector('img').src = src;

  publication.querySelector('.picture__comments').textContent = countComments;

  publication.querySelector('.picture__likes').textContent = countLikes;

  pictures.append(publication);



 }


//  const loadPublication = (src, countComments, countLikes, publicationId) => { ... };:

// loadPublication: Это функция, принимающая четыре параметра: src (URL изображения), countComments (количество комментариев), countLikes (количество лайков) и publicationId (идентификатор публикации).
// const publication = publicationTemplate.cloneNode(true);:

// publication: Это переменная, представляющая новый элемент DOM, который является клоном шаблона публикации. Предположительно, publicationTemplate - это заранее созданный шаблон для отображения публикаций.
// publication.querySelector('a').dataset.publicationId = publicationId;:

// Устанавливаем значение атрибута data-publicationId у ссылки внутри публикации. Это может быть использовано, например, для хранения идентификатора публикации в DOM.
// publication.querySelector('img').src = src;:

// Устанавливаем значение src для изображения внутри публикации, используя переданный URL src.
// publication.querySelector('.picture__comments').textContent = countComments;:

// Устанавливаем текстовое содержимое элемента с классом 'picture__comments' внутри публикации, используя переданное количество комментариев countComments.
// publication.querySelector('.picture__likes').textContent = countLikes;:

// Устанавливаем текстовое содержимое элемента с классом 'picture__likes' внутри публикации, используя переданное количество лайков countLikes.
// pictures.append(publication);:

// Предположительно, pictures - это контейнер, в который добавляется новая публикация с помощью метода append. Это может быть, например, контейнер для отображения всех публикаций.
// Этот код предназначен для создания и добавления новых публикаций на страницу, используя данные, переданные в функцию loadPublication.



