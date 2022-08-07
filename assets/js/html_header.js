
const setearUsuarioLogueado = () =>{

    const usuarioLogueado = {
        usuario:"",
        logueado : false,
    }

    try{
        const localStorage = JSON.parse(window.localStorage.getItem('usuarioLogueado'));
        if (localStorage.logueado == false){
            window.localStorage.setItem("usuarioLogueado",JSON.stringify(usuarioLogueado));
        }
    }catch{
        window.localStorage.setItem("usuarioLogueado",JSON.stringify(usuarioLogueado));
    }    
};


const usuarioEstaLogueado = ()=>{
    const usuario = JSON.parse(window.localStorage.getItem("usuarioLogueado"));
    if (usuario.logueado == true){
        return [true,usuario.usuario];
    }else{
        return [false,""];
    }
}

setearUsuarioLogueado();

const header = document.getElementById("header");

const nombreUsuario = usuarioEstaLogueado();

header.innerHTML =
                `<div class="cabecera" id="cabecera">
                <a href="index.html">
                    <div class="cabecera__logo">
                        <div class="cabecera__logo__imagen">
                            <img src="./assets/img/logo_fondo_transparente.png" alt="Logo Mailu" srcset="">
                        </div>
                        <span class="cabecera__logo__texto">Mailu Pastelería Artesanal</span>    
                    </div>
                </a>
    
                <div class="cabecera__buscar">
                    <input type="text" name="cabecera-input-buscar" id="cabecera-input-buscar" class="cabecera__buscar__input" placeholder="Busquemos algo...">
                    <!-- <button class="cabecera__buscar__boton"><i class="fas fa-search"></i></button> -->
                    <input type="image" src="./assets/img/lupa.png" alt="boton lupa" class="cabecera__buscar__boton" id="cabecera-boton-buscar">
                </div>
    
               
                <div class="cabecera__boton-inicio" id="cabecera__btn__login">
                    <a href="./login.html">
                        <input type="button" class="boton cabecera__boton-inicio__boton " value="LOGIN">
                    </a>
                </div>

                <div class="cabecera__boton-menu-admin" id="cabecera__btn__admin">
                    <a href="./todos.html">
                        <input type="button" class="boton cabecera__boton-inicio__boton " value="Menú Admistrador">
                    </a>
                </div>

                <span class="cabecera__usuario vinculo" id="cabecera__usuario">${nombreUsuario[1]}</span>
    
            </div>`

const botonesCabecera = ()=>{
    
    if(nombreUsuario[0]){
        botonLogin.classList.add("elemento__invisible");
        botonAdmin.classList.remove("elemento__invisible");
        spanUsuario.classList.remove("elemento__invisible");
    }else{
        botonLogin.classList.remove("elemento__invisible");
        botonAdmin.classList.add("elemento__invisible");
        spanUsuario.classList.add("elemento__invisible");
    }
}

const botonLogin = document.getElementById("cabecera__btn__login");
const botonAdmin = document.getElementById("cabecera__btn__admin");
const spanUsuario = document.getElementById("cabecera__usuario");

botonesCabecera();

spanUsuario.addEventListener('click',()=>{
    const url = window.location.href;
    if (url.slice(-18) != "cerrar-sesion.html"){window.location.href="../cerrar-sesion.html";};
})

const textoBuscar = document.getElementById("cabecera-input-buscar");
const botonBuscar = document.getElementById("cabecera-boton-buscar");
botonBuscar.addEventListener('click',() =>{
    if(textoBuscar != ""){
        window.location.href = `/filtrados.html?texto=${textoBuscar.value}` 
    }
});