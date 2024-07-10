
import { useState } from 'react'
import './App.css'

function App() {

  const[inputValue, setInputValue] = useState('')
  const[textAreaValue, setTextAreavalue] = useState('')

  const [tarefas, setTarefas] = useState([
    {
      id:1,
      title:"primeira tarefa",
      description:"Descrição da prmeira tarefa"
    },
    {
      id:2,
      title:"Segunda tarefa",
      description:"descrição da segunda tarefa"
    }
  
  ])

    function gerenciaNovaTarefa(event){

      event.preventDefault()


      setTarefas((tarefas) =>{
        const novaTarefa ={
          title: inputValue,
          description: textAreaValue
        }
        return[...tarefas,novaTarefa]
      })

      setInputValue('')
      setTextAreavalue('')
    }

    function removeTarefa(id){

      const novaTarefa = tarefas.filter((tarefa) => tarefa.id != id)
      setTarefas(novaTarefa)
    }

  return (
    <>
    <header>
      <h1>To do List</h1>
    </header>

    <main>
      <div>
        <form onSubmit={gerenciaNovaTarefa}>
          <div className='titulo'>
            <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} type="text" placeholder="Adicione um titulo a tarefa" className='text-titulo'/>
            <input value={textAreaValue} onChange={(e) =>setTextAreavalue(e.target.value)} type="text" placeholder="Adicione uma descrição a sua tarefa" className='text-description'/>
            <button type="submit">Adicionar Tarefa</button>
          </div>
        </form>
      </div>

      <div>
        <ul className='lista'>
          {tarefas?.map((tarefa,index) => (
            <li key={index}>
              <div className='close'>
              <input type="checkbox" id={tarefa.title} />
              <label htmlFor={tarefa.title}>{tarefa.title}</label>
              <box-icon name='x-circle' onClick={() => removeTarefa(tarefa.id)}></box-icon>
              </div>
              <p>{tarefa.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </main>
    </>
  )
}

export default App
