export default function Lista({ listaEstatica, listaDinamica }) {
  const listadoEstaticoARenderizar = (
    <ul>
      <li>{listaEstatica[0].nombre}</li>
      <li>{listaEstatica[1].nombre}</li>
      <li>{listaEstatica[2].nombre}</li>
    </ul>
  );

  const listadoDinamicoARenderizar = (
    <ul>
      {listaDinamica.map((item) => (
        <li key={item.id}>{item.nombre}</li>
      ))}
    </ul>
  );
  return (
    <>
      <h3>Definicion Estatica</h3>
      {listadoEstaticoARenderizar}
      <h3>Definicion Dinamica</h3>
      {listadoDinamicoARenderizar}
    </>
  );
}
