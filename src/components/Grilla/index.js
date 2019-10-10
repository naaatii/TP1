import React from 'react'
import {Container} from './styled'
import Card from '../Card';
const Grilla = ({peliculas}) => {
   return(
       <Container>
           {peliculas.map(pelicula => <Card pelicula={pelicula} key={pelicula._id} />)}
       </Container>
   )
}
export default Grilla