import { habilidades } from "./skills.js";
import { proyectos } from "./Projects/projects.js";

// Habilidades
function renderHabilidades() {
  const contenedor = document.getElementById("contenedor-habilidades");
  const mensaje = document.getElementById("mensaje-carga");

  habilidades.forEach((habilidad) => {
    const div = document.createElement("div");
    // div.className = "flex flex-col items-center ";
    div.className = `
    flex 
    flex-col 
    items-center
    rounded-xl
    shadow-lg
    overflow-hidden
    hover:shadow-2xl
    hover:-translate-y-1
    hover:border-highlight
    transition-all
    duration-300
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

// Proyectos Destacados
const contenedor = document.getElementById("proyectos-destacados");

proyectos.forEach((proyecto) => {
  const card = document.createElement("div");
  card.className =
    "bg-deepBlue rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300";

  card.innerHTML = `
    <img
      src="${proyecto.imagen}"
      alt="${proyecto.titulo}"
      class="w-full h-48 object-cover"
    />
    <div class="p-4 text-left">
      <h3 class="text-xl font-semibold text-highlight mb-2 text-white">
        ${proyecto.titulo}
      </h3>
      <p class="text-softGray mb-4 text-[#CCE6FF]">
        ${proyecto.descripcion}
      </p>
      <a
        href="${proyecto.enlace}"
        target="_blank"
        class="text-neonGreen font-semibold hover:underline text-[#7AA3CD]"
      >
        Ver en GitHub
      </a>
    </div>
  `;

  contenedor.appendChild(card);
});

// Formulario Contacto

// document
//   .getElementById("formulario-contacto")
//   .addEventListener("submit", function (e) {
//     e.preventDefault();

//     const nombre = document.getElementById("nombre").value.trim();
//     const correo = document.getElementById("correo").value.trim();
//     const mensaje = document.getElementById("mensaje").value.trim();
//     const feedback = document.getElementById("feedback");

//     if (!nombre || !correo || !mensaje) {
//       feedback.textContent = "⚠️ Por favor completa todos los campos.";
//       feedback.classList.remove("text-green-400");
//       feedback.classList.add("text-red-400");
//       return;
//     }

//     feedback.textContent = "⏳ Enviando mensaje...";
//     feedback.classList.remove("text-red-400");
//     feedback.classList.add("text-blue-400");

//     // Simulación de envío
//     setTimeout(() => {
//       feedback.textContent = "✅ ¡Mensaje enviado con éxito!";
//       feedback.classList.remove("text-blue-400");
//       feedback.classList.add("text-green-400");
//     }, 1000);
//   });


// Inicializar EmailJS

emailjs.init("yaYa2D8dwUUqILdTJ");

const form = document.getElementById("formulario-contacto-form");
const feedback = document.getElementById("feedback");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = form.nombre.value.trim();
  const correo = form.correo.value.trim();
  const mensaje = form.mensaje.value.trim();

  if (!nombre || !correo || !mensaje) {
    feedback.textContent = "⚠️ Por favor completa todos los campos.";
    feedback.className = "text-red-400 mt-4";
    return;
  }

  feedback.textContent = "⏳ Enviando mensaje...";
  feedback.className = "text-blue-400 mt-4";

  emailjs
    .sendForm("service_qumew5m", "template_k7jay88", form)
    .then(() => {
      feedback.textContent = "✅ ¡Mensaje enviado con éxito!";
      feedback.className = "text-green-400 mt-4";
      form.reset();
    })
    .catch(() => {
      feedback.textContent =
        "❌ Error al enviar el mensaje. Intenta más tarde.";
      feedback.className = "text-red-400 mt-4";
    });
});
