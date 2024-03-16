import BestSeller from "./componentes/BestSeller";
import Carrito from "./componentes/Carrito";
import ListadoProductos from "./componentes/ListadoProductos";
import { estadoInicial, carritoReducer } from "./carritoReducer";
import { productos } from "./listado_productos";
import { useImmerReducer } from 'use-immer';

function App() {
  const [carritoEstado, dispatch] = useImmerReducer(carritoReducer, estadoInicial);
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <ListadoProductos listado={productos} dispatch={dispatch} />
        <Carrito detalle={carritoEstado} dispatch={dispatch} />
      </div>
      <BestSeller carrito={carritoEstado} />
    </>
  );
}

export default App;
