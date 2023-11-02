import { useState } from 'react'
import './App.css'
import './App.css'
import Card from './Components/Card';
import './Styles/Card.css'


function App() {
  const [personajeFavorito, setPersonaje] = useState({
    nombre: '',
    serie: ''
  });
  const [show, setShow] = useState(false)
  const [error, setError] = useState (false)

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(personajeFavorito.nombre.length > 3 && personajeFavorito.serie.length > 5){
      setShow(true)
      setError(false)
    } else {
      setError(true)
    }
  }
  console.log(personajeFavorito);
  return (    
    <div className='App'>
      <h1>Cuentanos tu personaje y serie favorita</h1>
      {!show &&
        <form onSubmit={handleSubmit} className='form' >
          <label>Nombre de tu personaje favorito:  </label>
          <input type="text" value={personajeFavorito.nombre} onChange={(e)=> setPersonaje({...personajeFavorito, nombre: e.target.value.trimStart()})} /> <br></br>
          <label>Serie que más amas del mundo mundial:  </label>
          <input type="text" value={personajeFavorito.serie} onChange={(e)=> setPersonaje({...personajeFavorito, serie: e.target.value.trimStart()})} /> <br></br>          
          <button>Enviar</button>
        </form>
      }
      { show ?
        <Card nombre={personajeFavorito.nombre}  serie={personajeFavorito.serie} />
        :
            null
      }
      {error && <h5 style={{color:'red'}}>  “Por favor chequea que la información sea correcta”</h5>}
  
    </div>
    
  )
 
}

export default App

