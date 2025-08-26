import type { Entidades } from 'src/shared/const/entidades';

export interface RolesResponse {
  id_rol: string;
  nombre: string;
  status: boolean;
}

export interface RoleResponseByID {
  idRol: string;
  nombre: string;
  descripcion: string;
  status: boolean;
  menus: Menu[];
}

export interface Menu {
  id_menu: string;
  nombre: string;
  tabla: string;
}

export interface UpdateRolePayload {
  id_rol: string;
  nombre?: string;
  descripcion?: string;
  status?: boolean;
  id_menu: string[];
  tablas: Entidades[];
}
