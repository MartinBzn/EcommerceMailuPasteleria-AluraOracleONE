const usuario = {
    usuario:"martin@mail.com",
    contrasenia:"abc1234",
}

const usuariosPermitidos = JSON.parse(window.localStorage.getItem('usuario'));
const datosLogueo = JSON.parse(window.localStorage.getItem('usuarioEstaLogueado'));

function validarTamanioTexto(valor){
    return (valor.length != 0)
}

function validarEmail(valor){

    if(validarTamanioTexto(valor)){
        if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(valor)){
            return "OK"
        }else{
            return "El formato de la direccion de mail no es el correcto";
        }
    }else{
        return "Por favor completar el campo Usuario";
    }    
}

function validarContrasenia(valor){

    if(validarTamanioTexto(valor)){
        if (/^.{4,8}$/i.test(valor)){
            return "OK"
        }else{
            return "La contraseña debe tener entre 4 y 8 caracteres";
        }
    }else{
        return "Por favor completar el campo contraseña";
    }    
}

const validarUsuario = (email,contrasenia)=>{
    return (usuariosPermitidos.usuario == email && usuariosPermitidos.contrasenia == contrasenia)
}

const usuarioCorrecto = (usuario)=>{
    window.localStorage.removeItem(datosLogueo);
    const loguearUsuario = {
        usuario:usuario,
        logueado:true,
    }
    window.localStorage.setItem("usuarioLogueado",JSON.stringify(loguearUsuario));
    window.location.href=urlAnterior;
}

const mostrarMensajeError = () => {
    msjVentana.innerHTML = 'Usuario y/o Contraseña incorrectos';
    ventanaEmergente.showModal();
    btnAceptar.addEventListener('click',() =>{ventanaEmergente.close()})
}

window.localStorage.setItem("usuario",JSON.stringify(usuario));
const urlAnterior = document.referrer;

var respuesta = "";

const formLogin = document.getElementById("form-login");

formLogin.onsubmit = evento =>{
    evento.preventDefault();
    var email = document.getElementById("email-usuario");
    var contrasenia = document.getElementById("password");   
    respuesta = validarEmail(email.value);
    if (respuesta == 'OK'){
        respuesta = validarContrasenia(contrasenia.value);
        if(respuesta == 'OK'){
            if (validarUsuario(email.value,contrasenia.value)){
                usuarioCorrecto(email.value);
            }else{
                mostrarMensajeError();
            };
        }    
    }
}

