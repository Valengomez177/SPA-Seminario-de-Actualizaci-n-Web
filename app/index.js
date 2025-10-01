import { app } from './app.js';

document.addEventListener('DOMContentLoaded', app);
window.addEventListener("hashchange", app);

// Agregamos un evento que detecte los cambios 
// DOM dominio que contiene el manejo de javascript y maneja la app