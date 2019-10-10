import React from 'react'

const Filter = props => {
    const {onFilterChange, name, data=[] } = props
    return(
        <select onChange = {onFilterChange}
        name= {name}
        className = 'select'
        >
            <option value="select">Todos</option>
            {data.map(item => <option value={item} key={item}>{item}</option>)} 
        </select>

        //Hago un map para que se recorra el array con los datos que quiero filtrar (Los AÑOS)
        //En las opciones del select van a aparecer los anios sin que se repitan
    )
}

export default Filter