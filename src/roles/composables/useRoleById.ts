import { useQuery } from '@tanstack/vue-query';
import { arquetipoApi } from 'src/api/arquetipoApi';
import type { Entidades } from 'src/shared/const/entidades';
import { useUserStore } from 'src/stores/user';

interface MenuItem {
  id_menu: string;
  nombre: string;
  tabla: Entidades;
}

interface RoleDetail {
  idRol: string;
  nombre: string;
  descripcion: string;
  status: boolean;
  menus: MenuItem[];
}

const getRoleById = async (id: string): Promise<RoleDetail> => {
  const storeUser = useUserStore();
  const { data } = await arquetipoApi.get(`/roles/${id}`, {
    headers: { Authorization: `Bearer ${storeUser.token}` },
  });
  return data;
};

export default function useRoleById(id: string) {
  return useQuery({
    queryKey: ['role', id],
    queryFn: () => getRoleById(id),
  });
}
