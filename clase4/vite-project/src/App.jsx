import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { setLocalStorage, readLocalStorage } from "./localstorage.service";

const LOCALSTORAGE_KEY_COUNT = "count";

function App() {
  const [count, setCount] = useState(0);

  // Hook para realizar efectos secundarios
  useEffect(() => {
    // console.log("El nuevo valor de count dentro de useEffect es: ", count);
    if (count !== 0) {
      setLocalStorage(LOCALSTORAGE_KEY_COUNT, count);
    }
  }, [count]);

  // Este hook se ejecuta solamente en el render inicial del componente
  useEffect(async () => {
    const savedCount = readLocalStorage(LOCALSTORAGE_KEY_COUNT) || 0;
    setCount(savedCount);
  }, []);

  function incrementCount() {
    setCount((count) => count + 1);
    console.log(
      // "El nuevo valor de count dentro de la funcion incrementar es: ",
      count
    );
  }
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React!!!!!!!!</h1>
      <div className="card">
        <button onClick={incrementCount}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
