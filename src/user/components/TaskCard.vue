<script setup lang="ts">
export interface IpropsTask {
  tareaCompletada: boolean;
  nombre: string;
  icon: string;
}

interface Iemits {
  (e: 'update:tareaCompletada', value: boolean): void;
}

const props = defineProps<IpropsTask>();
const emits = defineEmits<Iemits>();

function updateCheckbox(tareaCompletada: boolean) {
  emits('update:tareaCompletada', tareaCompletada);
}
</script>
<template>
  <!-- Checkbox + nombre -->
  <q-item-section avatar>
    <q-checkbox
      :model-value="props.tareaCompletada"
      @update:model-value="updateCheckbox(!props.tareaCompletada)"
    />
  </q-item-section>

  <q-item-section>
    <q-item-label>{{ props.nombre }}</q-item-label>
  </q-item-section>

  <!-- Icono alusivo -->
  <q-item-section side>
    <q-icon :name="props.icon" color="primary" />
  </q-item-section>
</template>
