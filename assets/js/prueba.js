/**
 * Demostrar uso de UUID v4 en Node JS
 * para generar un id único
 * 
 * @author parzibyte
*/
// Obtener módulo
import uuidv4 from "uuid/v4";

// Y ahora lo llamamos como función
let idUnico = uuidv4();
console.log("El id único es: ", idUnico);