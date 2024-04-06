/* 
Nuestro equipo de futbol esta compuesto de esta manera:
1 arquero titular, 1 arquero suplente
1 aguatero
1 tecnico
10 jugadores: 2 defensores, 2 puntas, 3 mediocampos, 3 delanteros
*/
// Vamos a definirlo de forma estatica con tipos utilizando interfaces typescript:

interface Persona {
  nombre: string;
  fecha_nacimiento: Date;
  lugar_de_origen: string;
}

interface Arquero {
  persona: Persona;
  anios_experiencia: number;
  altura: number;
}

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

const ronaldo: Jugador = {
  persona: {
    nombre: "Ronaldo",
    fecha_nacimiento: new Date(),
    lugar_de_origen: "Brazil",
  },
  goles: 298,
  lesiones: 0,
  posicion: posicion.delantero,
  titulos_obtenidos: 20,
};

// Tarea: Completar el equipo de futbol
