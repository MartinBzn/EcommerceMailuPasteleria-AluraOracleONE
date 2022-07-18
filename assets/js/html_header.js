const header = document.getElementById("header");
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
                    <input type="image" src="./assets/img/lupa.png" alt="boton lupa" class="cabecera__buscar__boton">
                </div>
    
               
                <div class="cabecera__boton-inicio">
                    <a href="./login.html">
                        <input type="button" class="boton cabecera__boton-inicio__boton " value="LOGIN">
                    </a>
                </div>

                <div class="cabecera__boton-menu-admin">
                    <a href="./menu-admin.html">
                        <input type="button" class="boton cabecera__boton-inicio__boton " value="Menú Admistrador">
                    </a>
                </div>
    
            </div>`