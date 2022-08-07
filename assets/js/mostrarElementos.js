const crearNuevaTarjeta = (nombre, precio,imagen,id) => {
    const tarjeta = document.createElement("div")
    tarjeta.classList.add("productos__seccion__tarjetas__tarjeta");
    const contenido = `
        <div class="productos__seccion__tarjetas__tarjeta__imagen">
            <img src="${imagen}" alt="">
        </div>
        <div class="productos__seccion__tarjetas__tarjeta__textos">
            <h4 class="productos__seccion__tarjetas__tarjeta__textos__nombre">${nombre}</h4>
            <p class="productos__seccion__tarjetas__tarjeta__textos__precio">${precio}</p>
            <a href="../detalle-producto.html?id=${id}"><p class="productos__seccion__tarjetas__tarjeta__textos__acceso vinculo">Ver producto</p></a>
        </div>`
    tarjeta.innerHTML = contenido;
    return tarjeta;
};

const definirTitulo = (categoria => {
    if (categoria == "clasicos"){
        return "Clásicos"
    }else if(categoria == "tentaciones"){
        return "Tentaciones";
        
    }else if(categoria == "tematicas"){
        return "Temáticas";
    };
});

const crearDivCategoria = (data, categoria) =>{
    let seccion = document.createElement("div");
    seccion.classList.add("contenedor");
    seccion.classList.add("productos__seccion");
    seccion.classList.add(categoria);
    const tituloCategoria = definirTitulo(categoria);
    seccion.innerHTML = 
    `<div class="producto__seccion__titulo">
        <h3 class="producto__seccion__titulo__titulo" id="${categoria}">
            ${tituloCategoria}
        </h3>
        <div class="producto__seccion__titulo__link">
            <a href="todos.html" class="vinculo">
                <span class="producto__seccion__titulo__link-texto">Ver todos >></span>
            </a>
        </div>
    </div>`
    var contenedorTarjetas = document.createElement("div");
    contenedorTarjetas.classList.add("productos__seccion__tarjetas");
    for (let clave in data){
        if(data[clave].categoria == tituloCategoria){
            const nuevaTarjeta = crearNuevaTarjeta(data[clave].nombre,data[clave].precio,data[clave].img,data[clave].id);        
            contenedorTarjetas.appendChild(nuevaTarjeta);
        }
    };
    seccion.appendChild(contenedorTarjetas);
    return seccion;
}

const categorias = ["clasicos","tematicas", "tentaciones"];

const productos = document.getElementById("productos");

async function cargarDatos(){
    const url = "https://productos-b618c-default-rtdb.firebaseio.com/productos.json";
    const resp = await fetch(url,
        {
            headers:{
                "Content-Type": "application/json",
            }
        }
    ).then(res => res);
    const data = await resp.json();
    categorias.forEach((categoria) => {
        const seccion = crearDivCategoria(data ,categoria);
        productos.appendChild(seccion);
    });
}

cargarDatos();