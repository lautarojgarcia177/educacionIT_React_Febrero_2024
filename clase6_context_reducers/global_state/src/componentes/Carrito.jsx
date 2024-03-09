export default function Carrito(props) {
  return (
    <div>
      <h4>Carrito</h4>
      <div style={{ border: "1px dotted black", padding: "2rem" }}>
        <ul>
          {/* {props.detalle.map((item) => (
            <li key={item.id}>{item.nombre}</li>
        ))} */}
        </ul>
        <p>Total: {props.total}</p>
      </div>
    </div>
  );
}
