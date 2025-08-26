<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import type { IRegisterUser } from '../interfaces/user-register';
import { useRegisterUser } from '../composables/useRegisterUser';
import useRoles from 'src/roles/composables/useRoles';
import type { RolesResponse } from 'src/roles/interfaces/roles-interface';
import LoadingModal from 'src/shared/components/LoadingModal.vue';

const form = ref<IRegisterUser>({
  nombres: '',
  apellido_paterno: '',
  apellido_materno: '',
  username: '',
  email: '',
  telefono: '',
  id_rol: '',
  status: true,
});

const { mutate: registerUser, isPending, isError, isSuccess, error } = useRegisterUser();

const handleSubmit = () => {
  registerUser(form.value);
};

// Roles
const { data: rolesData, isLoading: rolesLoading } = useRoles();
const roles = ref<RolesResponse[]>([]);

watchEffect(() => {
  if (rolesData.value) {
    roles.value = rolesData.value;
  }
});
</script>

<template>
  <q-card class="q-pa-md" flat bordered>
    <q-form @submit.prevent="handleSubmit">
      <div class="q-gutter-md">
        <q-input v-model="form.nombres" label="Nombres" filled />
        <q-input v-model="form.apellido_paterno" label="Apellido Paterno" filled />
        <q-input v-model="form.apellido_materno" label="Apellido Materno" filled />
        <q-input v-model="form.username" label="Username" filled />
        <q-input v-model="form.email" label="Email" type="email" filled />
        <q-input v-model="form.telefono" label="Teléfono" filled />

        <q-select
          v-model="form.id_rol"
          :options="roles"
          option-label="nombre"
          option-value="id_rol"
          label="Rol"
          filled
          :loading="rolesLoading"
          emit-value
          map-options
        />

        <q-toggle v-model="form.status" label="Activo" />

        <q-btn
          type="submit"
          label="Registrar"
          color="primary"
          :loading="isPending"
          :disable="isPending"
        />

        <LoadingModal v-if="isPending" />

        <q-banner v-if="isError" class="bg-red text-white q-mt-md">
          {{ error?.message || 'Error al registrar usuario' }}
        </q-banner>

        <q-banner v-if="isSuccess" class="bg-green text-white q-mt-md">
          Usuario registrado correctamente
        </q-banner>
      </div>
    </q-form>
  </q-card>
</template>
