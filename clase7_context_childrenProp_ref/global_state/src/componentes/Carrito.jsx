import { useContext } from "react";
import { CarritoContext, CarritoDispatchContext } from "../contextos/CarritoContexto";

export default function Carrito(props) {
  const carrito = useContext(CarritoContext);
  const dispatch = useContext(CarritoDispatchContext);
  return (
    <div>
      <h4>Carrito</h4>
      <div style={{ border: "1px dotted black", padding: "2rem" }}>
        {carrito.detalle && (
          <ul>
            {carrito.detalle.map((item) => (
              <li key={item.producto.id}>
                {item.producto.nombre}, cantidad: {item.cantidad}&nbsp;
                <button
                  onClick={() =>
                    dispatch({
                      tipo: "producto_eliminado_del_carrito",
                      producto: item.producto,
                    })
                  }>
                  -
                </button>
              </li>
            ))}
          </ul>
        )}
        <p>Total: {carrito.total}</p>
      </div>
    </div>
  );
}
