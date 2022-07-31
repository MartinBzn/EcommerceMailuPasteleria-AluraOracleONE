const cargarDatos = async ()=>{
    const url = "https://api-pasteleria-mailu.herokuapp.com/api/productos";
    console.log(url);
    const res = await fetch(url,{
        mode:'no-cors',
        headers:{
            "Content-Type": "application/json"
        }
    });
    console.log("Mostrando RES", res);
    const datos = res.json();
    console.log("Mostrando Datos",datos); 

}

cargarDatos();