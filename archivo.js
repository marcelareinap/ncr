// Buscar datos por nombre
function buscarDatos() {
  const query = document.getElementById('busqueda-input').value.trim().toLowerCase();
  const resultados = datos.filter(d => d.causalidad.toLowerCase().includes(query));
  const resultsDiv = document.getElementById('resultados');

  resultsDiv.innerHTML = resultados.length
    ? resultados.map(d => `
      <div class="resultado">
        <p><strong>Causalidad: ${d.causalidad}</strong></p>
        <p>Tipo SR: ${d.tipoSR}</p>
        <p>Código de Reparación: ${d.codigoReparacion}</p>
        <p>Categoría: ${d.categoria}</p>
        <p>Mayor: ${d.mayor}</p>
        <p>Menor: ${d.menor}</p>
        <p>Código Entorno: ${d.codigoEntorno}</p>
        <p>Descripción: ${d.descripcion}</p>
      </div>
      `).join('')
    : '<p>No se encontraron resultados.</p>';
}


document.getElementById('busqueda').addEventListener('submit', function (e) {
  e.preventDefault();
  buscarDatos()
});

