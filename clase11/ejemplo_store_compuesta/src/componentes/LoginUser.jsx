import { useState } from "react";
import { useContext } from "react";
import {
  UsuarioContext,
  UsuarioDispatchContext,
} from "../contextos/UsuarioContexto";

export default function LoginUser() {
  const user = useContext(UsuarioContext);
  const dispatch = useContext(UsuarioDispatchContext);
  const [usernameInputValue, setUsernameInputValue] = useState("");
  function handleLogout() {
    setUsernameInputValue("");
    dispatch({
      tipo: "logout",
      username: "",
    });
  }
  return (
    <div style={{ backgroundColor: "#FFECA1", padding: "1rem" }}>
      {!user.username && (
        <>
          <label htmlFor="username">Nombre de usuario</label>
          <input
            id="username"
            type="text"
            onChange={(e) => setUsernameInputValue(e.target.value)}
            value={usernameInputValue}
          />
          <button
            onClick={() =>
              dispatch({
                tipo: "login",
                username: usernameInputValue,
              })
            }
          >
            Ingresar
          </button>
        </>
      )}
      {user.username && (
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <h3>Bienvenido {user.username}</h3>
          <button onClick={handleLogout}>Salir</button>
        </div>
      )}
    </div>
  );
}
