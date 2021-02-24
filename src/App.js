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
      notas:[]
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

  createNote(title, text){
    const newNote = {title, text};
    const newArrayNotes = [...this.state.notas, newNote]
    const newState = {
      notas: newArrayNotes
    }

    this.setState(newState)
  
   
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro createNote={this.createNote.bind(this)}/>
        <main className="conteudo-principal">
          <ListaDeCategorias/>
        <ListaDeNotas 
          apagarNota={this.apagarNota.bind(this)}
          notas={this.state.notas}/>
        </main>
        

      </section>
    );
  }
}

export default App;