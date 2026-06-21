export function renderCards(containerSelector, items, createCard) {
  const container = document.querySelector(containerSelector);

  if (!container || !items) return;

  container.innerHTML = "";

  items.forEach((item) => {
    const card = createCard(item);
    container.appendChild(card);
  });
}
export function createCharacterCard(character) {
  const article = document.createElement("article");

  article.classList.add("card");

  article.innerHTML = `
        <img src="${character.image}" alt="${character.name}">
        <h3>${character.name}</h3>
        <p>${character.title}</p>
        <button data-id="${character.id}" class="open-modal">
            Learn More
        </button>
    `;

  return article;
}
export function createThemeCard(theme) {
  const article = document.createElement("article");

  article.classList.add("card");

  article.innerHTML = `
        <h3>${theme.icon} ${theme.title}</h3>
        <p>${theme.quote}</p>
    `;

  return article;
}

export function createVisionCard(vision) {
  const article = document.createElement("article");

  article.classList.add("card");

  article.innerHTML = `
        <h3>${vision.icon} ${vision.title}</h3>
        <p>${vision.meaning}</p>
    `;

  return article;
}

export function createRestorationCard(item) {
  const article = document.createElement("article");

  article.classList.add("card");

  article.innerHTML = `
        <h3>${item.title}</h3>
        <p>${item.text}</p>
    `;

  return article;
}

export function createHistoryCard(item) {
  const article = document.createElement("article");

  article.classList.add("card");

  article.innerHTML = `
        <h3>${item.title}</h3>
        <p>${item.text}</p>
    `;

  return article;
}
