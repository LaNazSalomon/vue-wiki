import { useMutation } from '@tanstack/vue-query';
import { arquetipoApi } from 'src/api/arquetipoApi';
import type { LoginUser, ResponseLogin } from '../interfaces/login-user';
import { useUserStore } from 'src/stores/user';
import { useRouter } from 'vue-router';

const login = async (loginUser: LoginUser): Promise<ResponseLogin> => {
  const { data } = await arquetipoApi.post<ResponseLogin>('/auth/login', {
    username: loginUser.username,
    password: loginUser.password,
  });

  return data;
};

const useLogin = () => {
  const router = useRouter();
  const store = useUserStore();

  const userLogin = useMutation({
    mutationFn: login,
    onSuccess: async (data) => {
      store.setUserSession(data);
      await router.push({ name: 'dashboard-login' });
    },
    onError: (err) => {
      console.log(err);
    },
  });

  return {
    login: userLogin,
  };
};

export default useLogin;
