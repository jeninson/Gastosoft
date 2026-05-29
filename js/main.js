document.addEventListener('DOMContentLoaded', (e) => {
    //alert('Hola, bienvenido a Gastosoft');
});

document.addEventListener('submit', (event) => {
    if (event.target && event.target.id === 'loginForm') {
        event.preventDefault(); // Evita el envío del formulario
        login();
    }
});

function login() {
    console.log('Estamos en la función login()');
    const usuario = document.getElementById('email').value;
    const clave = document.querySelector('#clave').value;
    let user = email.value;
    console.log('Usuario:', usuario);
    console.log('Contraseña:', clave);
    console.log('Valor del campo email:', user);
    alert(`Usuario: ${usuario}\nContraseña: ${clave}\nValor del campo email: ${user}`);
}


