export function initMap() {
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("map-point")) {
      const location = e.target.dataset.location;

      showLocation(location);
    }
  });
}

function showLocation(location) {
  const container = document.querySelector("#map-container");

  const info = document.createElement("div");

  info.classList.add("card");

  info.innerHTML = `
        <h3>${location}</h3>
        <p>Location details about ${location} will appear here.</p>
    `;

  container.appendChild(info);
}
