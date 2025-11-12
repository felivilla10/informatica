function calcularIMC() {
  // Obtener los valores del formulario y convertirlos a número
  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);
  const resultado = document.getElementById("resultado");

  // Validar que se hayan ingresado números válidos
  if (isNaN(peso) || isNaN(altura) || altura <= 0) {
    resultado.textContent = "Por favor, ingresá valores válidos.";
    return;
  }

  // Calcular IMC
  const imc = peso / (altura * altura);
  let interpretacion = "";

  // Determinar interpretación según el valor del IMC
  if (imc < 18.5) {
    interpretacion = "Bajo peso";
  } else if (imc < 25) {
    interpretacion = "Peso normal";
  } else if (imc < 30) {
    interpretacion = "Sobrepeso";
  } else {
    interpretacion = "Obesidad";
  }

  // Mostrar resultado en pantalla
  resultado.textContent = `Tu IMC es: ${imc.toFixed(1)} (${interpretacion})`;
}