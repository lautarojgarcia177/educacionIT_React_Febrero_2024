import BestSeller from "./componentes/BestSeller";
import Carrito from "./componentes/Carrito";
import ListadoProductos from "./componentes/ListadoProductos";
import { useReducer } from "react";
import { estadoInicial, carritoReducer } from "./carritoReducer";
import { productos } from "./listado_productos";

function App() {
  const [carritoEstado, dispatch] = useReducer(carritoReducer, estadoInicial);
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <ListadoProductos listado={productos} dispatch={dispatch} />
        <Carrito detalle={carritoEstado} />
      </div>
      <BestSeller carrito={carritoEstado} />
    </>
  );
}

export default App;
