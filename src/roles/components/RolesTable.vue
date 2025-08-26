<script setup lang="ts">
import type { RolesResponse } from 'src/roles/interfaces/roles-interface';
import { Entidades } from 'src/shared/const/entidades';
import usePermisos from 'src/user/composables/usePermisos';

defineProps<{ roles: RolesResponse[] }>();
const { tienePermiso } = usePermisos();

const columns = [
  { name: 'nombre', label: 'Nombre', field: 'nombre', align: 'left' as const },
  {
    name: 'status',
    label: 'Estado',
    field: 'status',
    align: 'center' as const,
    format: (val: boolean) => (val ? 'Activo' : 'Inactivo'),
    sortable: true,
  },
  { name: 'actions', label: 'Acciones', field: 'actions', align: 'center' as const },
];
</script>

<template>
  <q-table
    :rows="roles"
    :columns="columns"
    row-key="id_rol"
    flat
    bordered
    title="Lista de Roles"
    :rows-per-page-options="[0]"
    hide-bottom
  >
    <template v-slot:body-cell-actions="props">
      <q-td :props="props">
        <q-btn
          icon="edit"
          v-if="tienePermiso(Entidades.ROL, 'Registrar')"
          flat
          dense
          @click="$emit('edit', props.row)"
        />
      </q-td>
    </template>
  </q-table>
</template>
