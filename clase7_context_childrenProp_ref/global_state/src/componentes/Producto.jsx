export default function Producto(props) {
  return (
    <span
      style={{ border: "1px solid gray", borderRadius: "5px", padding: "5px" }}>
      {props.producto.nombre}
    </span>
  );
}
