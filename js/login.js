export function validarCredenciales() {
    console.log('Estamos en la función validarCredenciales()');
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const usuario = document.getElementById('email').value;
    const clave = document.querySelector('#clave').value;
    //Ahora debemos validar los datos
    if (!regexEmail.test(usuario)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        return;
    }
    if (clave.length < 4) {
        alert('La contraseña debe tener al menos 4 caracteres.');
        return;
    }
    const datos = {parametros: {usuario, clave}, url:"http://localhost:8080/api/login", method: "POST"};
    console.log('Datos a enviar:', datos);
    enviarPeticion(datos);
}

function enviarPeticion(datos) {
    let {parametros, url, method} = datos;
    try {
        fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(parametros)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Respuesta del servidor:', data);
        })
        .catch(error => {
            console.error('Error al enviar la petición:', error);
        });
    } catch (error) {
        console.error('Error en la función enviarPeticion:', error);
    }
    
}