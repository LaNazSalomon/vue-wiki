<script setup lang="ts">
import { useUserStore } from 'src/stores/user';

interface Usuario {
  fotoUrl: string;
  descripcion: string;
}

const userStore = useUserStore();
console.log(userStore.getUsername());

//Esos datos podrian venir de el backend si asi se necesitara
const user2: Usuario = {
  fotoUrl: 'https://cdn.quasar.dev/img/avatar4.jpg',
  descripcion:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet.',
};
</script>

<template>
  <q-card class="q-pa-none" style="max-width: 600px; overflow: hidden">
    <!-- Imagen de fondo -->
    <div
      class="bg-cover bg-center"
      style="height: 180px; background-image: url('https://cdn.quasar.dev/img/mountains.jpg')"
    ></div>

    <!-- Imagen circular del usuario -->
    <div class="q-pa-md flex flex-center" style="margin-top: -64px">
      <q-avatar size="128px" class="shadow-2">
        <img :src="user2.fotoUrl" alt="Usuario" />
      </q-avatar>
    </div>

    <div class="text-center q-mb-md">
      <div class="text-h6">{{ userStore.user }}</div>
      <div class="text-caption text-grey-7">{{ userStore.rol }}</div>
    </div>

    <div class="q-pa-md">
      <div class="text-body2 text-grey-8">
        {{ user2.descripcion }}
      </div>
    </div>

    <q-separator />
    <div class="q-pa-md">
      <div class="text-subtitle2 q-mb-sm">Resumen de asuntos</div>
      <div class="row justify-around text-center">
        <div>
          <div class="text-h6">{{ 52 }}</div>
          <div class="text-caption text-grey-7">Total</div>
        </div>
        <div>
          <div class="text-h6">{{ 25 }}</div>
          <div class="text-caption text-grey-7">Abiertos</div>
        </div>
        <div>
          <div class="text-h6">{{ 27 }}</div>
          <div class="text-caption text-grey-7">Cerrados</div>
        </div>
      </div>
    </div>
  </q-card>
</template>
