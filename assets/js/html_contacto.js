const contacto = document.getElementById("contacto");
contacto.innerHTML = 
            `<div class="formcontacto" id="contacto" >
                <div  class="formcontacto__contacto">
                    <div class="formcontacto__text">
                        <h2 class="formularios__titulo texto-centrado">Contacto</h2>
                        <p class="formularios__subtext">¿Quieres contactarme?</p>
                        <p class="formularios__subtext">Complete el siguiente formulario y me pondré en contacto con usted lo antes posible. </p>
                        <form class="formularios__form" name="form" id="form">
                            <label for="nombre" class="formularios__elemento__etiqueta">Nombre</label>
                            <input class="formularios__elemento" type="text" name="nombre" id="nombre" required>
                            <label for="email" class="formularios__elemento__etiqueta">Email</label>
                            <input class="formularios__elemento" type="email" name="email" id="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$" required>
                            <label for="asunto" class="formularios__elemento__etiqueta">Asunto</label>
                            <input class="formularios__elemento" type="text" name="asunto" id="asunto" required>
                            <label for="mensaje" class="formularios__elemento__etiqueta">Mensaje</label>
                            <textarea class="formularios__elemento formularios__textarea" rows="5" cols="40" id="mensaje" name="mensaje" required></textarea>
                            <span class="formularios__obligatorio">Todos los datos son obligatorios.</span>
                            <button type="submit" class="boton formularios__boton" id="botonEnviar">Enviar mensaje</button>
                        </form>
                    </div>
                </div>
            </div>`