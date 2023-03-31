'use strict';

// Agregar un detector de eventos a múltiples elementos 
const addEventOnElements = (elements, eventType, callback) =>
  elements.forEach(element => element.addEventListener(eventType, callback));

// Encuentra los elementos necesarios para alternar la barra de navegación móvil
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

// Alternar la visibilidad de la barra de navegación móvil y la superposición asociada
const toggleNavbar = () => {
  [navbar, overlay, document.body].forEach(element => element.classList.toggle("active"));
};

// Agregue un detector de eventos de clic a todos los botones de alternancia de la barra de navegación móvil
addEventOnElements(navTogglers, "click", toggleNavbar);



// * HEADER
// * active header when window scroll down to 100px
// */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
 if (window.scrollY > 100) {
   header.classList.add("active");
 } else {
   header.classList.remove("active");
 }
});
