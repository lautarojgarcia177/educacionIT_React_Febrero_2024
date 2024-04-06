export const estadoInicial = {
  detalle: [],
  total: 0,
};

function productoAgregadoAlCarrito(estado, accion) {
  const carritoActualizado = { ...estado };
  const existe = carritoActualizado.detalle.find(
    (prod) => prod.producto.id === accion.producto.id
  );
  if (existe) {
    existe.cantidad++;
  } else {
    carritoActualizado.detalle.push({
      producto: accion.producto,
      cantidad: 1,
    });
  }
  let nuevoTotal = 0;
  for (let item of carritoActualizado.detalle) {
    nuevoTotal += item.producto.valor * item.cantidad;
  }
  carritoActualizado.total = nuevoTotal;
  return carritoActualizado;
}

function productoEliminadoDelCarrito(estado, accion) {
  const carritoActualizado = { ...estado };
  const productoAEliminar = carritoActualizado.detalle.find(
    (item) => item.producto.id === accion.producto.id
  );
  if (productoAEliminar.cantidad > 1) {
    productoAEliminar.cantidad--;
  } else {
    carritoActualizado.detalle = carritoActualizado.detalle.filter(
      (item) => item.producto.id !== accion.producto.id
    );
  }
  return carritoActualizado;
}

export function carritoReducer(estado, accion) {
  console.log("Se dispacheo una accion: ", accion);
  switch (accion.tipo) {
    case "producto_agregado_al_carrito": {
      return productoAgregadoAlCarrito(estado, accion);
    }
    case "producto_eliminado_del_carrito": {
      return productoEliminadoDelCarrito(estado, accion);
    }
    default: {
      throw Error("Accion desconocida: " + accion.tipo);
    }
  }
}
