<script setup lang="ts">
interface Iprops {
  nombre: string;
  email: string;
  fotoUrl: string;
  isOnline: boolean;
}

const props = withDefaults(defineProps<Iprops>(), {
  nombre: 'Sin nombre',
  email: 'sin@email.com',
  fotoUrl: 'https://cdn.quasar.dev/img/avatar.png',
  isOnline: false,
});

function compartirContacto() {
  console.log(`Compartiendo contacto de ${props.nombre}`);
}

function enviarMensaje() {
  console.log(`Enviando mensaje a ${props.email}`);
}
</script>

<template>
  <q-card
    class="q-pa-md q-mb-md row items-center justify-between"
    style="width: 100%; max-width: 600px"
  >
    <div class="q-mr-md">
      <q-avatar size="64px">
        <img :src="props.fotoUrl" alt="Foto de contacto" />
      </q-avatar>
    </div>

    <div class="column justify-center" style="flex-grow: 1">
      <div class="text-h6">{{ props.nombre }}</div>
      <div class="text-caption text-grey-7">{{ props.email }}</div>
    </div>

    <div class="row items-center q-gutter-sm">
      <q-btn flat round icon="share" @click="compartirContacto" />
      <q-btn flat round icon="message" @click="enviarMensaje" />
      <q-badge :color="props.isOnline ? 'green' : 'grey'" rounded>
        {{ props.isOnline ? 'Online' : 'Offline' }}
      </q-badge>
    </div>
  </q-card>
</template>
