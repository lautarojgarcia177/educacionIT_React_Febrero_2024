const cards = [
  {
    titulo: "Tarjeta1",
    descripcion: "Descripcion 1",
  },
  {
    titulo: "Tarjeta2",
    descripcion: "Descripcion 2",
  },
  {
    titulo: "Tarjeta3",
    descripcion: "Descripcion 3",
  },
  {
    titulo: "Tarjeta3",
    descripcion: "Descripcion 3",
  },
  {
    titulo: "Tarjeta3",
    descripcion: "Descripcion 3",
  },
  {
    titulo: "Tarjeta3",
    descripcion: "Descripcion 3",
  },
  {
    titulo: "Tarjeta3",
    descripcion: "Descripcion 3",
  },
  {
    titulo: "Tarjeta3",
    descripcion: "Descripcion 3",
  },
  {
    titulo: "Tarjeta3",
    descripcion: "Descripcion 3",
  },
  {
    titulo: "Tarjeta3",
    descripcion: "Descripcion 3",
  },
  {
    titulo: "Tarjeta3",
    descripcion: "Descripcion 3",
  },
  {
    titulo: "Tarjeta3",
    descripcion: "Descripcion 3",
  },
  {
    titulo: "Tarjeta3",
    descripcion: "Descripcion 3",
  },
  {
    titulo: "Tarjeta3",
    descripcion: "Descripcion 3",
  },
  {
    titulo: "Tarjeta3",
    descripcion: "Descripcion 3",
  },
  {
    titulo: "Tarjeta3",
    descripcion: "Descripcion 3",
  },
  {
    titulo: "Tarjeta3",
    descripcion: "Descripcion 3",
  },
  {
    titulo: "Tarjeta3",
    descripcion: "Descripcion 3",
  },
  {
    titulo: "Tarjeta3",
    descripcion: "Descripcion 3",
  },
  {
    titulo: "Tarjeta3",
    descripcion: "Descripcion 3",
  },
  {
    titulo: "Tarjeta3",
    descripcion: "Descripcion 3",
  },
  {
    titulo: "Tarjeta3",
    descripcion: "Descripcion 3",
  },
  {
    titulo: "Tarjeta3",
    descripcion: "Descripcion 3",
  },
  {
    titulo: "Tarjeta3",
    descripcion: "Descripcion 3",
  },
  {
    titulo: "Tarjeta3",
    descripcion: "Descripcion 3",
  },
  {
    titulo: "Tarjeta3",
    descripcion: "Descripcion 3",
  },
  {
    titulo: "Tarjeta3",
    descripcion: "Descripcion 3",
  },
  {
    titulo: "Tarjeta3",
    descripcion: "Descripcion 3",
  },
  {
    titulo: "Tarjeta3",
    descripcion: "Descripcion 3",
  },
  {
    titulo: "Tarjeta3",
    descripcion: "Descripcion 3",
  },
  {
    titulo: "Tarjeta3",
    descripcion: "Descripcion 3",
  },
];

function generarListado() {
    let res = "";
  for (let tarjeta of cards) {
    res += Tarjeta(tarjeta);
  }
  return res;
}

// Componente
function Tarjeta({ nombre, descripcion }) {
  return `
      <div class="card">
          <h3>${nombre}</h3>
          <p>${descripcion}</p>
      </div>
      `;
}

const app = document.querySelector("#app");
app.innerHTML = generarListado();
