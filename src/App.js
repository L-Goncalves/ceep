import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas/ListaDeNotas";
import  FormularioCadastro  from "./components/FormularioCadastro/FormularioCadastro";
import "./assets/App.css";
import './assets/index.css';
class App extends Component {

  constructor(){
    super()
    this.notas = []
    this.state = {
      notas:[]
    }
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
      <section>
        <FormularioCadastro createNote={this.createNote.bind(this)}/>
        <ListaDeNotas notas={this.state.notas}/>
      </section>
    );
  }
}

export default App;