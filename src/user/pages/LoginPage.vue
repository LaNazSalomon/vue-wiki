<script setup lang="ts">
import { ref } from 'vue';
import useLogin from '../composables/useLogin';

const username = ref('');
const password = ref('');

const { login } = useLogin();
</script>

<template>
  <div
    style="
      display: flex;
      justify-content: center;
      align-items: flex-start;
      min-height: 100vh;
      padding-top: 100px;
    "
  >
    <q-card class="q-pa-md" style="max-width: 400px; width: 100%">
      <q-card-section>
        <div class="text-h6">Iniciar sesión</div>
      </q-card-section>

      <q-card-section>
        <q-form @submit.prevent="login.mutate({ username, password })" ref="form">
          <q-input
            filled
            v-model="username"
            label="Nombre de usuario"
            :rules="[(val) => !!val || 'Este campo es obligatorio']"
            lazy-rules
          />

          <q-input
            filled
            v-model="password"
            label="Contraseña"
            type="password"
            :rules="[(val) => !!val || 'Este campo es obligatorio']"
            lazy-rules
            class="q-mt-md"
          />

          <q-btn label="Entrar" type="submit" color="primary" class="q-mt-lg full-width" />
        </q-form>
      </q-card-section>
    </q-card>
  </div>
</template>
