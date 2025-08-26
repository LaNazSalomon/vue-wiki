import { useQuery } from '@tanstack/vue-query';
import { arquetipoApi } from 'src/api/arquetipoApi';
import { useUserStore } from 'src/stores/user';
import type { RolesResponse } from '../interfaces/roles-interface';

const getRoles = async (): Promise<RolesResponse[]> => {
  const storeUser = useUserStore();
  const { data } = await arquetipoApi.get<RolesResponse[]>('/roles', {
    headers: {
      Authorization: `Bearer ${storeUser.token}`,
    },
  });

  return data;
};

const useRoles = () => {
  return useQuery({
    queryKey: ['roles'],
    queryFn: getRoles,
  });
};

export default useRoles;
