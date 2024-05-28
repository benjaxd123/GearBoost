
    var nombre = document.getElementById("nombre");
    var apellido = document.getElementById("apellido");
    var rut = document.getElementById("rut");
    var telefono = document.getElementById("telefono");
    var correo = document.getElementById("correo");
    var contraseña = document.getElementById("contraseña");
    var contraseña2 = document.getElementById("contraseña2");
    
    error.style.color = 'red';
    function validarRegistro() {
        console.log('Enviando formulario...')
    expresion = /\w+@\w+\.+[a-z]/;
        var mensajesError = []

    if (nombre.value === null || nombre.value === '' ||nombre.value.length > 30 || nombre.value.length < 4) {
        mensajesError.push("El nombre no es válido")
    }
    if (apellido.value === null || nombre.value === '' ||apellido.value.length > 30 || apellido.value.length < 4) {
        mensajesError.push("El apellido no es válido")
    }
    if (rut.value === null || rut.value === '' ||rut.value.length > 10 || rut.value.length < 9){
        mensajesError.push("Ingresa un rut valido")
    }
    if (telefono === null || telefono.value === ''||telefono.value.length > 10 || telefono.value.length < 9) {
        mensajesError.push("Ingresa un telefono valido")
    }
    if (isNaN(telefono)) {
        mensajesError.push("El telefono ingresado no es un número")
    }
    if (correo.value === null|| correo.value === ''||correo.value.length > 60 || correo.value.length < 10) {
        mensajesError.push("El correo no es válido")
    }
    if(!expresion.test(correo)){
        mensajesError.push("El correo no cumple los requisitos de correo")
    }
    if (contraseña.value === null|| contraseña.value === ''||contraseña.value.length > 30 || contraseña.value.length < 5) {
        mensajesError.push("La contraseña no es valida")
    }
    if (contraseña2.value === null|| contraseña2.value === ''||contraseña2 != contraseña) {
        mensajesError.push("Las contraseñas deben ser iguales")
    }
    /*************CORRECCION MENSAJE FORMULARIO****************************/ 
    
    error.innerHTML = '';
    mensajesError.forEach(function(mensaje) {
        var errorDiv = document.createElement('div');
        errorDiv.textContent = mensaje;
        error.appendChild(errorDiv);
    });

    return mensajesError.length === 0;
    /*****************************************/ 
}




    var usuario = document.getElementById("usuario");
    var password = document.getElementById("password");
    error.style.color = 'red';
    function validarAdmin() {

    expresion = /\w+@\w+\.+[a-z]/;
        var mensajesError = []

    if(usuario.value === null || usuario.value === '' || usuario.value.length < 5) {
        mensajesError.push("Nombre de usuario es incorrecto");
    }
    
    if (password.value === null || password.value === '' || password.value.length < 4) {
        mensajesError.push("Contraseña incorrecta")
    }
    /*************CORRECCION MENSAJE FORMULARIO****************************/ 
    
    error.innerHTML = '';
    mensajesError.forEach(function(mensaje) {
        var errorDiv = document.createElement('div');
        errorDiv.textContent = mensaje;
        error.appendChild(errorDiv);
    });

    return mensajesError.length === 0;
    /*****************************************/ 
}


var correo = document.getElementById("correo");
var password = document.getElementById("password")
error.style.color = 'red';
function validarLogin() {

    expresion = /\w+@\w+\.+[a-z]/;
    var mensajesError = []

    if (correo.value === null || correo.value === '' ||correo.value.length > 60 || correo.value.length < 6) {
        mensajesError.push("El correo no es válido")
    }
    if (password.value === null || password.value === '' ||password.value.length > 30 || password.value.length < 6) {
        mensajesError.push("La contraseña no es válida")
    }
    /*************CORRECCION MENSAJE FORMULARIO****************************/ 
    error.innerHTML = '';
    mensajesError.forEach(function(mensaje) {
        var errorDiv = document.createElement('div');
        errorDiv.textContent = mensaje;
        error.appendChild(errorDiv);
    });

    return mensajesError.length === 0;
    /**********************************************************************/
}

var correo = document.getElementById("correo");
var nombre = document.getElementById("nombre");
var apellido = document.getElementById("apellido");
var telefono = document.getElementById("telefono");
error.style.color = 'red';
function validarUsuarios() {

    var mensajesError = []
    
    if (nombre.value === null || nombre.value === '' || nombre.value.length < 4){
        mensajesError.push("El nombre no es valido")
    }
    if (apellido.value === null || apellido.value === '' || apellido.value.length < 4){
        mensajesError.push("El apellido no es valido")
    }
    if (correo.value === null || correo.value === '' || correo.value.length < 5 ){
        mensajesError.push("El correo no es valido")
    }
    if (telefono.value === null || telefono.value === '' || telefono.value.length < 9 || telefono.value.length > 9){
        mensajesError.push("El telefono no es valido")
    }
    /*************CORRECCION MENSAJE FORMULARIO****************************/ 
    error.innerHTML = '';
    mensajesError.forEach(function(mensaje) {
        var errorDiv = document.createElement('div');
        errorDiv.textContent = mensaje;
        error.appendChild(errorDiv);
    });

    return mensajesError.length === 0;
    /**********************************************************************/
}

