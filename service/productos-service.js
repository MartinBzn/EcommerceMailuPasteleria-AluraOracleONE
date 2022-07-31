const servidor = "https://productos-b618c-default-rtdb.firebaseio.com/productos";

const listaProductos = async () =>{
    const url = "https://productos-b618c-default-rtdb.firebaseio.com/productos.json";
    const resp = await fetch(url,{
        headers:{
            "Content-Type": "application/json",
        }
    });
    const data = await resp.json();
    return data;
}

const crearProducto = async (img, categoria, nombre, precio, descripcion) => {
    if (img == ""){
        img = '../assets/img/img_no_encontrada_gris.png';
    }
    return fetch(servidor + `.json`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({img, categoria, nombre, precio, descripcion, id:uuid.v4()})
    })

};

const eliminarProducto = async (id) => {
    let registroID = await encontrarID(id);
    return fetch(servidor + `/${registroID}.json`,{method:"DELETE",});
};

const encontrarID = async (id) => {
    const url = "https://productos-b618c-default-rtdb.firebaseio.com/productos.json";   
    const resp = await fetch(url,
        {
            headers:{
                "Content-Type": "application/json",
            }
        }
    ).then(res => res);
    const data = await resp.json();
    let registroID = "";
    for (let clave in data){
        if(data[clave].id == id){
            registroID = clave;
            break;
        }
    };
    return registroID;
}

const detalleProducto = async (id) => {
    let registroID = await encontrarID(id);
    return fetch(servidor + `/${registroID}.json`).then(respuesta => respuesta.json());
};

const actualizarProducto = async (img, categoria, nombre, precio, descripcion, id)=>{
    let registroID = await encontrarID(id);
    const miObjeto = {
        "categoria": categoria,
        "descripcion": descripcion,
        "id": id,
        "img": img,
        "nombre": nombre,
        "precio": precio
    };
    const response = await fetch (servidor + `/${registroID}.json`,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body:(
            JSON.stringify(miObjeto)
        )
    });
    return await response.json();
}

export const productosServices = {
    listaProductos,
    crearProducto,
    eliminarProducto,
    detalleProducto,
    actualizarProducto,
};


