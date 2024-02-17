import React from "react";
import "./contador.css";

// Componente statefull

// export default class Contador extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       valor: 0,
//     };

//     this.incrementar.bind(this);
//   }

//   incrementar() {
//     this.setState({
//         valor: this.state.valor + 1
//     })
//   }

//   render() {
//     return (
//       <div>
//         <h4>Valor: {this.state.valor}</h4>;
//         <button onClick={this.incrementar}>+</button>
//       </div>
//     );
//   }
// }

export default function Contador() {
  const [valor, setValor] = React.useState(0);
  return (
    <div>
      <span>Valor, cuidado no aumentarlo mucho: </span>
      <span
        style={{ padding: "1rem" }}
        // IIFE
        className={(() => {
          if (valor >= 20) return "danger";
          if (valor >= 10) return "warn";
          return "";
        })()}
      >
        {valor}
      </span>
      <button onClick={() => setValor(valor + 1)}>+</button>
      <button onClick={() => setValor(valor - 1)}>-</button>
    </div>
  );
}
