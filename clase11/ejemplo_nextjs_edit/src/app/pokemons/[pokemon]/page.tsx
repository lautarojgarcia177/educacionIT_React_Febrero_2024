async function getData(pokemonName: string) {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonName);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Page({ params }) {
  const pokemonData = await getData(params.pokemon);
  console.log(pokemonData)
  return <div>
    <h1>Pokemon: {params.pokemon}</h1>
    <img src={pokemonData.sprites.front_default} alt="" />
  </div>;
}
