import { useMutation } from '@tanstack/vue-query';
import { arquetipoApi } from 'src/api/arquetipoApi';
import { useUserStore } from 'src/stores/user';
import type { UpdateRolePayload } from '../interfaces/roles-interface';

export function useUpdateRole() {
  const storeUser = useUserStore();

  const mutation = useMutation({
    mutationFn: async (payload: UpdateRolePayload) => {
      const { id_rol, ...body } = payload;
      const { data } = await arquetipoApi.patch(`/roles/${id_rol}`, body, {
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
    updateRole: mutation.mutate,
  };
}
