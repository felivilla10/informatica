function confirmarFiesta() {
    let nombre = document.getElementById("nombre").value;
    let asistencia = document.getElementById("asistencia").value;

    if (nombre.trim() === "") {
        alert("⚠️ Por favor ingresa un nombre.");
        return;
    }

    if (asistencia === "") {
        alert("⚠️ Selecciona si vas a asistir o no.");
        return;
    }

    if (asistencia === "si") {
        alert("Gracias por confirmar, " + nombre + ". ¡Nos vemos en la fiesta! 🎉");
    } else {
        alert("Qué pena, " + nombre + ". Te vamos a extrañar 😢");
    }
}