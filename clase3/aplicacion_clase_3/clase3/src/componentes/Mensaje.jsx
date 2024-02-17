import React from "react";
import "./mensaje.css";

// Componente stateless
export default class Mensaje extends React.Component {
  constructor(props) {
    super(props);
  }

  // conditional Rendering
  mensajeAMostrar() {
    if (this.props.mensaje.length < 10) {
      return this.props.mensaje;
    }
    return "Mensaje muy largo";
    // Operador ternario
    // return this.props.mensaje.length < 10
    //   ? this.props.mensaje
    //   : "Mensaje muy largo";
  }

  render() {
    return (
      <p>
        {this.mensajeAMostrar()}
        {/* conditional rendering */}
        {this.props.mensaje.length > 10 && "..."}
      </p>
    );
  }
}
