// Funcion que demora 2 segundos
async function getData() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  // Create a function to delay the process
  await new Promise((resolve) => setTimeout(resolve, 2000)); // waits for 2 seconds

  throw new Error('Error cargando los pokemons')

  return res.json();
}

export default async function Page() {
  const data = await getData();
  console.log(data);
  return <h1>Productos works!</h1>;
}
