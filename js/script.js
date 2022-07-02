// Validar formulario
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("datos").addEventListener('submit', validarFormulario); 
});
function validarFormulario(evento) {
    evento.preventDefault();
    let nombre = document.getElementById('nombre').value;
    if(nombre.length > 50) {
        Swal.fire({
            title: 'Error en el nombre',
            text: 'Puede contener un máximo de 50 caracteres',
            icon: 'error',
            confirmButtonText: 'Continuar'
          })
      return;
    }
    let asunto = document.getElementById("asunto").value;
    if(asunto.length > 50) {
        Swal.fire({
            title: 'Error en el asunto',
            text: 'Puede contener un máximo de 50 caracteres',
            icon: 'error',
            confirmButtonText: 'Continuar'
          })
      return;
    }
    let mensaje = document.getElementById("mensaje").value;
    if(mensaje.length > 300) {
        Swal.fire({
            title: 'Error en el mensaje',
            text: 'Puede contener un máximo de 300 caracteres',
            icon: 'error',
            confirmButtonText: 'Continuar'
          })
      return;
    }
    this.submit();
}
