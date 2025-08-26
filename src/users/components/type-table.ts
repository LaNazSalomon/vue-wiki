import type { QTableColumn } from 'quasar';
import type { UsersResponse } from '../interfaces/users-interface';

export const columns: QTableColumn<UsersResponse>[] = [
  {
    name: 'nombres',
    label: 'Nombre',
    field: 'nombres',
    align: 'left',
  },
  {
    name: 'username',
    label: 'Usuario',
    field: 'username',
    align: 'left',
  },
  {
    name: 'rol',
    label: 'Rol',
    field: 'rol',
    align: 'left',
  },
  {
    name: 'status',
    label: 'Estatus',
    field: 'status',
    align: 'center',
    format: (val: boolean) => (val ? 'Activo' : 'Inactivo'),
  },
  {
    name: 'modificar',
    label: 'Modificar',
    field: (row) => row.id_usuario,
    align: 'center',
  },
];
