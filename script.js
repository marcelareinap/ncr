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

let estadoOperativo = '';
let ubicacion = '';
let actividad = '';

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
  if (dato === 'site') {
    ubicacion = 'site';
    marcarSeleccionado('step1', 'En Sitio');
    mostrarPaso('step2');
    ocultarPaso('step4');
  }

  if (dato === 'remote') {
    ubicacion = 'remote';
    marcarSeleccionado('step1', 'Remoto');
    ocultarPaso('step2');
    ocultarPaso('step3');
    mostrarPaso('step4');

    // En remoto pasa directo a motivos: parte, cliente, ncr
    mostrarMotivo('motivo1');
    mostrarMotivo('motivo2');
    mostrarMotivo('motivo3');
  }

  // Paso 2
  if (dato === 'operativo' || dato === 'noOperativo') {
    if (dato === 'operativo') {
      marcarSeleccionado('step2', 'Sí (Operacional)');
    } else {
      marcarSeleccionado('step2', 'No (No Operacional)');
    }
    mostrarPaso('step3');
    estadoOperativo = dato;
    ocultarPaso('step4');
  }

  function resetMotivos() {
    ocultarMotivo('motivo1');
    ocultarMotivo('motivo2');
    ocultarMotivo('motivo3');
  }

  // suspendido = no puedo esperar

  if (dato === 'suspendido') {
    actividad = 'suspendido';
    marcarSeleccionado('step3', 'No (Trabajo Suspendido)');
    mostrarPaso('step4');
    resetMotivos();

    // En sitio suspendido: siempre mostrar los 3 motivos
    mostrarMotivo('motivo1');
    mostrarMotivo('motivo2');
    mostrarMotivo('motivo3');
  }

  if (dato === 'esperando') {
    actividad = 'esperando';
    marcarSeleccionado('step3', 'Sí (Esperando)');
    mostrarPaso('step4');
    resetMotivos();

    // En sitio esperando:
    // - operativo: parte y cliente
    // - noOperativo: solo cliente
    if (estadoOperativo === 'operativo') {
      mostrarMotivo('motivo1');
      mostrarMotivo('motivo2');
    } else if (estadoOperativo === 'noOperativo') {
      mostrarMotivo('motivo2');
    }
  }
}

// Reglas de negocio basadas en la tabla proporcionada
// Devuelve los códigos a mostrar para una combinación dada
function obtenerCodigos({ ubicacion, estadoOperativo, actividad, motivo }) {
  // Casos REMOTO (pasa directo a motivos)
  if (ubicacion === 'remote') {
    if (motivo === 'parte') return ['21', '31'];
    if (motivo === 'cliente') return ['23', '23A', '33'];
    if (motivo === 'ncr') return ['23'];
    return [];
  }

  // Casos ON SITE
  if (actividad === 'esperando') {
    if (estadoOperativo === 'operativo') {
      if (motivo === 'parte') return ['149'];
      if (motivo === 'cliente') return ['031', '035', '037', '039'];
      if (motivo === 'ncr') return ['04']; // cuando no puedes esperar (ver más abajo)
    }
    if (estadoOperativo === 'noOperativo') {
      if (motivo === 'cliente') return ['131', '135', '137', '139'];
      // En esperando + noOperativo, solo se habilita cliente en UI
    }
  }

  // On site, suspendido (no puedo esperar)
  if (actividad === 'suspendido') {
    if (estadoOperativo === 'operativo') {
      if (motivo === 'parte') return ['01', '06'];
      if (motivo === 'cliente') return ['03', '03A', '03C', '03D', '03F'];
      if (motivo === 'ncr') return ['04'];
    }
    if (estadoOperativo === 'noOperativo') {
      if (motivo === 'parte') return ['11', '16'];
      if (motivo === 'cliente') return ['13', '13A', '13C', '13D', '13F'];
      if (motivo === 'ncr') return ['14'];
    }
  }

  return [];
}

function mostrarCodigo(motivo) {
  if (!ubicacion) {
    alert('Selecciona primero dónde estás trabajando.');
    return;
  }
  if (ubicacion === 'site' && !estadoOperativo) {
    alert('Selecciona si el equipo está operacional.');
    return;
  }

  // Marcar el botón de motivo como seleccionado
  const step4 = document.getElementById('step4');
  if (step4) {
    step4
      .querySelectorAll('button')
      .forEach((btn) => btn.classList.remove('selected'));
    const motivoTexts = {
      parte: 'Necesito Piezas',
      cliente: 'Motivo del Cliente',
      ncr: 'Motivo Interno NCR',
    };
    step4.querySelectorAll('button').forEach((btn) => {
      if (btn.textContent.trim().includes(motivoTexts[motivo])) {
        btn.classList.add('selected');
      }
    });
  }

  const codes = obtenerCodigos({
    ubicacion,
    estadoOperativo,
    actividad,
    motivo,
  });

  const resultEl = document.getElementById('result-content');

  if (!codes.length) {
    resultEl.innerHTML =
      '<p>No hay códigos aplicables para este motivo en el contexto actual.</p>';
  } else {
    const list = codes
      .map(
        (code) =>
          `<span class="badge bg-primary fs-4 px-3 py-2 me-2 fw-bold">${code}</span>`
      )
      .join('');

    const onsiteYes = ubicacion === 'site';
    const onsiteNo = !onsiteYes;
    const opYes = estadoOperativo === 'operativo';
    const opNo = estadoOperativo === 'noOperativo';
    const idleYes = actividad === 'esperando';
    const idleNo = actividad === 'suspendido';
    const reasonNcr = motivo === 'ncr';
    const reasonCliente = motivo === 'cliente';
    const reasonParte = motivo === 'parte';

    const options = codes
      .map((c) => `<option value="${c}">${c}</option>`)
      .join('');

    const opBlock = estadoOperativo
      ? `
      <div class="mb-3">
        <div class="fw-bold mb-2">IS THE EQUIPMENT OPERATIONAL?</div>
        <div class="btn-group d-flex" role="group">
          <button type="button" class="btn ${
            opYes ? 'btn-success' : 'btn-outline-secondary'
          } flex-fill">Yes</button>
          <button type="button" class="btn ${
            opNo ? 'btn-success' : 'btn-outline-secondary'
          } flex-fill">No</button>
        </div>
      </div>
      `
      : '';

    const idleBlock = actividad
      ? `
      <div class="mb-3">
        <div class="fw-bold mb-2">ARE YOU WAITING ONSITE(IDLE)?</div>
        <div class="btn-group d-flex" role="group">
          <button type="button" class="btn ${
            idleYes ? 'btn-success' : 'btn-outline-secondary'
          } flex-fill">Yes</button>
          <button type="button" class="btn ${
            idleNo ? 'btn-success' : 'btn-outline-secondary'
          } flex-fill">No</button>
        </div>
      </div>
      `
      : '';

    resultEl.innerHTML = `
      <div class="mb-3">
        <div class="fw-bold mb-2">ARE YOU ONSITE AND HAVE ACCESSED THE EQUIPMENT?</div>
        <div class="btn-group d-flex" role="group">
          <button type="button" class="btn ${
            onsiteYes ? 'btn-success' : 'btn-outline-secondary'
          } flex-fill">Yes</button>
          <button type="button" class="btn ${
            onsiteNo ? 'btn-success' : 'btn-outline-secondary'
          } flex-fill">No</button>
        </div>
      </div>

      ${opBlock}

      ${idleBlock}

      <div class="mb-3">
        <div class="fw-bold mb-2">SUSPENSION REASON</div>
        <div class="btn-group d-flex" role="group">
          <button type="button" class="btn ${
            reasonNcr ? 'btn-success' : 'btn-outline-secondary'
          } flex-fill">NCR</button>
          <button type="button" class="btn ${
            reasonCliente ? 'btn-success' : 'btn-outline-secondary'
          } flex-fill">NON-NCR</button>
          <button type="button" class="btn ${
            reasonParte ? 'btn-success' : 'btn-outline-secondary'
          } flex-fill">PARTS</button>
        </div>
      </div>

      <div class="mb-2">
        <div class="fw-bold mb-2">JUSTIFICATION CODE</div>
        <select class="form-select text-uppercase mb-2">
          ${options}
        </select>
        <div>${list}</div>
      </div>
    `;
  }

  ocultarPaso('step1');
  ocultarPaso('step2');
  ocultarPaso('step3');
  ocultarPaso('step4');
  mostrarPaso('result');
}

function resetWizard() {
  ubicacion = '';
  estadoOperativo = '';
  actividad = '';
  const resultEl = document.getElementById('result-content');
  if (resultEl) resultEl.innerHTML = '';

  // Limpiar todas las selecciones
  document
    .querySelectorAll('button.selected')
    .forEach((btn) => btn.classList.remove('selected'));

  ocultarPaso('result');
  ocultarPaso('step2');
  ocultarPaso('step3');
  ocultarPaso('step4');
  ocultarMotivo('motivo1');
  ocultarMotivo('motivo2');
  ocultarMotivo('motivo3');
  mostrarPaso('step1');
}
