function enviarFormulario() {
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var mensaje = document.getElementById('mensaje').value;

    if (nombre === '' || email === '' || mensaje === '') {
        document.getElementById('respuesta').innerHTML = 'Por favor, completa todos los campos.';
        return;
    }

    document.getElementById('respuesta').innerHTML = 'Formulario enviado con éxito. Gracias por tu mensaje.';
}
