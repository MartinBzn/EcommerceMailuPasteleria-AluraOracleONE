const crearNuevaTarjeta = (nombre, precio,imagen) => {
    const tarjeta = document.createElement("div")
    tarjeta.classList.add("productos__seccion__tarjetas__tarjeta");
    const contenido = `
        <div class="productos__seccion__tarjetas__tarjeta__imagen">
            <img src="${imagen}" alt="">
        </div>
        <div class="productos__seccion__tarjetas__tarjeta__textos">
            <h4 class="productos__seccion__tarjetas__tarjeta__textos__nombre">${nombre}</h4>
            <p class="productos__seccion__tarjetas__tarjeta__textos__precio">${precio}</p>
            <a href="#" class="vinculo productos__seccion_tarjetas__tarjeta__textos__link">Ver todos</a>
        </div>`
    tarjeta.innerHTML = contenido;
    return tarjeta;
};

const tarjetasClasicos = document.getElementsByClassName("clasicos");

const http = new XMLHttpRequest();

http.open("GET","http://localhost:3000/productos");

http.send();

http.onload = () => {
    const data = JSON.parse(http.response);
    var contenedorTarjetas = document.createElement("div");
    contenedorTarjetas.classList.add("productos__seccion__tarjetas");
    data.forEach(tarjeta => {        
        const nuevaTarjeta = crearNuevaTarjeta(tarjeta.nombre,tarjeta.precio,tarjeta.img);        
        contenedorTarjetas.appendChild(nuevaTarjeta);       
    });
    tarjetasClasicos[0].appendChild(contenedorTarjetas);

} 