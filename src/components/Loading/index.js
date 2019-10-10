import React from 'react'
import {Container} from './styled'
import loading from '../../assets/loading.gif'

const Loading = () => {
    return(
        <Container>
            
            <img src={loading}/>
            
        </Container>
    )
}

export default Loading