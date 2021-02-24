import React, {Component} from 'react';
import './estilo.css'
class ListaDeCategorias extends Component{
    constructor(){
        super()
    }

    _eventoHandleInput(e){
        console.log(e.key)
    }

    render(){
        return(
            <section className="lista-categorias">
            <ul className="lista-categorias_lista" >
                <li className="lista-categorias_item">Categorias</li>
                <li>Categorias</li>
                <li>Categorias</li>
                <li>Categorias</li>
            </ul>
            <input type="text" placeholder="adicionar categoria" onKeyUp={this._eventoHandleInput.bind(this)}/>
            </section>
        )
    }
}
export default ListaDeCategorias;