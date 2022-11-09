export const itemSimpleLightbox = ({ original, description, preview }) =>
  `
  <div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
  </div>
  `;
