import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={"Componente1"}>Componente1</Link>
          </li>
          <li>
            <Link to={"Componente2"}>Componente2</Link>
          </li>
        </ul>
      </nav>
      <div>
        <Outlet />
      </div>
    </>
  );
}
