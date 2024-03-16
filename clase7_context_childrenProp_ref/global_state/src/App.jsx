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
import Layout from "./Layout";

function App() {
  const [carritoEstado, dispatch] = useImmerReducer(
    carritoReducer,
    estadoInicial
  );
  return (
    <>
      <CarritoContext.Provider value={carritoEstado}>
        <CarritoDispatchContext.Provider value={dispatch}>
          <Layout>
            <ListadoProductos listado={productos} />
            <Carrito />
          </Layout>
          <BestSeller />
        </CarritoDispatchContext.Provider>
      </CarritoContext.Provider>
    </>
  );
}

export default App;
