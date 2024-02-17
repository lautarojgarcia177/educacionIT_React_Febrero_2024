import React from "react";
import './mensaje.css'

// Componente stateless
export default class Mensaje extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <p>{this.props.mensaje}</p>;
  }
}
