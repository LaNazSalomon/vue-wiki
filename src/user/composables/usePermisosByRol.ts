import useRoleById from 'src/roles/composables/useRoleById';
import { computed } from 'vue';

export default function usePermisosDesdeRol(idRol: string) {
  const { data: roleData } = useRoleById(idRol);

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

  function tienePermiso(tabla: string, accion: string): boolean {
    return permisosPorTabla.value?.[tabla]?.includes(accion) ?? false;
  }

  return {
    tienePermiso,
    permisosPorTabla,
  };
}
