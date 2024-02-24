let contador = 0;
// Funcion impura porque tiene efectos secundarios
function aumentar() {
  contador++;
}
// Funcion pura porque no tiene efectos secundarios
function contar() {
  let c = 0;
  setInterval(() => {
    console.log(c);
    c++;
  });
}
