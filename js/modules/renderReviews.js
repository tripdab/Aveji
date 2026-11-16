function createReviewCard(item) {
  return `
    <!-- review ${item.id} -->
    <li class="reviews__item">
      <picture class="reviews__quotes">
        <source
          media="(max-width: 500px)"
          srcset="./img/reviews/quotes-icon-mobile.svg" />
        <img
          class="reviews__quotes-img"
          src="./img/reviews/quotes-icon.svg"
          alt=""
          aria-hidden="true" />
      </picture>

      <cite class="reviews__name">${item.author}</cite>
      <blockquote class="reviews__text">
        ${item.text}
      </blockquote>
    </li>
  `;
}

export function renderReviews(data, containerSelector) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  container.innerHTML = data.map(createReviewCard).join('');
}
