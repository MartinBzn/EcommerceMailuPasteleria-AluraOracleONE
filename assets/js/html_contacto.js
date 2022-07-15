const contacto = document.getElementById("contacto");
contacto.innerHTML = 
                `<div class="formcontacto" id="contacto" >
                    <div  class="formcontacto__contacto">
                        <div class="formcontacto__text">
                            <h2 class="formcontacto__titulo texto-centrado">Contacto</h2>
                            <p class="formcontacto__subtext">¿Quieres contactarme?</p>
                            <p class="formcontacto__subtext">Complete el siguiente formulario y me pondré en contacto con usted lo antes posible. </p>
                            <form class="formconctato__form" name="form" id="form">
                                <input class="formcontacto__input formconctato__elemento" type="text" name="nombre" id="nombre" placeholder="Nombre">
                                <input class="formcontacto__input formconctato__elemento" type="email" name="email" id="email" placeholder="E-mail">
                                <input class="formcontacto__input formconctato__elemento" type="text" name="asunto" id="asunto" placeholder="Asunto">
                                <textarea class="formcontacto__textarea formconctato__elemento" rows="5" cols="40" id="mensaje" name="mensaje" placeholder="Mensaje"></textarea>
                                <span class="formcontacto__obligatorio">Todos los datos son obligatorios.</span>
                                <button type="submit" class="boton formcontacto__boton" id="botonEnviar">Enviar mensaje</button>
                            </form>
                        </div>
                    </div>
                </div>`