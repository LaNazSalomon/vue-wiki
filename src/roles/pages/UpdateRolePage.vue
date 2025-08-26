<script setup lang="ts">
import { ref, computed, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import useMenus from 'src/roles/composables/useMenus';
import { useUpdateRole } from 'src/roles/composables/useUpdateRole';
import { Entidades } from 'src/shared/const/entidades';
import LoadingModal from 'src/shared/components/LoadingModal.vue';
import useRoleById from '../composables/useRoleById';

interface UpdateRolePayload {
  id_rol: string;
  nombre?: string;
  descripcion?: string;
  status?: boolean;
  id_menu: string[];
  tablas: Entidades[];
}

const route = useRoute();
const roleId = route.params.id as string;

const { data: roleData, isLoading } = useRoleById(roleId);
const { data: menusData, isLoading: menusLoading } = useMenus();
const menuOptions = computed(() => menusData.value?.filter((m) => m.status) || []);
const tablaOptions = Object.values(Entidades);

const form = ref<UpdateRolePayload>({
  id_rol: '',
  nombre: '',
  descripcion: '',
  status: true,
  id_menu: [],
  tablas: [],
});

watchEffect(() => {
  if (roleData.value) {
    form.value.id_rol = roleData.value.idRol;
    form.value.nombre = roleData.value.nombre;
    form.value.descripcion = roleData.value.descripcion;
    form.value.status = roleData.value.status;
    form.value.id_menu = roleData.value.menus.map((m) => m.id_menu);
    form.value.tablas = Array.from(new Set(roleData.value.menus.map((m) => m.tabla)));
  }
});

const { updateRole, isPending, isError, isSuccess, error } = useUpdateRole();

function handleSubmit() {
  updateRole(form.value);
}
</script>

<template>
  <q-page class="q-pa-md">
    <div class="text-h6 q-mb-md">Editar Rol</div>

    <LoadingModal v-if="isLoading || isPending" />

    <q-form v-else @submit.prevent="handleSubmit">
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

        <q-btn label="Actualizar rol" type="submit" color="primary" :loading="isPending" />

        <q-banner v-if="isError" class="bg-red text-white q-mt-md">
          <div v-if="Array.isArray(error?.message)">
            <div v-for="(msg, index) in error.message" :key="index">• {{ msg }}</div>
          </div>
          <div v-else>{{ error?.message || 'Error al actualizar rol' }}</div>
        </q-banner>

        <q-banner v-if="isSuccess" class="bg-green text-white q-mt-md">
          Rol actualizado correctamente
        </q-banner>
      </div>
    </q-form>
  </q-page>
</template>
