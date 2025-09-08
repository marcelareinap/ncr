// Buscar datos por nombre
function buscarDatos() {
  const query = document.getElementById('busqueda-input').value.trim().toLowerCase();
  const resultados = datos.filter(d => d.causalidad.toLowerCase().includes(query));
  const resultsDiv = document.getElementById('resultados');

  resultsDiv.innerHTML = resultados.length
    ? resultados.map(d => `
      <div class="resultado">
        <p><strong>Causalidad:</strong> ${d.causalidad}</p>
        <p><strong>Tipo SR:</strong> ${d.tipoSR}</p>
        <p><strong>Código de Reparación:</strong> ${d.codigoReparacion}</p>
        <p><strong>Categoría:</strong> ${d.categoria}</p>
        <p><strong>Mayor:</strong> ${d.mayor}</p>
        <p><strong>Menor:</strong> ${d.menor}</p>
        <p><strong>Código Entorno:</strong> ${d.codigoEntorno}</p>
        <p><strong>Descripción:</strong> ${d.descripcion ?? 'N/A'}</p>
      </div>
      `).join('')
    : '<p>No se encontraron resultados.</p>';

  return resultados.length > 0;
}


document.getElementById('busqueda').addEventListener('submit', function (e) {
  e.preventDefault();
  const tieneResultado = buscarDatos();
  // Ocultar mensaje de sugerencia
  const sugerencia = document.querySelector('.sugerencia');
  sugerencia.style.display = tieneResultado ? 'none' : 'block';
});

