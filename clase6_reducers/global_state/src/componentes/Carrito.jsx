export default function Carrito(props) {
  return (
    <div>
      <h4>Carrito</h4>
      <div style={{ border: "1px dotted black", padding: "2rem" }}>
        <ul>
          {props.detalle.detalle.map((item) => (
            <li key={item.producto.id}>
              {item.producto.nombre}, cantidad: {item.cantidad}&nbsp;
              <button
                onClick={() =>
                  props.dispatch({
                    tipo: "producto_eliminado_del_carrito",
                    producto: item.producto,
                  })
                }>
                -
              </button>
            </li>
          ))}
        </ul>
        <p>Total: {props.detalle.total}</p>
      </div>
    </div>
  );
}
