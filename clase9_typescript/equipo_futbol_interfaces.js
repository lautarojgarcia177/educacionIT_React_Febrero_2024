/*
Nuestro equipo de futbol esta compuesto de esta manera:
1 arquero titular, 1 arquero suplente
1 aguatero
1 tecnico
10 jugadores: 2 defensores, 2 puntas, 3 mediocampos, 3 delanteros
*/
// Vamos a definirlo de forma estatica con tipos utilizando interfaces typescript:
var posicion;
(function (posicion) {
    posicion[posicion["defensor"] = 0] = "defensor";
    posicion[posicion["punta"] = 1] = "punta";
    posicion[posicion["mediocampo"] = 2] = "mediocampo";
    posicion[posicion["delantero"] = 3] = "delantero";
})(posicion || (posicion = {}));
var ronaldo = {
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
console.log(ronaldo);
// Tarea: Completar el equipo de futbol
