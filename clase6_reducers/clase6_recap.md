# Manejo de estado global!!!

## Reducer

Un reducer es una funcion que consolida toda la logica de actualizacion del estado.
La idea es actualizar el estado en reducers en lugar de hacerlo en componentes.

Un componente, idealmente solamente deberia encargarse de renderizar, escuchar y emitir eventos.

Por convencion la logica de un reducer se escribe con un switch que ejecuta segun el tipo de accion que le llego.

Un reducer NUNCA modifica el estado directamente, sino que retorna un objeto nuevo que sera el nuevo estado.

El nombre viene de la funcion "reduce" de los arrays.

### Acciones

Los componentes despachan (Dispatch) una accion por cada evento que modifique el estado,
Las acciones son objetos, que contienen el tipo de accion y los datos necesarios para la manipulacion del estado.
Al llamar a la funcion dispatch, le pasamos el objeto de la accion.




