const servidor = "http://localhost:3000/productos";

const listaProductos = () => fetch(servidor).then(respuesta => respuesta.json());
// const listaProductos = () => fetch("https://api-pasteleria-mailu.herokuapp.com/api/productos",{mode:'no-cors'}).then(respuesta => respuesta.json());

const crearProducto = (imagen, categoria, nombre, precio, descripcion) => {
    if (imagen == ""){
        imagen = '../assets/img/imagen_no_encontrada_gris.png';
    }
    return fetch(servidor,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({imagen, categoria, nombre, precio, descripcion, id:uuid.v4()})
    })

}

const eliminarProducto = (id) => {
    return fetch(servidor + `/${id}`,{
        method:"DELETE",
    })
}

export const productosServices = {
    listaProductos,
    crearProducto,
    eliminarProducto,
};


