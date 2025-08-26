//! Datos de relleno unicamente

interface Iprops {
  message: string[];
  isSent: boolean;
  avatar: string;
  name: string;
}

export const chatMessages: Iprops[] = [
  {
    message: ['¡Hola Alex! ¿Cómo estás?'],
    isSent: true,
    avatar: 'https://cdn.quasar.dev/img/avatar4.jpg',
    name: 'Tú',
  },
  {
    message: ['¡Hey! Todo bien, ¿y tú?'],
    isSent: false,
    avatar: 'https://cdn.quasar.dev/img/avatar1.jpg',
    name: 'Alex',
  },
  {
    message: ['Trabajando un poco, pero ya casi termino.'],
    isSent: true,
    avatar: 'https://cdn.quasar.dev/img/avatar4.jpg',
    name: 'Tú',
  },
  {
    message: ['Qué bien, te lo mereces.'],
    isSent: false,
    avatar: 'https://cdn.quasar.dev/img/avatar1.jpg',
    name: 'Alex',
  },
  {
    message: ['¿Viste el nuevo episodio de la serie?'],
    isSent: true,
    avatar: 'https://cdn.quasar.dev/img/avatar4.jpg',
    name: 'Tú',
  },
  {
    message: ['¡Sí! Lo vi anoche. Ese final estuvo brutal 😱'],
    isSent: false,
    avatar: 'https://cdn.quasar.dev/img/avatar1.jpg',
    name: 'Alex',
  },
];
