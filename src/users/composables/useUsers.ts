import { useQuery } from '@tanstack/vue-query';
import { arquetipoApi } from 'src/api/arquetipoApi';
import { useUserStore } from 'src/stores/user';
import type { UsersResponse } from '../interfaces/users-interface';

const getUsers = async (): Promise<UsersResponse[]> => {
  const storeUser = useUserStore();
  const { data } = await arquetipoApi.get<UsersResponse[]>('/auth?limit=30&offset=0', {
    headers: {
      Authorization: `Bearer ${storeUser.token}`,
    },
  });
  return data;
};

const useUsers = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
  });

  return {
    data,
    isLoading,
    isError,
    error,
  };
};

export default useUsers;
