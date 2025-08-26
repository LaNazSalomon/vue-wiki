import { useMutation } from '@tanstack/vue-query';
import { arquetipoApi } from 'src/api/arquetipoApi';
import { useUserStore } from 'src/stores/user';
import type { IRegisterUser } from '../interfaces/user-register';

const registerUserFn = async (payload: IRegisterUser) => {
  const storeUser = useUserStore();
  const { data } = await arquetipoApi.post('/auth', payload, {
    headers: {
      Authorization: `Bearer ${storeUser.token}`,
    },
  });
  return data;
};

export function useRegisterUser() {
  const mutation = useMutation({
    mutationFn: registerUserFn,
  });

  return {
    ...mutation,
    registerUser: mutation.mutate,
  };
}
