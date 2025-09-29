// Buscar datos por nombre
function buscarDatos(valorBusqueda) {
  const busqueda = valorBusqueda.trim().toLowerCase();
  const resultados = datosAqrs.filter(d => d.descripcion.toLowerCase().includes(busqueda));
  const resultsDiv = document.getElementById('resultados');

  resultsDiv.innerHTML = resultados.length
    ? resultados.map(d => `
      <div class="resultado">
        <p><strong>Nomenclatura:</strong> ${d.nomenclatura}</p>
        <p><strong>Descripción:</strong> ${d.descripcion}</p>
        <p><strong>Ejemplo:</strong> ${d.ejemplo}</p>
      </div>
      `).join('')
    : '<p>No se encontraron resultados.</p>';

  return resultados.length > 0;
}

function ocultarMedotoAqrs(tieneResultado) {
  const metodoAqrs = document.querySelector('.metodoAqrs');
  metodoAqrs.style.display = tieneResultado ? 'none' : 'block';
}


const recomendaciones = [
    "Acceso", "Belltech y Davivienda", "Parte", "Proveedor", "Tallies", "Transportadora", "Recategorizacion de Servicio"
];

// Crear burbujas de recomendaciones
recomendaciones.forEach(recomendacion => {
  const item = document.createElement('div');
  item.classList.add('cloud-item');
  item.textContent = recomendacion;
  item.onclick = () => {
    const tieneResultado = buscarDatos(recomendacion);
    ocultarMedotoAqrs(tieneResultado)
  };
  cloudContainer.appendChild(item);
});