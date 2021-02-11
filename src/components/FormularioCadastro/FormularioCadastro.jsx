import React, { Component } from "react";
import './estilo.css'

class FormularioCadastro extends Component {
  constructor(props){
    super(props)
    this.title = "";
    this.text = "";
  }


  _handleTitleChange(e){
    e.stopPropagation()
    this.title = e.target.value;
    console.log(this.title)
  }

  _handleTextChanges(e){
    e.stopPropagation()
    this.text = e.target.value;

  }

  _createCard(e){
    e.preventDefault();
    e.stopPropagation()
    this.props.createNote(this.title, this.text)
  }


  render() {
    return (
      <form className="form-cadastro" 
      onSubmit={this._createCard.bind(this)}>
      <input
        type="text"
        placeholder="Título"
        className="form-cadastro_input"
        onChange={this._handleTitleChange.bind(this)}
      />
      <textarea
        rows={15}
        placeholder="Escreva sua nota..."
        className="form-cadastro_input"
        onChange={this._handleTextChanges.bind(this)}
        
      />
      <button className="form-cadastro_input form-cadastro_submit">
        Criar Nota
      </button>
    </form>
    );
  }
}

export default FormularioCadastro;