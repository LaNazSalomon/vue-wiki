<script setup lang="ts">
interface Iprops {
  icon: string;
  cantidadRecibida: number;
  etiqueta: string;
  porcentaje: number;
}

const props = defineProps<Iprops>();

const porcentajeClass = props.porcentaje >= 0 ? 'bg-green-3 text-green-10' : 'bg-red-3 text-red-10';
</script>
<template>
  <q-card class="q-pa-md" style="max-width: 400px">
    <div class="row no-wrap items-center justify-between">
      <div>
        <q-icon :name="props.icon" size="64px" color="primary" />
      </div>

      <div class="column items-end text-right">
        <div class="text-h4 text-bold">{{ props.cantidadRecibida }}</div>

        <div class="text-subtitle2 text-grey-7">{{ props.etiqueta }}</div>

        <div
          class="q-mt-sm q-pa-xs text-caption text-bold"
          :class="porcentajeClass"
          style="border-radius: 4px; width: 60px"
        >
          {{ props.porcentaje }}%
        </div>
      </div>
    </div>
  </q-card>
</template>
