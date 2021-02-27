import React, { Component } from "react";
import CardNota from "../CardNota/CardNota";
import './estilo.css'

class ListaDeNotas extends Component {
  constructor(props){
    super(props)

    this.state = {
      notas: []
    }

    this._novasNotas = this._novasNotas.bind(this)
  }
  componentDidMount(){
    this.props.notas.inscrever(this._novasNotas)
  }

  componentWillUnmount(){
    this.props.notas.desinscrever(this._novasNotas)
  }

  _novasNotas(notas){
    this.setState({...this.state, notas}, console.log(this.state))
}

  render() {
    return (
      <ul  className="lista-notas">
        {this.state.notas.map((nota, index) => {
          return (
            <li className="lista-notas_item" key={index}>
              
              <CardNota categoria={nota.categoria} indice={index} apagarNota={this.props.apagarNota} title={nota.titulo} text={nota.texto} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;