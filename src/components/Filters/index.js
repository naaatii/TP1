import React from 'react'
import {Container} from './styled'
import Filter from '../Filter'

const Filters = props => {
    const {onFilterChange, anios} = props
    return (
        <Container>
            <Filter onFilterChange={onFilterChange} name="filter1" data={anios}/>
        </Container>
    )
}

export default Filters