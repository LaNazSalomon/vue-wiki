<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import UserIcon from 'src/components/UserIcon.vue';
import usePermisos from 'src/user/composables/usePermisos';
import { Entidades } from 'src/shared/const/entidades';
import useLogout from 'src/user/composables/useLogout';

const router = useRouter();
const { tienePermiso } = usePermisos();
const { logout: salir } = useLogout();

const leftDrawerOpen = ref(false);
function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

async function navigation(name: string) {
  await router.push({ name });
}

async function logout() {
  await salir();
}

type MenuItemBase = {
  title: string;
  icon: string;
};

type MenuItemRuta = MenuItemBase & {
  name: string;
  tabla?: Entidades;
};

type MenuItemAccion = MenuItemBase & {
  action: 'logout';
};

type MenuItem = MenuItemRuta | MenuItemAccion;

type MenuGroup = {
  title: string;
  icon: string;
  children: MenuItem[];
};

const rawLinksList: MenuGroup[] = [
  {
    title: 'Home',
    icon: 'home',
    children: [{ title: 'Dashboard', icon: 'dashboard', name: 'dashboard-login' }],
  },
  {
    title: 'Administración',
    icon: 'admin_panel_settings',
    children: [
      {
        title: 'Administración Usuarios',
        icon: 'visibility',
        name: 'administration-users',
        tabla: Entidades.USUARIOS,
      },
      {
        title: 'Administración Roles',
        icon: 'manage_accounts',
        name: 'roles-admin',
        tabla: Entidades.ROL,
      },
    ],
  },
  {
    title: 'Configuración',
    icon: 'settings',
    children: [
      { title: 'Seguridad', icon: 'security', name: 'config-seguridad' },
      { title: 'Salir', icon: 'logout', action: 'logout' },
    ],
  },
];

const linksList = computed(() => {
  return rawLinksList
    .map((link) => {
      const filteredChildren = link.children.filter((child) => {
        if ('action' in child) return true;
        if (!child.tabla) return true;

        return (
          tienePermiso(child.tabla, 'Ver') ||
          tienePermiso(child.tabla, 'Registrar') ||
          tienePermiso(child.tabla, 'Actualizar') ||
          tienePermiso(child.tabla, 'Eliminar')
        );
      });

      if (filteredChildren.length === 0) return null;

      return {
        ...link,
        children: filteredChildren,
      };
    })
    .filter(Boolean) as MenuGroup[];
});

async function handleClick(child: MenuItem) {
  if ('name' in child) {
    await navigation(child.name);
  } else if (child.action === 'logout') {
    await logout();
  }
}
</script>

<template>
  <q-layout view="hHh Lpr lFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />
        <q-toolbar-title>Arquetipo</q-toolbar-title>
        <UserIcon />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered class="bg-grey-1">
      <q-list padding>
        <template v-for="link in linksList" :key="link.title">
          <q-expansion-item
            v-if="link.children"
            :label="link.title"
            :icon="link.icon"
            expand-separator
            dense
          >
            <q-item
              v-for="child in link.children"
              :key="child.title"
              clickable
              @click="handleClick(child)"
            >
              <q-item-section avatar>
                <q-icon :name="child.icon" />
              </q-item-section>
              <q-item-section>{{ child.title }}</q-item-section>
            </q-item>
          </q-expansion-item>
        </template>
      </q-list>
    </q-drawer>

    <q-page-container class="q-pa-md">
      <router-view />
    </q-page-container>
  </q-layout>
</template>
