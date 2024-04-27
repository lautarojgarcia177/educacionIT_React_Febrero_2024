import BestSeller from "./componentes/BestSeller";
import Carrito from "./componentes/Carrito";
import ListadoProductos from "./componentes/ListadoProductos";
import LoginUser from "./componentes/LoginUser";
import { productos } from "./listado_productos";
import {
  CarritoContext,
  CarritoDispatchContext,
} from "./contextos/CarritoContexto";
import {
  UsuarioContext,
  UsuarioDispatchContext,
} from "./contextos/UsuarioContexto";
import Layout from "./Layout";
import useEstadoGlobal from "./useEstadoGlobal";

function App() {
  const estadoGlobal = useEstadoGlobal();

  return (
    <>
      <UsuarioContext.Provider value={estadoGlobal.userEstado}>
        <UsuarioDispatchContext.Provider
          value={estadoGlobal.dispatchAccionUser}
        >
          <LoginUser />
          <CarritoContext.Provider value={estadoGlobal.carritoEstado}>
            <CarritoDispatchContext.Provider
              value={estadoGlobal.dispatchAccionCarrito}
            >
              <Layout>
                <ListadoProductos listado={productos} />
                <Carrito />
              </Layout>
              <BestSeller />
            </CarritoDispatchContext.Provider>
          </CarritoContext.Provider>
        </UsuarioDispatchContext.Provider>
      </UsuarioContext.Provider>
    </>
  );
}

export default App;
