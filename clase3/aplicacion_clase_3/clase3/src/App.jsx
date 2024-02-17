import Mensaje from "./componentes/Mensaje";
import Contador from "./componentes/Contador";

export default function App() {
  return (
    <>
      <div>
        <h2>Componentes stateless</h2>
        <Mensaje mensaje="mensaje 1" />
        <Mensaje mensaje="mensaje 2" />
        <Mensaje mensaje="Este es el mensaje 3" />
        <Mensaje mensaje="Este es el mensaje 4" />
        <Mensaje mensaje="Este es el mensaje 5" />
      </div>
      <br />
      <div>
        <h2>Componentes statefull</h2>
        <Contador />
        <br />
        <br />
        <Contador />
      </div>
    </>
  );
}
