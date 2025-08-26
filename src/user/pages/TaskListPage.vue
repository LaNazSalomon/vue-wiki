<script setup lang="ts">
import { tareas } from 'src/assets/helpers/list-task';
import TaskCard from '../components/TaskCard.vue';
</script>
<template>
  <q-card class="q-pa-md" style="width: 100%">
    <q-list bordered separator>
      <q-card-section class="text-h6 text-primary"> Tareas </q-card-section>
      <q-separator />

      <q-item v-for="(tarea, index) in tareas" :key="index">
        <TaskCard
          v-model:tareaCompletada="tarea.tareaCompletada"
          :nombre="tarea.nombre"
          :icon="tarea.icon"
        />
      </q-item>
    </q-list>
  </q-card>
</template>
