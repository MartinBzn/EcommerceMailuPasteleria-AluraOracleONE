const cerrarSesion = ()=>{
    
    const ventana = document.getElementById("ventana-emergente")
    let msj = document.querySelector("[data-mensaje_texto]");
    const btnAceptar = document.querySelector("[data-boton_aceptar]");
    const btnCancelar = document.querySelector("[data-boton_cancelar]");
    msj.innerHTML = `¿Esta seguro que desea cerrar esta sesión?</strong>?`
    ventana.showModal();

    btnAceptar.addEventListener('click', () => {        
        try{
            const usuarioLogueado = {
                usuario:"",
                logueado : false,
            }
            window.localStorage.setItem("usuarioLogueado",JSON.stringify(usuarioLogueado));
            botonesCabecera();
            window.location.href = "/index.html";
        }catch{
            window.location.href = "/error.html";
            console.log("Ocurrio un error. " + err)
        };
        ventana.close();
        window.location.href="/todos.html";
    });

    btnCancelar.addEventListener('click', () =>{
        ventana.close();
        window.location.href="/todos.html";
    });
}

cerrarSesion();
