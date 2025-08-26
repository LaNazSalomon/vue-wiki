import { ref } from 'vue';

//! Estos datos solo son para rellenar
export const tareas = ref([
  { nombre: 'Enviar correo', tareaCompletada: false, icon: 'mail' },
  { nombre: 'Revisar ubicación', tareaCompletada: true, icon: 'location_on' },
  { nombre: 'Firmar documento', tareaCompletada: false, icon: 'description' },
  { nombre: 'Crear nueva orden', tareaCompletada: false, icon: 'add_shopping_cart' },
  { nombre: 'Ver mensajes nuevos', tareaCompletada: false, icon: 'chat' },
  { nombre: 'Contestar encuesta de satisfacción', tareaCompletada: false, icon: 'poll' },
  { nombre: 'Actualizar perfil de usuario', tareaCompletada: true, icon: 'person' },
  { nombre: 'Subir archivo al sistema', tareaCompletada: false, icon: 'upload' },
  { nombre: 'Programar reunión semanal', tareaCompletada: false, icon: 'event' },
  { nombre: 'Leer notificación importante', tareaCompletada: true, icon: 'notifications' },
]);
