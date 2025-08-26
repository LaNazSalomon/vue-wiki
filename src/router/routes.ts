import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'login',
    redirect: '/login',
  },
  {
    path: '/login',
    component: () => import('../user/pages/LoginPage.vue'),
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../layouts/MainLayout.vue'),
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        name: 'dashboard-login',
        component: () => import('../user/layouts/DashboardLayout.vue'),
      },
      {
        path: 'usuarios/admin',
        name: 'administration-users',
        component: () => import('../users/pages/AdministrationPage.vue'),
      },
      {
        path: 'usuarios/admin/update/:id',
        name: 'update-user',
        component: () => import('../users/pages/UpdateUser.vue'),
      },
      {
        path: 'usuarios/admin/register',
        name: 'register-user',
        component: () => import('../users/components/RegisterUserForm.vue'),
      },
      {
        path: '/admin/roles',
        name: 'roles-admin',
        component: () => import('../roles/pages/RolesPage.vue'),
      },
      {
        path: '/admin/create-roles',
        name: 'roles-create',
        component: () => import('../roles/pages/CreateRolePage.vue'),
      },
      {
        path: '/admin/update-role/:id',
        name: 'roles-update',
        component: () => import('src/roles/pages/UpdateRolePage.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
