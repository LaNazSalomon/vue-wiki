<script setup lang="ts">
import { columns } from './type-table';
import useUsers from '../composables/useUsers';
import { useRouter } from 'vue-router';
import LoadingModal from 'src/shared/components/LoadingModal.vue';
import { Entidades } from 'src/shared/const/entidades';
import usePermisos from 'src/user/composables/usePermisos';

const router = useRouter();
const { data, isLoading, isError } = useUsers();

const { tienePermiso } = usePermisos();

async function modificar(id: string) {
  await router.push({ name: 'update-user', params: { id } });
}
</script>

<template>
  <q-page class="q-pa-md">
    <LoadingModal v-if="isLoading" />

    <q-table
      v-else-if="!isLoading || !isError"
      flat
      bordered
      title="Usuarios"
      :rows="data!"
      :columns="columns"
      row-key="id_usuario"
      :rows-per-page-options="[0]"
      hide-bottom
    >
      <template v-slot:body-cell-modificar="props">
        <q-td :props="props" class="text-center">
          <q-btn
            v-if="tienePermiso(Entidades.USUARIOS, 'Actualizar')"
            flat
            dense
            round
            icon="edit"
            color="primary"
            @click="modificar(props.row.id_usuario)"
          />
        </q-td>
      </template>
    </q-table>
  </q-page>
</template>
