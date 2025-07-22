// Habilidades
function renderHabilidades() {
  const contenedor = document.getElementById("contenedor-habilidades");
  const mensaje = document.getElementById("mensaje-carga");

  // habilidades.forEach((habilidad) => {
  habilidades.forEach((habilidad, index) => {
    const div = document.createElement("div");
    // div.className = "flex flex-col items-center";
    div.className = `
    bg-[#1e1e1e]
    rounded-lg
    shadow
    p-4
    opacity-0
    translate-y-4
    animate-fade-in
    animation-delay-${index * 100}
    `;

    const img = document.createElement("img");
    img.src = habilidad.logo;
    img.alt = habilidad.nombre;
    img.className = "w-16 h-16 mb-2";
    if (habilidad.invert) {
      img.classList.add("invert");
    }

    const nombre = document.createElement("span");
    nombre.textContent = habilidad.nombre;
    nombre.className = "text-softGray font-medium";

    const nivel = document.createElement("p");
    nivel.textContent = habilidad.nivel;
    nivel.className = "text-sm text-gray-400";

    div.appendChild(img);
    div.appendChild(nombre);
    div.appendChild(nivel);

    contenedor.appendChild(div);
  });

  if (mensaje) mensaje.remove();
}

document.addEventListener("DOMContentLoaded", renderHabilidades);

// Menu Toggle
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("mobile-menu");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });
});
