function seleccionarPaso(paso){
    return document.getElementById(paso)
}

function mostrarPaso(paso) {
    seleccionarPaso(paso).classList.add('active');
}

function ocultarPaso(paso) {
    seleccionarPaso(paso).classList.remove('active');
}

function respuesta(dato, paso) {
    console.log(dato, paso);

    if (dato === 'site'){
        mostrarPaso('step2');
        ocultarPaso('step4');

    }

    if (dato === 'remote'){
        ocultarPaso('step2');
        ocultarPaso('step3');
        mostrarPaso('step4');
    }


    if (dato === 'operativo' || dato === 'noOperativo'){
        mostrarPaso('step3');
    }

    if (dato === 'suspendido' || dato === 'esperando'){
        mostrarPaso('step4');
    }


/*    if (paso){
        mostrarPaso(paso);
    }*/
}

