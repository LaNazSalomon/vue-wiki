//! Datos de relleno unicamente

interface Contacto {
  nombre: string;
  email: string;
  fotoUrl: string;
  isOnline: boolean;
}

export const contactos: Contacto[] = [
  {
    nombre: 'Ana López',
    email: 'ana.lopez@email.com',
    fotoUrl: 'https://cdn.quasar.dev/img/avatar3.jpg',
    isOnline: true,
  },
  {
    nombre: 'Carlos Méndez',
    email: 'carlos.mendez@email.com',
    fotoUrl: 'https://cdn.quasar.dev/img/avatar4.jpg',
    isOnline: false,
  },
  {
    nombre: 'Lucía Torres',
    email: 'lucia.torres@email.com',
    fotoUrl: 'https://cdn.quasar.dev/img/avatar2.jpg',
    isOnline: true,
  },
  {
    nombre: 'María González',
    email: 'maria.gonzalez@email.com',
    fotoUrl: 'https://cdn.quasar.dev/img/avatar5.jpg',
    isOnline: false,
  },
  {
    nombre: 'Javier Ramírez',
    email: 'javier.ramirez@email.com',
    fotoUrl: 'https://cdn.quasar.dev/img/avatar6.jpg',
    isOnline: true,
  },
];
