import React, { Component } from "react";
import './estilo.css'

class FormularioCadastro extends Component {
  constructor(props){
    super(props)
    this.title = "";
    this.text = "";
    this.categoria = "Sem Categoria"
  }

  _handleMudancaCategoria(e){
    e.stopPropagation()
    this.categoria = e.target.value;
  }

  _handleTitleChange(e){
    e.stopPropagation()
    this.title = e.target.value;

  }

  _handleTextChanges(e){
    e.stopPropagation()
    this.text = e.target.value;

  }

  _createCard(e){
    e.preventDefault();
    e.stopPropagation()
    console.log('criando', this.categoria)
    this.props.createNote(this.title, this.text, this.categoria)
  }


  render() {
    return (
      <form className="form-cadastro" 
      onSubmit={this._createCard.bind(this)}>
      <select onChange={this._handleMudancaCategoria.bind(this)} className="form-cadastro_input">
        <option>Sem categoria</option>
      {this.props.categorias.map((categoria, index) => {
        return <option key={index}>{categoria}</option>
      })}
      </select>
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
      <button type="submit" className="form-cadastro_input form-cadastro_submit">
        Criar Nota
      </button>
    </form>
    );
  }
}

export default FormularioCadastro;