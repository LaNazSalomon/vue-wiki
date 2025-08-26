<script setup lang="ts">
import { ref, reactive, watchEffect } from 'vue';
import { useQuasar } from 'quasar';
import { useRoute } from 'vue-router';
import useUser from '../composables/useUser';
import useRoles from 'src/roles/composables/useRoles';
import type { UserResponseByID } from '../interfaces/users-interface';
import type { RolesResponse } from 'src/roles/interfaces/roles-interface';
import LoadingModal from 'src/shared/components/LoadingModal.vue';

const $q = useQuasar();
const route = useRoute();
const guardando = ref(false);

const id = Array.isArray(route.params.id) ? route.params.id[0] : route.params.id;

const { user, isLoading: userLoading, isError: userError, updateUser } = useUser(id!);
const { data: rolesData, isLoading: rolesLoading, isError: rolesError } = useRoles();
const roles = ref<RolesResponse[]>([]);

watchEffect(() => {
  if (rolesData.value) {
    roles.value = rolesData.value;
  }
});

const usuarioForm = reactive<UserResponseByID>({
  id_usuario: '',
  nombres: '',
  apellido_paterno: '',
  apellido_materno: '',
  username: '',
  status: false,
  email: '',
  telefono: '',
  id_rol: {
    id_rol: '',
    nombre: '',
    descripcion: '',
    status: false,
  },
});

watchEffect(() => {
  if (user.value) {
    Object.assign(usuarioForm, user.value);
  }
});

function guardarCambios() {
  if (!usuarioForm.id_usuario) return;

  const payload = {
    nombres: usuarioForm.nombres,
    apellido_paterno: usuarioForm.apellido_paterno,
    apellido_materno: usuarioForm.apellido_materno,
    username: usuarioForm.username,
    email: usuarioForm.email,
    telefono: usuarioForm.telefono,
    status: usuarioForm.status,
    id_rol: usuarioForm.id_rol.id_rol,
  };

  guardando.value = true;

  updateUser.mutate(
    { id: usuarioForm.id_usuario, payload },
    {
      onSuccess: () => {
        $q.notify({
          message: 'Usuario actualizado correctamente',
          color: 'green',
          icon: 'check',
        });
        guardando.value = false;
      },
      onError: () => {
        $q.notify({
          message: 'Error al actualizar usuario',
          color: 'negative',
          icon: 'error',
        });
        guardando.value = false;
      },
    },
  );
}
</script>

<template>
  <q-page class="q-pa-md">
    <q-card>
      <q-card-section>
        <div class="text-h6">Editar Usuario</div>
      </q-card-section>

      <LoadingModal v-if="userLoading || rolesLoading" />

      <q-form
        v-else-if="!userError && !rolesError"
        @submit.prevent="guardarCambios"
        class="q-gutter-md q-pa-md"
      >
        <q-input v-model="usuarioForm.nombres" label="Nombres" filled />
        <q-input v-model="usuarioForm.apellido_paterno" label="Apellido Paterno" filled />
        <q-input v-model="usuarioForm.apellido_materno" label="Apellido Materno" filled />
        <q-input v-model="usuarioForm.username" label="Usuario" filled />
        <q-input v-model="usuarioForm.email" label="Email" type="email" filled />
        <q-input v-model="usuarioForm.telefono" label="Teléfono" filled />

        <q-select
          v-model="usuarioForm.id_rol"
          label="Rol"
          :options="roles"
          option-label="nombre"
          option-value="id_rol"
          filled
          :loading="rolesLoading"
        />

        <q-toggle v-model="usuarioForm.status" label="Activo" />

        <div class="row justify-end q-mt-md">
          <q-btn label="Guardar" color="primary" type="submit" :loading="guardando" icon="save" />
        </div>
      </q-form>

      <div v-else class="q-pa-md text-negative">Error al cargar datos del usuario o roles.</div>
    </q-card>
  </q-page>
</template>
