import { defineStore } from 'pinia';
import type { ResponseLogin } from 'src/user/interfaces/login-user';
import { ref } from 'vue';

export const useUserStore = defineStore('user', () => {
  const token = ref<string>('');
  const user = ref<string>('');
  const idRol = ref<string>('');
  const rol = ref<string>('');

  //* Getters
  const getJwt = () => token.value;
  const getRol = () => rol.value;
  const getUsername = () => user.value;
  const isAuthenticated = () => token.value !== '';

  //* Acciones
  function setJwt(newJwt: string) {
    token.value = newJwt;
  }

  function setUserSession(payload: ResponseLogin) {
    user.value = payload.username;
    idRol.value = payload.id_rol;
    rol.value = payload.rol;
    token.value = payload.token;
  }

  function clearSession() {
    token.value = '';
    user.value = '';
    idRol.value = '';
    rol.value = '';
  }

  return {
    token,
    user,
    idRol,
    rol,
    getJwt,
    getRol,
    getUsername,
    isAuthenticated,
    setJwt,
    setUserSession,
    clearSession,
  };
});
