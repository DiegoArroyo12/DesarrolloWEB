function obtenerEmpleados() { // async

    const archivo = 'empleados.json';

    fetch(archivo)
        .then ( resultado => resultado.json())
        .then( datos => {
            // console.log(datos.empleados);

            const { empleados } = datos;

            empleados.forEach( empleado => {
                // console.log(empleado);
                console.log(empleado.id);
                console.log(empleado.nombre);
                console.log(empleado.puesto);

                // document.querySelector('.contenido').textContent += empleado.nombre; Modifica el .contenido de la página
            });
        })

    // Es una manera más rápida de conseguir lo mismo pero en la función debe ir un async

    // const resultado = await fetch(archivo);
    // const datos = await resultado.json();
    // console.log(datos);
}

obtenerEmpleados();