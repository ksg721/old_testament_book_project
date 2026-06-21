import { loadJSON } from "./loader.js";
import {
  renderCards,
  createCharacterCard,
  createThemeCard,
  createVisionCard,
  createRestorationCard,
  createHistoryCard,
} from "./cards.js";
import { initModal, setModalContent } from "./modal.js";
import { buildTimeline } from "./timeline.js";
import { initMap } from "./map.js";
import { initQuiz } from "./quiz.js";

document.addEventListener("DOMContentLoaded", init);

async function init() {
  initModal();
  initMap();

  const hero = await loadJSON("hero");
  const history = await loadJSON("history");
  const characters = await loadJSON("characters");
  const themes = await loadJSON("themes");
  const visions = await loadJSON("visions");
  const restoration = await loadJSON("restoration");
  const timeline = await loadJSON("timeline");
  const quiz = await loadJSON("quiz");
  const references = await loadJSON("references");

  // Characters
  renderCards("#character-container", characters, createCharacterCard);

  // Themes
  renderCards("#theme-container", themes, createThemeCard);

  renderCards("#vision-container", visions, createVisionCard);

  renderCards("#restoration-container", restoration, createRestorationCard);

  renderCards("#history-container", history, createHistoryCard);

  // Timeline
  buildTimeline(timeline);

  // Quiz
  initQuiz(quiz);

  // Modal data handler
  document.addEventListener("request-character", (e) => {
    const character = characters.find((c) => c.id === e.detail.id);

    if (!character) return;

    setModalContent(`
            <h2>${character.name}</h2>
            <p><strong>Title:</strong> ${character.title}</p>
            <p><strong>Location:</strong> ${character.location}</p>
            <p>${character.summary}</p>
        `);
  });

  // Scroll reveal (Intersection Observer)
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  });

  document.querySelectorAll(".reveal").forEach((el) => {
    observer.observe(el);
  });

  document.querySelector(".hero-subtitle").textContent = hero.subtitle;
  document.querySelector(".hero-title").textContent = hero.title;
  document.querySelector(".hero-description").textContent = hero.description;

  // Meet Amos section
  document.querySelector("#intro-text").textContent =
    "Amos was a shepherd from Tekoa who was called by God to preach repentance and justice to the Northern Kingdom of Israel.";

  const referenceContainer = document.querySelector("#reference-container");

  referenceContainer.innerHTML = "";

  references.forEach((reference) => {
    const li = document.createElement("li");

    li.innerHTML = `
        <a href="${reference.url}" target="_blank" rel="noopener noreferrer">
            ${reference.title}
        </a>
    `;

    referenceContainer.appendChild(li);
  });
}
