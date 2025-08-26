import { computed } from 'vue';
import useRoleById from 'src/roles/composables/useRoleById';
import { useUserStore } from 'src/stores/user';
import type { Entidades } from 'src/shared/const/entidades';

export default function usePermisos() {
  const storeUser = useUserStore();
  const { data: roleData } = useRoleById(storeUser.idRol);

  const permisosPorTabla = computed(() => {
    const permisos: Record<string, string[]> = {};

    if (!roleData.value?.menus) return permisos;

    roleData.value.menus.forEach((menu) => {
      const tabla = menu.tabla;
      const accion = menu.nombre;

      if (!permisos[tabla]) permisos[tabla] = [];
      if (!permisos[tabla].includes(accion)) {
        permisos[tabla].push(accion);
      }
    });

    return permisos;
  });

  function tienePermiso(tabla: Entidades, accion: string): boolean {
    return permisosPorTabla.value?.[tabla]?.includes(accion) ?? false;
  }

  return {
    tienePermiso,
    permisosPorTabla,
  };
}
