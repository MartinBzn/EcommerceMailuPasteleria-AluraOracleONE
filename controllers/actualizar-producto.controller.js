import { productosServices } from "../service/productos-service.js";

const formulario = document.querySelector("[data-form]");

const obtenerInformacion = () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    if( id == null){
        window.location.href = "/error.html";
    }

    const img = document.getElementById("urlimagen");
    const categoria = document.getElementById("categoria");
    const opciones = document.getElementsByClassName("formularios__opciones");
    const nombre = document.getElementById("nom-producto");
    const precio = document.getElementById("precio");
    const descripcion = document.getElementById("descripcion");

    productosServices.detalleProducto(id).then(producto => {
        img.value = producto.img;
        for(var i = 0; i < opciones.length; i++){
            if(opciones[i].innerText == producto.categoria){
                opciones[i].selected = true;
            }else{
                opciones[i].selected = false;
            }
        }
        nombre.value = producto.nombre;
        precio.value = producto.precio;
        descripcion.value = producto.descripcion;
    });
};

obtenerInformacion();

formulario.addEventListener("submit",(evento)=>{
    evento.preventDefault();

    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const img = document.getElementById("urlimagen").value;
    const categoria = document.getElementById("categoria").value;
    const opciones = document.getElementsByClassName("formularios__opciones");
    var opcion = 0;
    for(var i = 0; i < opciones.length; i++){
        if(opciones[i].value == categoria){
            opcion = i;
            break;
        }
    }
    const nombre = document.getElementById("nom-producto").value;
    const precio = document.getElementById("precio").value;
    const descripcion = document.getElementById("descripcion").value;

    const ventana = document.getElementById("ventana-emergente")
    let msj = document.querySelector("[data-mensaje_texto]");
    const btnAceptar = document.querySelector("[data-boton_aceptar]");
    const btnCancelar = document.querySelector("[data-boton_cancelar]");
    msj.innerHTML = `¿Esta seguro que desea editar el producto <strong>${nombre}</strong>?`
    ventana.showModal();

    btnAceptar.addEventListener('click', () => {
        productosServices.actualizarProducto(img,opciones[opcion].innerText, nombre,precio,descripcion, id)
        .then(()=>{window.location.href = "/registro-editado.html"})
        .catch(err => alert("Ocurrio un error."))
        ventana.close();
    });

    btnCancelar.addEventListener('click', () =>{
        ventana.close();
    });
})