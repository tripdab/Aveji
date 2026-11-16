// Функция создания HTML-разметки одной карточки
function createProjectCard(item) {
  const basePath = `./img/projects/${item.imgName}`;

  return `
    <!-- card ${item.id} -->
    <a href="${item.link}" class="card projects__card">
      <picture>
        <source
          srcset="${basePath}.avif 1x, ${basePath}@2x.avif 2x"
          type="image/avif" />
        <source
          srcset="${basePath}.webp 1x, ${basePath}@2x.webp 2x"
          type="image/webp" />

        <img
          src="${basePath}.jpg"
          srcset="${basePath}@2x.jpg 2x"
          alt="${item.alt}"
          class="card__img" />
      </picture>

      <div class="card__footer">
        <p class="card__desc">${item.desc}</p>
        <img
          class="card__arrow-icon"
          src="./img/projects/arrow.svg"
          alt="Arrow" />
      </div>
    </a>
  `;
}

// Функция рендера всех карточек в контейнер
function renderProjects(data, containerSelector) {
  const container = document.querySelector(containerSelector);

  if (!container) return;
  container.innerHTML = data.map(createProjectCard).join('');
}

renderProjects(projectsData, '#projects-container');
