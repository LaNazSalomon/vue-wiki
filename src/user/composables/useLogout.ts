import { useRouter } from 'vue-router';
import { useUserStore } from 'src/stores/user';

export default function useLogout() {
  const router = useRouter();
  const userStore = useUserStore();

  async function logout() {
    userStore.clearSession();

    localStorage.clear();

    await router.push({ name: 'login' });
  }

  return {
    logout,
  };
}
