<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import useRoles from 'src/roles/composables/useRoles';
import RolesTable from 'src/roles/components/RolesTable.vue';
import type { RolesResponse } from 'src/roles/interfaces/roles-interface';
import LoadingModal from 'src/shared/components/LoadingModal.vue';
import usePermisos from 'src/user/composables/usePermisos';
import { Entidades } from 'src/shared/const/entidades';

const router = useRouter();
const { data: rolesData, isLoading } = useRoles();
const { tienePermiso } = usePermisos();

const roles = ref<RolesResponse[]>([]);

watchEffect(() => {
  if (rolesData.value) {
    roles.value = rolesData.value;
  }
});

async function nuevoRol() {
  await router.push({ name: 'roles-create' });
}

async function editarRol(rol: RolesResponse) {
  await router.push({ name: 'roles-update', params: { id: rol.id_rol } });
}
</script>

<template>
  <LoadingModal v-if="isLoading" />
  <q-page class="q-pa-md" v-else>
    <div class="row justify-between items-center q-mb-md">
      <div class="text-h6">Administración de Roles</div>
      <q-btn
        label="Nuevo Rol"
        v-if="tienePermiso(Entidades.ROL, 'Registrar')"
        color="primary"
        icon="add"
        @click="nuevoRol"
      />
    </div>

    <RolesTable :roles="roles" @edit="editarRol" />
  </q-page>
</template>
