function registrar() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let curso = document.getElementById("curso").value;

    if (nombre.trim() === "" || apellido.trim() === "" || curso.trim() === "") {
        alert("⚠️ Completa todos los campos antes de continuar.");
        return;
    }

    // Mensaje de alerta
    alert("Bienvenido/a " + nombre + " " + apellido + 
          "\nCurso: " + curso + 
          "\n✅ Registro exitoso");

    // Abrir nueva página con los datos
    let nuevaVentana = window.open("", "_blank");
    nuevaVentana.document.write(`
        <html>
        <head>
            <title>Bienvenido/a</title>
        </head>
        <body style="font-family: Arial; padding:20px;">
            <h2>¡Bienvenido/a ${nombre} ${apellido}! 🎓</h2>
            <p><strong>Curso:</strong> ${curso}</p>
            <p>✅ Tus datos han sido registrados correctamente.</p>
        </body>
        </html>
    `);
    nuevaVentana.document.close();
}