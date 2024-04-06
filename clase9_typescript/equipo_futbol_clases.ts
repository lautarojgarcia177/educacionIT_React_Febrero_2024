/* 
Nuestro equipo de futbol esta compuesto de esta manera:
1 arquero titular, 1 arquero suplente
1 aguatero
1 tecnico
10 jugadores: 2 defensores, 2 puntas, 3 mediocampos, 3 delanteros
*/
// Vamos a definirlo de forma estatica con tipos utilizando clases typescript:

abstract class Persona {
  nombre: string;
  fecha_nacimiento: Date;
  lugar_de_origen: string;
  despedirse: Function;
  constructor(nombre: string, fecha_nacimiento: Date, lugar_de_origen: string) {
    this.nombre = nombre;
    this.fecha_nacimiento = fecha_nacimiento;
    this.lugar_de_origen = lugar_de_origen;
    this.despedirse = () => "Soy " + this.nombre + " y me despido, chau!";
  }
  saludar() {
    return "Hola, soy " + this.nombre + " y te deseo que tengas un gran dia!";
  }
}

class Arquero extends Persona {
  anios_experiencia: number;
  altura: number;
  constructor(
    nombre: string,
    fecha_nacimiento: Date,
    lugar_de_origen: string,
    anios_experiencia: number,
    altura: number
  ) {
    super(nombre, fecha_nacimiento, lugar_de_origen);
    this.anios_experiencia = anios_experiencia;
    this.altura = altura;
  }
  atajar() {
    // TODO
  }
}

const armani = new Arquero(
  "Franco Armani",
  new Date(1986, 9, 16),
  "Santa fe",
  17,
  189
);

armani.saludar();

interface Aguatero {
  persona: Persona;
  marca_de_agua: string;
}

interface Tecnico {
  persona: Persona;
  anios_de_experiencia: number;
  titulos_obtenidos: number;
}

enum posicion {
  defensor,
  punta,
  mediocampo,
  delantero,
}

type _posicion = "defensor" | "punta" | "mediocampo" | "delantero";

// Recomiendo usar enum en lugar de type, porque enum permite que haya intellisense

interface Jugador {
  persona: Persona;
  posicion: posicion;
  lesiones: number;
  goles: number;
  titulos_obtenidos: number;
}

interface Equipo {
  arqueros: Arquero[];
  aguatero: Aguatero;
  tecnico: Tecnico[];
  jugadores: Jugador[];
}

// Tarea: Completar el equipo utilizando clases
