import { productosServices } from "../service/productos-service.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener('submit',(evento) => {
    evento.preventDefault();
    const img = document.getElementById('urlimagen').value;
    const categoria = document.getElementById('categoria').value;
    const nomProducto = document.getElementById('nom-producto').value;
    const precio = document.getElementById('precio').value;
    const descripcion = document.getElementById('descripcion').value;
    productosServices.crearProducto(img,categoria,nomProducto,precio,descripcion).then(respuesta =>{
        console.log(respuesta)
    }).catch(err => console.log(err));
})