export default function ListadoProductos(props) {
  return (
    <div>
      <h4>Productos disponibles</h4>
      <ul>
        {props.listado.map((prod) => {
          return (
            <li key={prod.id}>
              <span style={{ fontWeight: "bold", marginRight: "1rem" }}>
                {prod.nombre}
              </span>
              <span style={{ marginRight: "1rem" }}>precio: ${prod.valor}</span>
              <button
                onClick={() =>
                  props.dispatch({
                    tipo: "producto_agregado_al_carrito",
                    producto: prod,
                  })
                }>
                +
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
