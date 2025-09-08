const datos = [
  {
    causalidad: 'Bajar Auditoria,  Log de errores, Silent Debug, configuracion por solicitud del cliente o de NCR',
    tipoSR: 'CHGC',
    codigoReparacion: '34',
    categoria: '1B',
    mayor: '50',
    menor: '1O',
    codigoEntorno: '19KI',
    description: ''
  }
]

// Buscar datos por nombre
function buscarDatos() {
  const query = document.getElementById('searchInput').value.trim().toLowerCase();
  const resultados = datos.filter(d => d.causalidad.toLowerCase().includes(query));
  const resultsDiv = document.getElementById('results');

  resultsDiv.innerHTML = resultados.length
    ? resultados.map(d => `<p><strong>Causalidad: ${d.nombre}</strong></p>
      Causa Principal: ${d.principal}</p>
      Tipo SR: ${d.sr}</p>
      Código AOF: ${d.aof}</p>
      Código Reparación: ${d.reparacion}</p>
      Código Entorno: ${d.entorno}</p>
      Descripción: ${d.descripcion}</p>`).join('')
    : '<p>No se encontraron resultados.</p>';
}


document.getElementById('dataForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value.trim();
  const principal = document.getElementById('principal').value.trim();
  const sr = document.getElementById('sr').value.trim();
  const aof = document.getElementById('aof').value.trim();
  const reparacion = document.getElementById('reparacion').value.trim();
  const entorno = document.getElementById('entorno').value.trim();
  const descripcion = document.getElementById('descripcion').value.trim();

  if (nombre && principal && sr && aof && reparacion && entorno && descripcion) {
    let datos = JSON.parse(localStorage.getItem('datos')) || [];
    datos.push({ nombre, principal, sr, aof, reparacion, entorno, descripcion });
    localStorage.setItem('datos', JSON.stringify(datos));
    alert('Datos guardados correctamente');
    this.reset();
  }
});

