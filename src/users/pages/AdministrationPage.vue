<script setup lang="ts">
import { useQuasar } from 'quasar';
import { useRouter } from 'vue-router';
import TableUsers from '../components/TableUsers.vue';
import usePermisos from 'src/user/composables/usePermisos';
import { Entidades } from 'src/shared/const/entidades';

const $q = useQuasar();
const router = useRouter();

const { tienePermiso } = usePermisos();

async function nuevoRegistro() {
  $q.notify({
    message: 'Agregar nuevo registro',
    color: 'green',
    icon: 'add',
  });

  await router.push({ name: 'register-user' });
}
</script>
<template>
  <q-page class="q-pa-md">
    <div class="q-mb-md flex justify-end">
      <q-btn
        v-if="tienePermiso(Entidades.USUARIOS, 'Registrar')"
        label="Nuevo usuario"
        color="primary"
        class="q-mt-md"
        @click="nuevoRegistro"
      />
    </div>

    <TableUsers />
  </q-page>
</template>
