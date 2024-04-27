export const estadoInicialCarrito = {
  detalle: [],
  total: 0,
};

function productoAgregadoAlCarrito(borrador, accion) {
  const existe = borrador.detalle.find(
    (prod) => prod.producto.id === accion.producto.id
  );
  if (existe) {
    existe.cantidad++;
  } else {
    borrador.detalle.push({
      producto: accion.producto,
      cantidad: 1,
    });
  }
  let nuevoTotal = 0;
  for (let item of borrador.detalle) {
    nuevoTotal += item.producto.valor * item.cantidad;
  }
  borrador.total = nuevoTotal;
  return borrador;
}

function productoEliminadoDelCarrito(borrador, accion) {
  const productoAEliminar = borrador.detalle.find(
    (item) => item.producto.id === accion.producto.id
  );
  if (productoAEliminar.cantidad > 1) {
    productoAEliminar.cantidad--;
  } else {
    borrador.detalle = borrador.detalle.filter(
      (item) => item.producto.id !== accion.producto.id
    );
  }
  return borrador;
}

export function carritoReducer(borrador, accion) {
  console.log("Se dispacheo una accion: ", accion);
  switch (accion.tipo) {
    case "producto_agregado_al_carrito": {
      return productoAgregadoAlCarrito(borrador, accion);
    }
    case "producto_eliminado_del_carrito": {
      return productoEliminadoDelCarrito(borrador, accion);
    }
    default: {
      throw Error("Accion desconocida: " + accion.tipo);
    }
  }
}
