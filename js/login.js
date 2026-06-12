
export function validarCredenciales() {
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
    const datos = {parametros: {usuario, clave: claveEncriptada}, url:"http://localhost:8080/api/login", method: "POST"};
    console.log('Datos a enviar:', datos);
    await enviarPeticion({
        url: "controller/usuarios.php",
        method: "POST",
        param: {usuario, clave: claveEncriptada},
        fSuccess: (resp)=>{
            if(resp.code === 200){
                alert("El usuario ha iniciado sesión correctamente.");
                ir("index.html")
            }
            else {alert(resp.msg)}
        }
    });
    await enviarPeticion({parametros: {usuario, clave: claveEncriptada}, url:"http://localhost:8080/api/usuario"});
}

async function enviarPeticion(info) {
  let { url, method, param, fSuccess } = info, headers = { "Content-Type": "application/json" };
  if (method === "PATCH") headers = { "Content-Type": "multipart/form-data" }
  if (param !== undefined && method === "GET") url += "?" + new URLSearchParams(param)
  if (method === "GET") method = { method, headers }
  if (method === "POST" || method === "PUT" || method === "DELETE" || method === "PATCH") method = { method, headers, body: JSON.stringify(param) }

  try {
    //console.log(url,method)
    let resp = await fetch(url, method);
    if (!resp.ok) throw { status: resp.status, msg: resp.statusText };
    let respJson = await resp.json();
    fSuccess(respJson);
  } catch (e) {
    fSuccess({ code: e.status, msg: e.msg });
  }
};