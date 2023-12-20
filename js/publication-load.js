import{setPublications} from'./global-state.js'

const publicationTemplade = document.querySelector('#picture').content;
const pictures = document.querySelector('.pictures');

export const loadPublications = () => {
  fetch("/backend/publications.php", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      setPublications(data);
      data.forEach(publication => {
       loadPublication( publication.url, publication.comments.length, publication.likes, publication.id )
      });
    });
};


  const loadPublication = (src, countComments, countLikes, publicationId ) => {

  const publication = publicationTemplade.cloneNode(true);

  publication.querySelector( 'a' ).publicationId = publicationId;



  publication.querySelector('img').src = src;

  publication.querySelector('.picture__comments').textContent = countComments;

  publication.querySelector('.picture__likes').textContent = countLikes;

  pictures.append(publication);



 }



