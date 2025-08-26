<script setup lang="ts">
import { useQuasar } from 'quasar';
import { ref } from 'vue';

const $q = useQuasar();
const lugares = [
  { label: 'Ciudad de México', value: 'cdmx' },
  { label: 'Guadalajara', value: 'gdl' },
  { label: 'Monterrey', value: 'mty' },
  { label: 'Puebla', value: 'pue' },
  { label: 'Tepatepec', value: 'tep' },
];

const contacto = ref({
  lugar: '',
  nombre: '',
  edad: null,
  correo: '',
  descripcion: '',
});

function registrarContacto() {
  $q.notify('Contacto registrado:');
  // Podriamos usar un composable para mandar datos a la api
}
</script>
<template>
  <q-card class="q-pa-md" style="width: 100%">
    <q-card-section class="text-h6 text-primary"> Registro de Contacto </q-card-section>
    <q-separator />

    <q-form @submit.prevent="registrarContacto">
      <q-select
        filled
        v-model="contacto.lugar"
        label="Lugar de origen"
        :options="lugares"
        emit-value
        map-options
        class="q-mb-md"
      />
      <q-input filled v-model="contacto.nombre" label="Nombre" class="q-mb-md" />
      <q-input filled v-model="contacto.edad" type="number" label="Edad" class="q-mb-md" />
      <q-input
        filled
        v-model="contacto.correo"
        type="email"
        label="Correo electrónico"
        class="q-mb-md"
      />
      <q-input
        filled
        v-model="contacto.descripcion"
        type="textarea"
        label="Mensaje / Descripción"
        autogrow
        class="q-mb-md"
        style="min-height: 120px"
      />

      <q-btn label="Registrar contacto" type="submit" color="primary" />
    </q-form>
  </q-card>
</template>
