export function buildTimeline(items) {
  const container = document.querySelector("#timeline-container");

  if (!container) return;

  container.innerHTML = "";

  items.forEach((item) => {
    const li = document.createElement("li");

    li.classList.add("reveal");

    li.innerHTML = `
            <strong>${item.year}</strong>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
        `;

    container.appendChild(li);
  });
}
