export function validarCredenciales() {
    console.log('Estamos en la función validarCredenciales()');
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const usuario = document.getElementById('email').value;
    const clave = document.querySelector('#clave').value;
    console.log('Usuario:', usuario);
    console.log('Contraseña:', clave);
    //Ahora debemos validar los datos
    if (!regexEmail.test(usuario)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        return;
    }
    if (clave.length < 4) {
        alert('La contraseña debe tener al menos 4 caracteres.');
        return;
    }
    const datos = {usuario, clave};
    alert(`Usuario: ${usuario}\nContraseña: ${clave}`);
    console.log('Datos a enviar:', datos);
    
}