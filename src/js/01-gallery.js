import { galleryItems } from './gallery-items.js';
import { itemSimpleLightbox } from './item.js';
import SimpleLightbox from 'simplelightbox';
import '/node_modules/simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');

const getImageCollection = () => {
  const container = galleryItems.map(itemSimpleLightbox);
  galleryEl.insertAdjacentHTML('afterbegin', container.join(''));
};
getImageCollection();

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  disableRightClick: true,
});
