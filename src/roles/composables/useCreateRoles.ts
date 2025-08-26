import { useMutation } from '@tanstack/vue-query';
import { arquetipoApi } from 'src/api/arquetipoApi';
import { useUserStore } from 'src/stores/user';
import type { IcreateRole } from '../interfaces/create-role-interface';

export function useCreateRole() {
  const storeUser = useUserStore();

  const mutation = useMutation({
    mutationFn: async (payload: IcreateRole) => {
      const { data } = await arquetipoApi.post('/roles', payload, {
        headers: {
          Authorization: `Bearer ${storeUser.token}`,
        },
      });
      return data;
    },
    onError: (err: any) => {
      throw err.response?.data || { message: ['Error desconocido'] };
    },
  });

  return {
    ...mutation,
    createRole: mutation.mutate,
  };
}
