const servidor = "http://localhost:3000/productos";

const listaProductos = () => fetch(servidor).then(respuesta => respuesta.json());
// const listaProductos = () => fetch("https://api-pasteleria-mailu.herokuapp.com/api/productos",{mode:'no-cors'}).then(respuesta => respuesta.json());

const crearProducto = (img, categoria, nombre, precio, descripcion) => {
    if (img == ""){
        img = '../assets/img/img_no_encontrada_gris.png';
    }
    return fetch(servidor,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({img, categoria, nombre, precio, descripcion, id:uuid.v4()})
    })

};

const eliminarProducto = (id) => {
    return fetch(servidor + `/${id}`,{method:"DELETE",});
};

const detalleProducto = (id) => {
    return fetch(servidor + `/${id}`).then(respuesta => respuesta.json());
};

const actualizarProducto = (img, categoria, nombre, precio, descripcion, id)=>{
    console.log(img);
    return fetch(servidor + `/${id}`,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({img, categoria, nombre, precio, descripcion})
    })
    .then(respuesta =>respuesta)
    .catch(err => console.log(err));
}

export const productosServices = {
    listaProductos,
    crearProducto,
    eliminarProducto,
    detalleProducto,
    actualizarProducto,
};


