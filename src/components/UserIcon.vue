<script setup lang="ts">
import { useUserStore } from 'src/stores/user';

const userStore = useUserStore();
</script>

<template>
  <div class="row items-center q-ml-auto">
    <div class="column">
      <div class="text-h6 text-white">{{ userStore.user }}</div>
      <div class="text-caption text-white">{{ userStore.rol }}</div>
    </div>

    <q-avatar size="50px" class="q-ml-md">
      <img src="https://cdn.quasar.dev/img/avatar4.jpg" alt="Foto de perfil" />
    </q-avatar>
  </div>
</template>
