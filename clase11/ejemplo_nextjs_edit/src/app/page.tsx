import Image from "next/image";
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      {/* <a href="/productos">Ir a productos</a> */}
      {/* Utilizar Link en lugar de anchor tag para navegar dentro de la propia aplicacion */}
      <Link href="/pokemons">Ir a productos</Link>
    </main>
  );
}
