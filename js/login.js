import { enviarPeticion, ir } from "./herramientas.js";

export async function validarCredenciales() {
    console.log('Estamos en la función validarCredenciales()');
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const usuario = document.getElementById('email').value;
    const clave = document.querySelector('#clave').value;
    const claveEncriptada = md5(clave);
    //Ahora debemos validar los datos
    if (!regexEmail.test(usuario)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        return;
    }
    if (clave.length < 4) {
        alert('La contraseña debe tener al menos 4 caracteres.');
        return;
    }
    
    await enviarPeticion({
        url: "../backend/login/",
        method: "POST",
        param: {usuario, clave: claveEncriptada},
        fSuccess: (resp)=>{
            if(resp.code == 200){
                alert("El usuario ha iniciado sesión correctamente.");
                //ir("dash.html")
            }
            else {alert(resp.msg)}
        }
    });
}
