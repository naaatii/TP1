import React from 'react'
import {Container} from './styled'

//import fotoDali from '../../assets/dalicabeza.jpg'
//<img src={} /> PONER EN LINEA 10 , EN CONTAINER

const Card = ({pelicula}) => {
    
    const {actores, cover, fechaEstreno, sinopsis, titulo, trailer} = pelicula
    return(
        <Container>
            <img src={cover} alt={titulo}/>
            <div className="info">
                <h2>{titulo}</h2>
                <h3>{fechaEstreno}</h3>
                <p>{sinopsis.substring(0,120)}</p>
            </div>
        </Container>
    )
}

export default Card