import React, { Component } from "react";
import './estilo.css'
import {ReactComponent as DeleteSvg} from '../../assets/delete.svg'
class CardNota extends Component {

  constructor(){
    super()

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    const indice = this.props.indice
    this.props.apagarNota(indice)
  }



  render(props) {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.title}</h3>
          <DeleteSvg onClick={this.handleClick}/>
          <h4>{this.props.categoria}</h4>
        </header>
        <p className="card-nota_texto">{this.props.text}</p>
      </section>
    );
  }
}

export default CardNota;