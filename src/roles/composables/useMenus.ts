import { useQuery } from '@tanstack/vue-query';
import { arquetipoApi } from 'src/api/arquetipoApi';
import { useUserStore } from 'src/stores/user';
import type { Imenus } from '../interfaces/menus-interface';

const getMenus = async (): Promise<Imenus[]> => {
  const storeUser = useUserStore();
  const { data } = await arquetipoApi.get('/menus', {
    headers: {
      Authorization: `Bearer ${storeUser.token}`,
    },
  });
  return data;
};

export default function useMenus() {
  return useQuery({
    queryKey: ['menus'],
    queryFn: getMenus,
  });
}
