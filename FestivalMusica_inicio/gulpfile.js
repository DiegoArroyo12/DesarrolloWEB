
function tarea( done ) {
    console.log('Mi primer tarea');

    done(); /* Callback para saber que se finalizó la tarea */
}

exports.primerTarea = tarea; /* npx gulp primerTarea */