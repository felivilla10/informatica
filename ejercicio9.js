document.getElementById('form-evento').addEventListener('submit', function(e) {
  e.preventDefault(); // Evita que el formulario se recargue

  const nombre = document.getElementById('nombre').value.trim();
  const fechaEvento = new Date(document.getElementById('fecha').value);
  const hoy = new Date();

  // Ajustar las horas a medianoche para comparar solo fechas
  hoy.setHours(0, 0, 0, 0);
  fechaEvento.setHours(0, 0, 0, 0);

  const diferencia = fechaEvento - hoy;
  const diasFaltantes = Math.round(diferencia / (1000 * 60 * 60 * 24));

  const resultado = document.getElementById('resultado');

  if (diasFaltantes > 0) {
    resultado.textContent = `Faltan ${diasFaltantes} día${diasFaltantes !== 1 ? 's' : ''} para ${nombre}.`;
  } else if (diasFaltantes === 0) {
    resultado.textContent = `¡El evento "${nombre}" es hoy! 🎉`;
  } else {
    resultado.textContent = `El evento "${nombre}" ya ocurrió.`;
  }
});