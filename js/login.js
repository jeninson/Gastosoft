export function validarCredenciales() {
    console.log('Estamos en la función validarCredenciales()');
    const usuario = document.getElementById('email').value;
    const clave = document.querySelector('#clave').value;
    let user = email.value;
    console.log('Usuario:', usuario);
    console.log('Contraseña:', clave);
    console.log('Valor del campo email:', user);
    alert(`Usuario: ${usuario}\nContraseña: ${clave}\nValor del campo email: ${user}`);
    //Ahora debemos validar los datos
}