// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchData } from './js/pixabay-api';
import {
  galleryMarkup,
  showMessage,
  showLoader,
  hideLoader,
} from './js/render-function.js';

const form = document.querySelector('.form');
const queryInput = document.querySelector('input[name="query"]');
const gallery = document.querySelector('.gallery');
const loadMoreButton = document.querySelector('.load-more');

iziToast.settings({
  messageColor: '#fafafb',
  position: 'bottomRight',
  backgroundColor: '#ef4040',
  iconColor: '#fafafb',
  close: false,
});

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
let query = '';
let page = 1;
const perPage = 15;
let images;

form.addEventListener('submit', async event => {
  event.preventDefault();
  query = queryInput.value.trim();
  if (query === '') {
    showMessage('Please enter a search query.');
    return;
  }
  loadMoreButton.classList.add('visually-hidden');
  gallery.innerHTML = '';
  page = 1;

  showLoader();

  try {
    images = await fetchData(query, page, perPage);
    if (images.hits.length === 0) {
      showMessage(
        'Sorry, there are no images matching your search query. Please try again!'
      );
      hideLoader();
      return;
    }

    if (images.hits.length < 15) {
      loadMoreButton.classList.add('visually-hidden');
    } else {
      loadMoreButton.classList.remove('visually-hidden');
    }
    galleryMarkup(images.hits);
    lightbox.refresh();
  } catch (error) {
    console.log(error);
  } finally {
    hideLoader();
    form.reset();
  }
});

loadMoreButton.addEventListener('click', async () => {
  page += 1;

  try {
    loadMoreButton.classList.add('visually-hidden');
    showLoader();

    images = await fetchData(query, page, perPage);
    galleryMarkup(images.hits);
    lightbox.refresh();

    const galleryCard = document
      .querySelector('.gallery-item')
      .getBoundingClientRect();
    const cardSize = galleryCard.height;
    window.scrollBy({
      top: cardSize * 2,
      left: 0,
      behavior: 'smooth',
    });

    if (images.total <= Math.ceil(page * perPage)) {
      loadMoreButton.classList.add('visually-hidden');
      showMessage("We're sorry, but you've reached the end of search results.");
    } else {
      loadMoreButton.classList.remove('visually-hidden');
    }
  } catch (error) {
    console.log(error);
  } finally {
    hideLoader();
  }
});
