import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas/ListaDeNotas";
import  FormularioCadastro  from "./components/FormularioCadastro/FormularioCadastro";
import "./assets/App.css";
import './assets/index.css';
import ListaDeCategorias from "./components/ListaDeCategorias";
class App extends Component {

  constructor(){
    super()
    this.notas = []
    this.state = {
      notas:[],
      categorias: []
    }
  }

  apagarNota(index){
    let arraydeNotas = this.state.notas;
    arraydeNotas.splice(index,1)

    this.setState({
      notas: arraydeNotas
    })
    console.log('log')
  }

  createNote(title, text, categoria){

    const newNote = {title, text, categoria};
    const newArrayNotes = [...this.state.notas, newNote]
    const newState = {
      notas: newArrayNotes
    }

    this.setState(newState)
  
   
  }

  adicionarCategoria(nomeCategoria){
    const novoArrayCategorias = [...this.state.categorias, nomeCategoria]
    const novoEstado = {...this.state, categorias:novoArrayCategorias};
    this.setState(novoEstado);
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro categorias={this.state.categorias} createNote={this.createNote.bind(this)}/>
        <main className="conteudo-principal">
         
        <ListaDeCategorias
        adicionarCategoria={this.adicionarCategoria.bind(this)}
        categorias={this.state.categorias}/>
        <ListaDeNotas 
          apagarNota={this.apagarNota.bind(this)}
          notas={this.state.notas}/>
        </main>
        

      </section>
    );
  }
}

export default App;