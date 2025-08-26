import axios from 'axios';
import { useUserStore } from 'src/stores/user';

const storeUser = useUserStore();
export const arquetipoApi = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    Authorization: `Bearer ${storeUser.token}`,
  },
});
