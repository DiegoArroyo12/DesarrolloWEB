document.addEventListener('DOMContentLoaded', function() {
    crearGaleria();
})

function crearGaleria() {
    const CANTIDAD_IMAGENES = 12;
    const galeria = document.querySelector('.galeria-imagenes');

    for(let i = 1; i <= CANTIDAD_IMAGENES; i++){
        // Crea una etiqueta de imagen
        const imagen = document.createElement('IMG');
        // Iteramos e insertamos en la etiqueta las imágenes de la carpeta grande
        imagen.src = `src/img/grande/${i}.jpg`
        // Agregamos un alternativo a la etiqueta de imagen
        imagen.alt = `Imagen Galería`

        // Event Handler
        imagen.onclick = function() {
            mostarImagen(i);
        }

        // Agregamos al index
        galeria.appendChild(imagen)
    }
}