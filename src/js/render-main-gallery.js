import refs from './refs';
import { mainGallery } from './all-requests';
import debounce from 'lodash.debounce';



export function renderRowGallery(row) {
  return row
    .map(elem =>
      elem.title.length < 17
        ? `<div class="book-card-wrapper js-target" data-idbook="${elem._id}"><a class="overlay " href="#">
            <img class="js-target" src="${elem.book_image}" alt="${elem.title}" height="256" loading="lazy"/>
             <div class="overlay-field js-target">
              <p class="overlay-text">QUICK VIEW</p>
            </div> 
            <p class="book-name js-target" >${elem.title}</p>
            <p class="book-author js-target" >${elem.author}</p>
          </a></div>`
        : `<div class="book-card-wrapper js-target"  data-idbook="${elem._id}"><a class="overlay " href="#">
            <img class="js-target" src="${elem.book_image}" alt="${
            elem.title
          }" height="256" loading="lazy"/> 
           <div class="overlay-field js-target">
              <p class="overlay-text">QUICK VIEW</p>
            </div>
            <p class="book-name js-target" >${elem.title
              .split('')
              .slice(0, 17)
              .join('')}...</p>
            <p class="book-author js-target" >${elem.author}</p>
          </a></div>`
    )
    .join('');
}

// функція створення заголовку  групи книг
export function renderGalleryCat(books, cat) {
  refs.mainGalleryEl.innerHTML = '';
  let idx = Math.trunc(cat.split(' ').length / 2);
  refs.mainGalleryTitleEl.innerHTML = `${cat
    .split(' ')
    .splice(0, idx)
    .join(' ')} 
  <span class="category-title-span">${cat
    .split(' ')
    .splice(idx, idx)
    .join(' ')}</span>`;
  let markUp = '';
  markUp = renderRowGallery(books);
  refs.mainGalleryEl.classList.add('gal-category');
  refs.mainGalleryEl.insertAdjacentHTML('beforeend', markUp);
}


export function renderGallery(books) {
  refs.mainGalleryEl.classList.remove('gal-category');
  refs.mainGalleryTitleEl.innerHTML =
    "Best Sellers <span class='category-title-span'>Books</span>";
  refs.mainGalleryEl.innerHTML = '';
  let markUp = '';
  markUp = books
    .map(elem =>
      window.innerWidth >= 1440
        ? `<div class="books-category">
          <p class="books-category-title">${elem.list_name}</p>
          <ul>
            <li class="books__list">${renderRowGallery(elem.books)}</li>
          </ul>
          <button class="button-see-more" type="button" data-cat="${
            elem.list_name
          }">SEE MORE</button>
        </div>`
        : window.innerWidth >= 768
        ? `<div class="books-category">
          <p class="books-category-title">${elem.list_name}</p>
          <ul>
            <li class="books__list">${renderRowGallery(
              elem.books.slice(0, 3)
            )}</li>
          </ul>
          <button class="button-see-more" type="button" data-cat="${
            elem.list_name
          }">SEE MORE</button>
        </div>`
        : `<div class="books-category">
          <p class="books-category-title">${elem.list_name}</p>
          <ul>
            <li class="books__list">${renderRowGallery(
              elem.books.slice(0, 1)
            )}</li>
          </ul>
          <button class="button-see-more" type="button" data-cat="${
            elem.list_name
          }">SEE MORE</button>
        </div>`
    )
    .join('');

  refs.mainGalleryEl.insertAdjacentHTML('beforeend', markUp);
}
   window.addEventListener('resize', debounce(() => { mainGallery(); }, 100));