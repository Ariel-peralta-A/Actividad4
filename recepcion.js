const stringUrl = window.location.search;

const urlVariables = new URLSearchParams(stringUrl)

const nombreRecibido = urlVariables.get('nombre');
const emailRecibido = urlVariables.get('email');
const edadRecibido = urlVariables.get('edad');
const paisRecibido = urlVariables.get('pais');


if (nombreRecibido && emailRecibido && edadRecibido && paisRecibido) {
    document.getElementById('mostrarNombre').textContent= nombreRecibido;
    document.getElementById('mostrarEmail').textContent= emailRecibido;
    document.getElementById('mostrarEdad').textContent= edadRecibido + "años";
    document.getElementById('mostrarPais').textContent= paisRecibido;
}else{
    const contenedor= document.getElementById('contenedorDatos');
    contenedor.className="";
    contenedor.innerHTML="<p class= 'error-critico'> Error: Acceso denegado. No se recibieron los parámetros necesarios desde el formulario.</p>"
}