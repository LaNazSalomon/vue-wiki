<script setup lang="ts">
import { ref, computed } from 'vue';

import LoadingModal from 'src/shared/components/LoadingModal.vue';
import type { IcreateRole } from '../interfaces/create-role-interface';
import { Entidades } from 'src/shared/const/entidades';
import useMenus from '../composables/useMenus';
import { useCreateRole } from '../composables/useCreateRoles';

const form = ref<IcreateRole>({
  nombre: '',
  descripcion: '',
  status: true,
  tablas: [],
  id_menu: [],
});

const tablaOptions = Object.values(Entidades);

const { data: menusData, isLoading: menusLoading } = useMenus();
const menuOptions = computed(() => menusData.value?.filter((m) => m.status) || []);

const { createRole, isPending, isError, isSuccess, error } = useCreateRole();

function handleSubmit() {
  createRole(form.value);
}
</script>
<template>
  <q-page class="q-pa-md">
    <div class="text-h6 q-mb-md">Crear nuevo rol</div>

    <LoadingModal v-if="isPending" />

    <q-form @submit.prevent="handleSubmit">
      <div class="q-gutter-md">
        <q-input v-model="form.nombre" label="Nombre del rol" filled />
        <q-input v-model="form.descripcion" label="Descripción" filled />
        <q-toggle v-model="form.status" label="Activo" />

        <q-select
          v-model="form.tablas"
          :options="tablaOptions"
          label="Tablas asociadas"
          multiple
          filled
          emit-value
          map-options
        />

        <q-select
          v-model="form.id_menu"
          :options="menuOptions"
          option-label="nombre"
          option-value="id_menu"
          label="Menús disponibles"
          multiple
          filled
          :loading="menusLoading"
          emit-value
          map-options
        />

        <q-btn label="Crear rol" type="submit" color="primary" :loading="isPending" />

        <q-banner v-if="isError" class="bg-red text-white q-mt-md">
          <div v-if="Array.isArray(error?.message)">
            <div v-for="(msg, index) in error.message" :key="index">• {{ msg }}</div>
          </div>
          <div v-else>{{ error?.message || 'Error al crear rol' }}</div>
        </q-banner>

        <q-banner v-if="isSuccess" class="bg-green text-white q-mt-md">
          Rol creado correctamente
        </q-banner>
      </div>
    </q-form>
  </q-page>
</template>
