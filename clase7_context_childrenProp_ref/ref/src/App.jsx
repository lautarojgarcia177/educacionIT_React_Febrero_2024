import { useState, useRef } from "react";

function App() {
  const [count, setCount] = useState(0);
  const countInterval = useRef(null);
  function manejarIniciar() {
    countInterval.current = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
  }
  function manejarDetener() {
    clearInterval(countInterval.current);
  }
  return (
    <>
      <div>
        <h2>Segundometro</h2>
        <p>{count}</p>
        <button onClick={manejarIniciar}>Iniciar</button>
        <button onClick={manejarDetener}>Detener</button>
      </div>
    </>
  );
}

export default App;
