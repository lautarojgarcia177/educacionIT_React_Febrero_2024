export default function Tarjeta({ titulo, descripcion }) {
  return (
    <div className="card">
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
    </div>
  );
}
