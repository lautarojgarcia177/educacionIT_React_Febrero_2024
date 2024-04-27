import { estadoInicialCarrito, carritoReducer } from "./carritoReducer";
import { estadoInicialUsuario, usuarioReducer } from "./usuarioReducer";
import { useImmerReducer } from "use-immer";

export default function useEstadoGlobal() {
  const [carritoEstado, dispatchAccionCarrito] = useImmerReducer(
    carritoReducer,
    estadoInicialCarrito
  );
  const [userEstado, dispatchAccionUser] = useImmerReducer(
    usuarioReducer,
    estadoInicialUsuario
  );
  return {
    carritoEstado,
    dispatchAccionCarrito,
    userEstado,
    dispatchAccionUser,
  };
}
