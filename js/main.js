import { validarCredenciales } from './login.js';

document.addEventListener('DOMContentLoaded', (e) => {
    //alert('Hola, bienvenido a Gastosoft');
});

document.addEventListener('submit', (event) => {
    if (event.target && event.target.id === 'loginForm') {
        event.preventDefault(); // Evita el envío del formulario
        validarCredenciales();
    }
});

document.addEventListener("click", (e) => {
    //console.log(e.target);
});