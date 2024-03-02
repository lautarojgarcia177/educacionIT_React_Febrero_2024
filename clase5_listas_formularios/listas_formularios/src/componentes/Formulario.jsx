import { useState } from "react";

export default function Formulario({ lista, setLista }) {
  const [inputNombreValue, setInputNombreValue] = useState("");
  const [inputPrecioValue, setInputPrecioValue] = useState(0);

  function onProductoSubmit(event) {
    event.preventDefault();
    if (!inputNombreValue) {
      alert("Nombre de producto invalido");
      return;
    }
    const productoAAgregar = {
      nombre: inputNombreValue,
      precio: inputPrecioValue,
      id: lista.length + 1,
    };
    setLista([...lista, productoAAgregar]);
  }

  function onPrecioChange(event) {
    const newPrice = event.target.value;
    if (newPrice >= 0) setInputPrecioValue(newPrice);
  }

  return (
    <form onSubmit={onProductoSubmit}>
      <div>
        <label htmlFor="nombre">Nombre del producto</label>
        <input
          type="text"
          name="nombre"
          id="nombre"
          value={inputNombreValue}
          onChange={(e) => setInputNombreValue(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="precio">Precio del producto</label>
        <input
          type="number"
          name="precio"
          id="precio"
          value={inputPrecioValue}
          onChange={onPrecioChange}
        />
      </div>

      <button type="submit">Agregar a la lista</button>
    </form>
  );
}
