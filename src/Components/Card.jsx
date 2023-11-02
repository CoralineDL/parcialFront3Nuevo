import React from 'react'

import '../Styles/Card.css'

const Card = ({nombre, serie}) =>{
    return(
        <div className='card'>
            <h2>Hola hola!</h2>
            <h3> Tu personaje favorito es: {nombre}</h3>
            <h3 > Y tu serie favorita es: {serie}</h3>
        </div>
    )
}
    


export default Card