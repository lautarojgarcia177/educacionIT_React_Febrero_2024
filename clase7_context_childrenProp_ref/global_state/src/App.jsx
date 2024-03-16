import BestSeller from "./componentes/BestSeller";
import Carrito from "./componentes/Carrito";
import ListadoProductos from "./componentes/ListadoProductos";
import { estadoInicial, carritoReducer } from "./carritoReducer";
import { productos } from "./listado_productos";
import { useImmerReducer } from "use-immer";
import {
  CarritoContext,
  CarritoDispatchContext,
} from "./contextos/CarritoContexto";

function App() {
  const [carritoEstado, dispatch] = useImmerReducer(
    carritoReducer,
    estadoInicial
  );
  return (
    <>
      <CarritoContext.Provider value={carritoEstado}>
        <CarritoDispatchContext.Provider value={dispatch}>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <ListadoProductos listado={productos} />
            <Carrito />
          </div>
          <BestSeller />
        </CarritoDispatchContext.Provider>
      </CarritoContext.Provider>
    </>
  );
}

export default App;
