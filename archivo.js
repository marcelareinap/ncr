// Buscar datos por nombre
function buscarDatos() {
  const query = document.getElementById('searchInput').value.trim().toLowerCase();
  const resultados = datos.filter(d => d.causalidad.toLowerCase().includes(query));
  const resultsDiv = document.getElementById('results');

  resultsDiv.innerHTML = resultados.length
    ? resultados.map(d => `<p><strong>Causalidad: ${d.causalidad}</strong></p>
      Tipo SR: ${d.tipoSR}</p>
      Código de Reparación: ${d.codigoReparacion}</p>
      Categoría: ${d.categoria}</p>
      Mayor: ${d.mayor}</p>
      Menor: ${d.menor}</p>
      Código Entorno: ${d.codigoEntorno}</p>nombre
      Descripción: ${d.descripcion}</p>`).join('')
    : '<p>No se encontraron resultados.</p>';
}


document.getElementById('busqueda').addEventListener('submit', function (e) {
  e.preventDefault();
  buscarDatos()
});

