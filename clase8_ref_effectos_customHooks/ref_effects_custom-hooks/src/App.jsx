import { useState, useRef, useEffect, forwardRef } from "react";
import { useOnline } from "./custom-hooks/useOnline";
import "./App.css";

function App() {
  const [estaLogueado, setEstaLogueado] = useState(false);
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [clave, setClave] = useState("");

  const buttonRef = useRef(null);
  const usersRef = useRef(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://642490527ac292e3cfed62a1.mockapi.io/users", {})
      .then((r) =>
        r.json().then((users) => {
          // setTimeout(() => {
          usersRef.current = users;
          console.log(users);
          // }, 4000);
        })
      )
      .catch((err) => {
        console.error("Solicitud http cancelada");
      });
    return function cleanUp() {
      controller.abort();
    };
  }, []);

  useEffect(() => {
    setTimeout(function () {
      if (estaLogueado) {
        setEstaLogueado(false);
      }
    }, 10000);
  }, [estaLogueado]);

  function handleSubmit(e) {
    e.preventDefault();
    const existeElUsuario = usersRef.current.find(
      (user) => user.name === nombreUsuario && user.password === clave
    );
    if (existeElUsuario) {
      setEstaLogueado(true);
    }
  }

  return (
    <>
      <EstatusConexion />
      <h1>El usuario {!estaLogueado && "no"} ha ingresado</h1>
      <form onSubmit={handleSubmit}>
        {!estaLogueado && (
          <Form setNombreUsuario={setNombreUsuario} setClave={setClave} />
        )}
        <LoginButton ref={buttonRef}>
          {estaLogueado ? "Salir" : "Ingresar"}
        </LoginButton>
      </form>
    </>
  );
}

function EstatusConexion() {
  // Custom hook
  const estaOnline = useOnline();
  return (
    <div style={{ position: "absolute", top: "0" }}>
      {estaOnline
        ? "Hay conexion con internet ✅"
        : "No hay conexion con internet ❌"}
    </div>
  );
}

function Form(props, ref) {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <>
      <div>
        <label htmlFor="usuario">Nombre de usuario </label>
        <input
          type="text"
          ref={inputRef}
          id="usuario"
          name="usuario"
          onChange={(e) => props.setNombreUsuario(e.target.value)}></input>
      </div>

      <div>
        <label htmlFor="clave">Contraseña </label>
        <input
          type="password"
          id="clave"
          name="clave"
          onChange={(e) => props.setClave(e.target.value)}></input>
      </div>
    </>
  );
}

const LoginButton = forwardRef(function LoginButton({ children }, ref) {
  return (
    <button
      type="submit"
      ref={ref}
      onFocus={() => console.log("Se ha realizado foco sobre el boton!")}>
      {children}
    </button>
  );
});

export default App;
