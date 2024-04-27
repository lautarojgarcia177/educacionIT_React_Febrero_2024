export const estadoInicialUsuario = {
  username: "",
};

function login(borrador, accion) {
  borrador.username = accion.username;
  return borrador;
}

function logout(borrador, accion) {
  borrador.username = "";
  return borrador;
}

export function usuarioReducer(borrador, accion) {
  console.log("se despacho una accion de user: " + accion.tipo);
  switch (accion.tipo) {
    case "login": {
      return login(borrador, accion);
    }
    case "logout": {
      return logout(borrador, accion);
    }
    default: {
      throw Error("Accion desconocida: " + accion.tipo);
    }
  }
}
