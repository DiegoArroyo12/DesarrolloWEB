document.addEventListener('DOMContentLoaded', function() {
    navegacionFija();
    crearGaleria();
    resaltarEnlace();
    scrollNav();
})

function navegacionFija() {
    const header = document.querySelector('.header');
    const sobreFestival = document.querySelector('.sobre-festival');

    window.addEventListener('scroll', function(){
        if (sobreFestival.getBoundingClientRect().bottom < 1) {
            header.classList.add('fixed')
        } else {
            header.classList.remove('fixed')
        }
    })
}

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

function mostarImagen(i) {
    const imagen = document.createElement('IMG');
    imagen.src = `src/img/grande/${i}.jpg`
    imagen.alt = `Imagen Galería`

    // Generar Modal
    const modal = document.createElement('DIV');
    modal.classList.add('modal')
    modal.onclick = cerrarModal;

    // Botón cerrar modal
    const cerrarModalBtn = document.createElement('button');
    cerrarModalBtn.textContent = 'X'
    cerrarModalBtn.classList.add('btn-cerrar')
    cerrarModalBtn.onclick = cerrarModal
    
    modal.appendChild(imagen)
    modal.appendChild(cerrarModalBtn)

    // Agregar al HTML
    const body = document.querySelector('body');
    body.classList.add('overflow-hidden')
    body.appendChild(modal)
}

function cerrarModal() {
    const modal  = document.querySelector('.modal');
    modal.classList.add('fade-out')
    // modal?.remove()
    setTimeout(() => {
        if (modal) {modal.remove()}
        const body = document.querySelector('body');
        body.classList.remove('overflow-hidden')
    }, 500);
}

function resaltarEnlace() {
    document.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.navegacion-principal a');

        let actual = "";
        sections.forEach( section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.scrollY >= (sectionTop - sectionHeight / 3)) { // La operación del paréntesis es para validar cual es la sección más visible
                actual = section.id
            }

            navLinks.forEach(link => {
                link.classList.remove('active')
                if (link.getAttribute('href') === '#' + actual) {
                    link.classList.add('active')
                }
            })
        })
    })
}

function scrollNav() {
    const navLinks = document.querySelectorAll('.navegacion-principal a');

    navLinks.forEach( link => {
        link.addEventListener('click', e => {
            e.preventDefault()
            const sectionScroll = e.target.getAttribute('href');
            const section = document.querySelector(sectionScroll); // Obtenemos la sección a la que se desea ir

            section.scrollIntoView({behavior: 'smooth'}) // Default: 'auto'
        })
    })
}