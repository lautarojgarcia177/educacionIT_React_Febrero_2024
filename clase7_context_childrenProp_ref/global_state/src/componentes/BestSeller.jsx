export default function BestSeller({ carrito }) {
  const productoMasDemandado = encontrarObjetoConMayorCantidad(carrito.detalle);
  const totalMasDemantado = productoMasDemandado
    ? productoMasDemandado.cantidad * productoMasDemandado.producto.valor
    : 0;
  return (
    <>
      <p>
        {productoMasDemandado
          ? "El producto mas demandado es " +
            productoMasDemandado.producto.nombre +
            " con una cantidad de " +
            productoMasDemandado.cantidad +
            " sumando un total de $" +
            totalMasDemantado
          : "Aun no hay productos en el carrito para calcular el best seller"}
      </p>
    </>
  );
}

const encontrarObjetoConMayorCantidad = (array) => {
  if (array.length === 0) {
    return null; // Return null or handle the case where the array is empty
  }

  let maxObject = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i].cantidad > maxObject.cantidad) {
      maxObject = array[i];
    }
  }

  return maxObject;
};
