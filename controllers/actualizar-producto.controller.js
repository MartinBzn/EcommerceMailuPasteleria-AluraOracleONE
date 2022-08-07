import { productosServices } from "../service/productos-service.js";

const formulario = document.querySelector("[data-form]");

const existeProducto = ( producto )=>{ return (producto.img && producto.opciones != 0 && producto.nombre && producto.precio && producto.descripcion)};

const obtenerInformacion = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    if( id == null){
        window.location.href = "/error.html";
    }

    const img = document.getElementById("urlimagen");
    const opciones = document.getElementsByClassName("formularios__opciones");
    const nombre = document.getElementById("nom-producto");
    const precio = document.getElementById("precio");
    const descripcion = document.getElementById("descripcion");

    try{
        const producto = await productosServices.detalleProducto(id);
        if (existeProducto(producto)){
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
        }else{
            throw new Error();
        }        
    }catch(error){
        window.location.href = "/error.html";
        console.log("Ocurrio un error al trar de obtener la informacion." + error);
    };    
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

    btnAceptar.addEventListener('click', async () => {
        productosServices.actualizarProducto(img,opciones[opcion].innerText, nombre,precio,descripcion, id)
        .then(()=>{window.location.href = "/registro-editado.html"})
        .catch(err => {
            window.location.href = "/error.html";
            console.log("Ocurrio un error al tratar de actualizar el registro. " + err)
        });
        ventana.close();
    });

    btnCancelar.addEventListener('click', () =>{
        ventana.close();
    });
})