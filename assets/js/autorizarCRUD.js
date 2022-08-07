const btnAgregar = document.getElementById("btn-agregar");

btnAgregar.addEventListener('click',()=>{
    const usuarioLogueado = usuarioEstaLogueado();
    if (usuarioLogueado[0]){
        window.location.href="./agregar-productos.html"
    }else{
        const ventana = document.getElementById("ventana-emergente")
        let msj = document.querySelector("[data-mensaje_texto]");
        const btnAceptar = document.querySelector("[data-boton_aceptar]");
        const btnCancelar = document.querySelector("[data-boton_cancelar]");
        msj.innerHTML = `Debe estar logueado para poder administrar productos.¿Desea loguearse?`
        ventana.showModal();
    
        btnAceptar.addEventListener('click', () => {
            window.location.href="./login.html";
            ventana.close();
        });
    
        btnCancelar.addEventListener('click', () =>{
            ventana.close();
        });
    }
})