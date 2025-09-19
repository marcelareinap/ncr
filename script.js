function seleccionarPaso(paso){
    return document.getElementById(paso)
}

function mostrarPaso(paso) {
    seleccionarPaso(paso).classList.add('active');
}

function ocultarPaso(paso) {
    seleccionarPaso(paso).classList.remove('active');
}

function seleccionarMotivo(motivo) {
    return document.querySelector(`.${motivo}`);
}

function mostrarMotivo(motivo) {
    seleccionarMotivo(motivo).classList.add('active');
}

function ocultarMotivo(motivo) {
    seleccionarMotivo(motivo).classList.remove('active');
}

let estadoOperativo = '';

function respuesta(dato, paso) {
    console.log(dato, paso);


    // paso 1
    if (dato === 'site'){
        mostrarPaso('step2');
        ocultarPaso('step4');
    }

    if (dato === 'remote'){
        ocultarPaso('step2');
        ocultarPaso('step3');
        mostrarPaso('step4');



        mostrarMotivo('motivo1');
        mostrarMotivo('motivo2');
        mostrarMotivo('motivo3');

    }

    // Paso 2
    if (dato === 'operativo' || dato === 'noOperativo'){
        mostrarPaso('step3');
        estadoOperativo = dato;
        ocultarPaso('step4');
    }


    function resetMotivos(){
        ocultarMotivo('motivo1');
        ocultarMotivo('motivo2');
        ocultarMotivo('motivo3');
    }

    // suspendido = no puedo esperar

    if (dato === 'suspendido'){
        mostrarPaso('step4');
        resetMotivos();

        if(estadoOperativo === 'operativo'){
            console.log('muestro 3 razones');
            mostrarMotivo('motivo1');
            mostrarMotivo('motivo2');
            mostrarMotivo('motivo3');
        }

        if(estadoOperativo === 'noOperativo'){
            console.log('muestro 3 razones');
            mostrarMotivo('motivo1');
            mostrarMotivo('motivo2');
            mostrarMotivo('motivo3');
        }
    }

    if (dato === 'esperando'){
        mostrarPaso('step4');
        resetMotivos();
        
        if(estadoOperativo === 'operativo'){
            console.log('muestro 2 razones');
            mostrarMotivo('motivo1');
            mostrarMotivo('motivo2');
            
        }
        if(estadoOperativo === 'noOperativo'){
            console.log('muestro 1 razon');
            mostrarMotivo('motivo3');
        }
    }









/*    if (paso){
        mostrarPaso(paso);
    }*/
}

