import Tarjeta from "./Tarjeta";

const cards = [
  {
    titulo: "Tarjeta1",
    descripcion: "Descripcion 1",
    id: 1,
  },
  {
    titulo: "Tarjeta2",
    descripcion: "Descripcion 2",
    id: 2,
  },
  {
    titulo: "Tarjeta3",
    descripcion: "Descripcion 3",
    id: 3,
  },
];

function App() {
  return (
    <>
      {cards.map((card) => (
        <Tarjeta
          titulo={card.titulo}
          descripcion={card.descripcion}
          key={card.id}
        />
      ))}
    </>
  );
}

export default App;
