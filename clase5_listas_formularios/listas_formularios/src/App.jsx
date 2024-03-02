import { useState } from "react";
import Formulario from "./componentes/Formulario";
import Lista from "./componentes/Lista";

function App() {
  const listaEstaticaDeProductos = [
    {
      id: 1,
      nombre: "Zapatillas Nike Air",
    },
    {
      id: 2,
      nombre: "Zapatillas Adidas",
    },
    {
      id: 3,
      nombre: "Zapatillas Fila",
    },
  ];

  const [listaDinamicaProductos, setListaDinamicaProductos] = useState(
    listaEstaticaDeProductos
  );

  return (
    <>
      <Lista
        listaEstatica={listaEstaticaDeProductos}
        listaDinamica={listaDinamicaProductos}
      />
      <br />
      <Formulario
        lista={listaDinamicaProductos}
        setLista={setListaDinamicaProductos}
      />
    </>
  );
}

export default App;
