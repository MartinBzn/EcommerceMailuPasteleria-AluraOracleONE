import { productosServices } from "../service/productos-service.js";

const crearNuevaTarjeta = (nombre, precio, imagen, categoria,id) => {
    
    if (imagen == "" || imagen == undefined){
        imagen = '../assets/img/imagen_no_encontrada_gris.png';
    }
    const tarjeta = document.createElement("div")
    tarjeta.classList.add("productos__seccion__tarjetas__tarjeta");
    tarjeta.setAttribute('title',`${nombre}`);
    const contenido = `
        <div class="productos__seccion__tarjetas__tarjeta__imagen">
            <img src="${imagen}" alt="">
        </div>
        <div class="productos__seccion__tarjetas__tarjeta__textos">
            
            <div class="productos__seccion__tarjetas__tarjeta__textos__titulos">
                <h4 class="productos__seccion__tarjetas__tarjeta__textos__nombre">${nombre}</h4>
                <div class="productos__seccion__tarjetas__tarjeta__textos__iconos">
                    <img title="Eliminar Producto"src="assets/img/Borrar.svg" alt="Borrar" data-eliminar id="${id}" name="${nombre}">
                    <img title="Editar Producto" src="assets/img/Editar.svg" alt="Editar" data-editar>
                </div>
            </div>

            <p class="productos__seccion__tarjetas__tarjeta__textos__precio">${precio}</p>
            <p class="productos__seccion__tarjetas__tarjeta__textos__nombre">${categoria}</p>
        </div>`
    tarjeta.innerHTML = contenido;

    const btnEliminar = tarjeta.querySelector("[data-eliminar]");

    btnEliminar.addEventListener('click',() => {
        const id = btnEliminar.id;
        const nombre = btnEliminar.name;
        const ventana = document.getElementById("ventana-emergente")
        let msj = document.querySelector("[data-mensaje_texto]");
        const btnAceptar = document.querySelector("[data-boton_aceptar]");
        const btnCancelar = document.querySelector("[data-boton_cancelar]");
        console.log(id);
        console.log(nombre);
        console.log(ventana);
        console.log(btnAceptar);
        console.log(btnCancelar);
        msj.innerHTML = `¿Esta seguro que desea eliminar el producto <strong>${nombre}</strong>?`
        ventana.showModal();

        btnAceptar.addEventListener('click', () => {
            productosServices.eliminarProducto(id).then(respuesta => {
                console.log(respuesta);
            }).catch(err => alert("Ocurrio un error."))
            ventana.close();
        });

        btnCancelar.addEventListener('click', () =>{
            ventana.close();
        });
    })

    return tarjeta;
};

const seccionTarjetas = document.querySelector("[data-tarjetas]");

productosServices
.listaProductos().then((data) => {
    data.forEach(producto => {
        const nuevaTarjeta = crearNuevaTarjeta(producto.nombre,producto.precio,producto.img,producto.categoria,producto.id);
        seccionTarjetas.appendChild(nuevaTarjeta);
    });
}).catch((error) => alert("Ocurrio un error."));
