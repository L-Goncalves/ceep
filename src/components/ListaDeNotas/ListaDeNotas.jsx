import React, { Component } from "react";
import CardNota from "../CardNota/CardNota";
import './estilo.css'

class ListaDeNotas extends Component {
  constructor(props){
    super(props)


  }


  render() {
    return (
      <ul  className="lista-notas">
        {this.props.notas.map((nota, index) => {
          return (
            <li className="lista-notas_item" key={index}>
              
              <CardNota indice={index} apagarNota={this.props.apagarNota} title={nota.title} text={nota.text} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;