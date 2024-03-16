import { useContext } from "react";
import Producto from "./Producto";
import { CarritoContext } from "../contextos/CarritoContexto";

export default function BestSeller() {
  const carrito = useContext(CarritoContext);
  const productoMasDemandado = encontrarObjetoConMayorCantidad(carrito.detalle);
  const totalMasDemantado = productoMasDemandado
    ? productoMasDemandado.cantidad * productoMasDemandado.producto.valor
    : 0;
  let productoMasDemandadoJSX;
  if (productoMasDemandado) {
    productoMasDemandadoJSX = (
      <p>
        El producto mas demandado es{" "}
        <Producto producto={productoMasDemandado.producto} /> con una cantidad
        de {productoMasDemandado.cantidad} sumando un total de ${" "}
        {totalMasDemantado}
      </p>
    );
  }
  const sinProductosEnElCarritoJSX = (
    <p>Aun no hay productos en el carrito para calcular el best seller</p>
  );
  return (
    <>
      {productoMasDemandado
        ? productoMasDemandadoJSX
        : sinProductosEnElCarritoJSX}
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
