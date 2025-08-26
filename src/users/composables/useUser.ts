import { ref, watch } from 'vue';
import { useQuery, useMutation } from '@tanstack/vue-query';
import { arquetipoApi } from 'src/api/arquetipoApi';
import { useUserStore } from 'src/stores/user';
import type { UserResponseByID } from '../interfaces/users-interface';

interface UpdateUserPayload {
  nombres: string;
  apellido_paterno: string;
  apellido_materno: string;
  username: string;
  email: string;
  telefono: string;
  id_rol: string;
}

const getUser = async (id: string): Promise<UserResponseByID> => {
  const storeUser = useUserStore();
  const { data } = await arquetipoApi.get<UserResponseByID[]>(`/auth/${id}`, {
    headers: {
      Authorization: `Bearer ${storeUser.token}`,
    },
  });
  return data[0]!; // la API devuelve un array
};

const updateUser = async ({
  id,
  payload,
}: {
  id: string;
  payload: UpdateUserPayload;
}): Promise<UserResponseByID> => {
  const storeUser = useUserStore();
  const { data } = await arquetipoApi.patch<UserResponseByID>(`/auth/${id}`, payload, {
    headers: {
      Authorization: `Bearer ${storeUser.token}`,
    },
  });
  return data;
};

const useUser = (id: string) => {
  const user = ref<UserResponseByID>();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['user', id],
    queryFn: () => getUser(id),
    retry: false,
  });

  const userMutation = useMutation({
    mutationFn: updateUser,
  });

  watch(
    data,
    () => {
      if (data.value) {
        user.value = { ...data.value };
      }
    },
    { immediate: true },
  );

  watch(userMutation.isSuccess, () => {
    setTimeout(() => {
      userMutation.reset();
    }, 2000);
  });

  return {
    user,
    isLoading,
    isError,
    error,
    updateUser: userMutation,
  };
};

export default useUser;
