export interface UsersResponse {
  id_usuario?: string;
  nombres: string;
  apellido_paterno: string;
  apellido_materno: string;
  username: string;
  status: boolean;
  email: string;
  telefono: string;
  primer_inicio: boolean;
  rol: string;
}

export interface UserResponseByID {
  id_usuario: string;
  nombres: string;
  apellido_paterno: string;
  apellido_materno: string;
  username: string;
  status: boolean;
  email: string;
  telefono: string;
  primer_inicio?: boolean;
  id_rol: IDRol;
}

export interface IDRol {
  id_rol: string;
  nombre: string;
  descripcion: string;
  status: boolean;
}
