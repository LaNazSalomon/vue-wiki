export interface Imenus {
  id_menu: string;
  nombre: string;
  status: boolean;
  menusRolesList: MenusRolesList[];
}

export interface MenusRolesList {
  id_menu_rol: string;
  tabla: string;
}
