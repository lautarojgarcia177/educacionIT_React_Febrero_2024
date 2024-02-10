import { useState } from "react";
import "./App.css";

import { ClickMe as Clickeable } from "./click-me/ClickMe";
import { Contador } from "./contador/Contador";

function App() {
  const [acumulador, setAcumulador] = useState(0);
  function aumentarAcumulador() {
    setAcumulador(acumulador + 1);
  }
  return (
    <div>
      <Clickeable aumentarAcumulador={aumentarAcumulador} />
      <Contador
        acumulador={acumulador}
        textos={{
          texto1: "El boton ha sido clickeado",
          texto2: "veces",
        }}
      />
    </div>
  );
}

export default App;
