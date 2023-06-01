import React, { useState } from "react";
import './TodoList.css';
import Icone from './assets/icon.webp';

function TodoList() {
  
  const [lista, setLista] = useState([]);
  const [novoItem, setNovoItem] = useState("");
  
  function adicionaItem(form){
    form.preventDefault();
    if(!novoItem){
        return
    }
    setLista([...lista,{text: novoItem, isCompleted: false}])
    setNovoItem("")
    document.getElementById('input-entrada').focus();
  }
  
  function clicou(index){
    const listAux = [...lista];
    listAux[index].isCompleted = !listAux[index].isCompleted;
    setLista(listAux)
  }

  function deleta(index){
    const listAux = [...lista];
    listAux.splice(index,1);
    setLista(listAux);
  }

    return (
        <div>
            <h1>Lista de Tarefas</h1>
            <form onSubmit={adicionaItem}>
                <input 
                id="input-entrada"
                    type="text"
                    value={novoItem}
                    onChange={(e)=>{setNovoItem(e.target.value)}}
                    placeholder="Adicione uma tarefa"
                />
                <button className="add" type="submit">Add</button>
            </form>
            <div className="listaTarefas">
                <div style={{textAlign:'center'}}>
                {
                    lista.length <1
                    ?
                    <img className="icone-central" src={Icone} />
                    :
                    lista.map((item, index)=>(
                        <div 
                            key={index}
                            className={item.isCompleted ? "item completo" : "item"}
                        >
                            <span onClick={()=>{clicou(index)}}>{item.text}</span>
                            <button onClick={()=>{deleta(index)}} className="del">Deletar</button>
                        </div>

                    ))
                }
                {
                    lista.length > 0 && 
                <button className="deleteAll">Deletar Todas</button>
                }
            </div>
            </div>
        </div>
    )
}

export default TodoList