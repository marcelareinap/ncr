function seleccionarPaso(paso) {
  return document.getElementById(paso);
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


function respuesta(dato) {
  console.log(dato);

  // Función para marcar botón como seleccionado
  function marcarSeleccionado(stepId, buttonText) {
    const step = document.getElementById(stepId);
    if (step) {
      // Quitar 'selected' de todos los botones del paso
      step
        .querySelectorAll('button')
        .forEach((btn) => btn.classList.remove('selected'));
      // Agregar 'selected' al botón clickeado
      step.querySelectorAll('button').forEach((btn) => {
        if (btn.textContent.trim().includes(buttonText)) {
          btn.classList.add('selected');
        }
      });
    }
  }

  // paso 1
  if (dato === '1') {
    ubicacion = '1';
    marcarSeleccionado('step1', 'Educación');
    mostrarPaso('step2');
    ocultarPaso('step4');
    ocultarPaso('step3');
    ocultarPaso('step5');
    ocultarPaso('step6');
    ocultarPaso('step7');
    ocultarPaso('step8');
    ocultarPaso('step9');
  }

  if (dato === '2') {
    ubicacion = '2';
    marcarSeleccionado('step1', ' Auditoria de Partes');
    mostrarPaso('step3');
    ocultarPaso('step2');
    ocultarPaso('step4');
    ocultarPaso('step5');
    ocultarPaso('step6');
    ocultarPaso('step7');
    ocultarPaso('step8');
    ocultarPaso('step9');
  }

  if (dato === '3') {
    ubicacion = '3';
    marcarSeleccionado('step1', 'Auditoria de Llaves');
    mostrarPaso('step4');
    ocultarPaso('step2');
    ocultarPaso('step3');
    ocultarPaso('step5');
    ocultarPaso('step6');
    ocultarPaso('step7');
    ocultarPaso('step8');
    ocultarPaso('step9');
  }

  if (dato === '4') {
    ubicacion = '4';
    marcarSeleccionado('step1', 'No SR');
    mostrarPaso('step5');
    ocultarPaso('step2');
    ocultarPaso('step3');
    ocultarPaso('step4');
    ocultarPaso('step6');
    ocultarPaso('step7');
    ocultarPaso('step8');
    ocultarPaso('step9');
  }

  if (dato === '5') {
    ubicacion = '5';
    marcarSeleccionado('step1', 'Mantenimiento Moto');
    mostrarPaso('step6');
    ocultarPaso('step2');
    ocultarPaso('step3');
    ocultarPaso('step4');
    ocultarPaso('step5');
    ocultarPaso('step7');
    ocultarPaso('step8');
    ocultarPaso('step9');
  }

  if (dato === '6') {
    ubicacion = '6';
    marcarSeleccionado('step1', 'Reunión Interna');
    mostrarPaso('step7');
    ocultarPaso('step2');
    ocultarPaso('step3');
    ocultarPaso('step4');
    ocultarPaso('step5');
    ocultarPaso('step6');
    ocultarPaso('step8');
    ocultarPaso('step9');
  }

  if (dato === '7') {
    ubicacion = '7';
    marcarSeleccionado('step1', 'Actualizaciones');
    mostrarPaso('step8');
    ocultarPaso('step2');
    ocultarPaso('step3');
    ocultarPaso('step4');
    ocultarPaso('step5');
    ocultarPaso('step6');
    ocultarPaso('step7');
    ocultarPaso('step9');
  }

  if (dato === '8') {
    ubicacion = '8';
    marcarSeleccionado('step1', 'Administrativo');
    mostrarPaso('step9');
    ocultarPaso('step2');
    ocultarPaso('step3');
    ocultarPaso('step4');
    ocultarPaso('step5');
    ocultarPaso('step6');
    ocultarPaso('step7');
    ocultarPaso('step8');
  }
}

