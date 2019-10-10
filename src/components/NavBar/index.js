import React from 'react'
import {Container} from './styled'

import logo from '../../assets/boton-rojo.png'

const NavBar = () => {
    return(
        <Container>
            <img src={logo}/>
            <p>Menu</p>
        </Container>
    )
}

export default NavBar