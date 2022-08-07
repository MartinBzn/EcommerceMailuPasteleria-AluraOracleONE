import { productosServices } from "../../service/productos-service.js";

const crearNuevaTarjeta = (nombre, precio,imagen,id) => {
    const tarjeta = document.createElement("div")
    tarjeta.classList.add("productos__seccion__tarjetas__tarjeta","similares");
    const contenido = `
        <div class="productos__seccion__tarjetas__tarjeta__imagen">
            <img src="${imagen}" alt="">
        </div>
        <div class="productos__seccion__tarjetas__tarjeta__textos">
            <h4 class="productos__seccion__tarjetas__tarjeta__textos__nombre">${nombre}</h4>
            <p class="productos__seccion__tarjetas__tarjeta__textos__precio">${precio}</p>
            <a href="./detalle-producto.html?id=${id}"><p class="productos__seccion__tarjetas__tarjeta__textos__acceso vinculo">Ver producto</p></a>
        </div>`
    tarjeta.innerHTML = contenido;
    return tarjeta;
};

const crearDivCategoria = (data, categoria,id) =>{
    let seccion = document.createElement("div");
    seccion.classList.add("contenedor");
    seccion.classList.add("productos__seccion");
    seccion.classList.add(categoria);
    seccion.innerHTML = 
    `<div class="producto__seccion__titulo"></div>`
    var contenedorTarjetas = document.createElement("div");
    contenedorTarjetas.classList.add("productos__seccion__tarjetas");
    var contador = 0;
    for (let clave in data){
        if((data[clave].categoria == categoria) && (data[clave].id != id) && (contador < 4)) {
            console.log(clave , data[clave].id);
            const nuevaTarjeta = crearNuevaTarjeta(data[clave].nombre,data[clave].precio,data[clave].img,data[clave].id);        
            contenedorTarjetas.appendChild(nuevaTarjeta);
            contador = contador + 1;
            console.log (contador);
        }
    };
    seccion.appendChild(contenedorTarjetas);
    return seccion;
}

async function cargarProductosSimilares(categoria,id){
    const productos = document.getElementById("productos");
    const url = "https://productos-b618c-default-rtdb.firebaseio.com/productos.json";
    const resp = await fetch(url,
        {
            headers:{
                "Content-Type": "application/json",
            }
        }
    ).then(res => res);
    const data = await resp.json();
    const seccion = crearDivCategoria(data ,categoria, id);
    productos.appendChild(seccion);

}

const existeProducto = ( producto )=>{ return (producto.img && producto.opciones != 0 && producto.nombre && producto.precio && producto.descripcion)};

const obtenerInformacion = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    if( id == null){
        window.location.href = "./error.html";
        console.log("No se encontro el ID");
    };

    const img = document.getElementById("imagen");
    const categoria = document.getElementById("categoria");
    const nombre = document.getElementById("nombre");
    const precio = document.getElementById("precio");
    const descripcion = document.getElementById("descripcion");
    try{
        const producto = await productosServices.detalleProducto(id);
        if (existeProducto(producto)){
            img.src = producto.img;
            categoria.innerHTML = producto.categoria
            nombre.innerHTML = producto.nombre;
            precio.innerHTML = producto.precio;
            descripcion.innerHTML = producto.descripcion;
            cargarProductosSimilares(producto.categoria,id);
        }else{
            throw new Error();
        }        
    }catch(error){
        window.location.href = "./error.html";
    };
};

obtenerInformacion();