<script setup lang="ts">
import InformacionCard from 'src/shared/components/InformacionCard.vue';
import { tarjetas } from 'src/assets/helpers/list-card';
</script>

<template>
  <div class="row q-col-gutter-md q-pa-sm">
    <div class="col-xs-12 col-sm-6 col-md-3" v-for="(tarjeta, index) in tarjetas" :key="index">
      <InformacionCard
        :icon="tarjeta.icon"
        :cantidadRecibida="tarjeta.cantidadRecibida"
        :etiqueta="tarjeta.etiqueta"
        :porcentaje="tarjeta.porcentaje"
      />
    </div>
  </div>
</template>
