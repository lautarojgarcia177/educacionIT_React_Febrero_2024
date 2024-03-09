export const estadoInicial = {
  detalle: [],
  total: 0,
};

export function carritoReducer(estado, accion) {
  console.log("Se dispacheo una accion: ", accion);
  switch (accion.tipo) {
    case "producto_agregado_al_carrito": {
      return {
        ...estado,
      };
    }
    default: {
      throw Error("Accion desconocida: " + accion.tipo);
    }
  }
}
