import { proyectos } from "./projects.js";

// Mostrar Proyectos
document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("contenedor-proyectos");

  proyectos.forEach((proyecto) => {
    const card = document.createElement("div");
    // card.className = "bg-[#1e1e1e] rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300";
    card.className = `
    rounded-xl
    shadow-lg
    overflow-hidden
    hover:shadow-2xl
    hover:-translate-y-1
    hover:border-highlight
    transition-all
    duration-300
    `;

    card.innerHTML = `
      <img src="${proyecto.imagen}" alt="${proyecto.titulo}" class="w-full h-48 object-cover">
      <div class="p-4">
        <h3 class="text-lg font-semibold text-highlight text-white">${proyecto.titulo}</h3>
        <p class="text-sm text-[#CCE6FF] mb-4">${proyecto.descripcion}</p>
        <a href="${proyecto.enlace}" class="text-sm text-[#7AA3CD] hover:underline">Ver más →</a>
      </div>
    `;

    contenedor.appendChild(card);
  });
});
