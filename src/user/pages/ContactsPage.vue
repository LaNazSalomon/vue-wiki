<script setup lang="ts">
import { contactos } from 'src/assets/helpers/list-contacts';
import ContactCard from '../components/ContactCard.vue';
</script>

<template>
  <div class="q-pa-md">
    <q-card class="q-pa-md" style="width: 100%">
      <q-card-section class="text-h6 text-primary"> Contactos </q-card-section>
      <q-separator />
      <ContactCard
        v-for="contacto in contactos"
        :key="contacto.email"
        :nombre="contacto.nombre"
        :email="contacto.email"
        :fotoUrl="contacto.fotoUrl"
        :isOnline="contacto.isOnline"
      />
    </q-card>
  </div>
</template>
