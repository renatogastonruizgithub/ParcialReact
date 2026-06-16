import Swal from 'sweetalert2'

// Confirmar antes de eliminar
export const confirmarEliminacion = () => {
  return Swal.fire({
    title: '¿Eliminar este post?',
    text: 'Esta acción no se puede deshacer',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#dc3545',
    cancelButtonColor: '#6c757d',
    confirmButtonText: 'Sí, eliminar',
    cancelButtonText: 'Cancelar',
  })
}

// Mensaje de éxito
export const mostrarExito = (titulo, texto) => {
  return Swal.fire({
    title: titulo,
    text: texto,
    icon: 'success',
    confirmButtonText: 'OK',
  })
}

// Mensaje de error
export const mostrarError = (titulo, texto) => {
  return Swal.fire({
    title: titulo,
    text: texto,
    icon: 'error',
    confirmButtonText: 'OK',
  })
}