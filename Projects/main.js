// Mostrar Proyectos
document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("contenedor-proyectos");

  proyectos.forEach((proyecto) => {
    const card = document.createElement("div");
    // card.className = "bg-[#1e1e1e] rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300";
    card.className = `
    bg-[#1e1e1e]
    rounded-xl
    shadow-lg
    overflow-hidden
    hover:shadow-2xl
    hover:-translate-y-1
    hover:border-highlight
    hover:border
    transition-all
    duration-300
    `;

    card.innerHTML = `
      <img src="${proyecto.imagen}" alt="${proyecto.titulo}" class="w-full h-48 object-cover">
      <div class="p-4">
        <h3 class="text-lg font-semibold text-highlight">${proyecto.titulo}</h3>
        <p class="text-sm text-gray-300 mb-4">${proyecto.descripcion}</p>
        <a href="${proyecto.enlace}" class="text-sm text-blue-400 hover:underline">Ver más →</a>
      </div>
    `;

    contenedor.appendChild(card);
  });
});
