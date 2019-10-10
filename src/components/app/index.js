import React from 'react';//ESTO TIENE QUE ESTAR SIEMPRE
import './index.css';
import {Container} from './styled'
import NavBar from '../NavBar'
import Header from '../Header'
import Grilla from '../Grilla'
import Filters from '../Filters'
import Footer from '../Footer'
import Loading from '../Loading'

class app extends React.Component {

  constructor(props){
    super(props)
    this.state = {
        peliculas:[],
        peliculasBkp: [],
        anios: [],
        loading: true,
        filters:{
          filter1:'select'
          //filter2:'select'
        }
      }
      this.handleFilterChange = this.handleFilterChange.bind(this) //los alcances de esta funcion van a poder entender el this de la funcion 
      this.handleFilter = this.handleFilter.bind(this) 
  }

  async componentDidMount(){//apenas se monta el componente, se ejecuta este metodo
    try {
      const response = await fetch ('https://peliculaseries-api-rest.herokuapp.com/peliculaseries')
      if (!response.ok) {
        throw Error (response.statusText);
      }
      const json = await response.json()
      //console.log(json);
      const years = json.map(({fechaEstreno}) => fechaEstreno)
            const yearsUnrepeated = Array.from(new Set(years))//unifica los valores que se repiten
            const yearsUnrepeatedOrdered = yearsUnrepeated.sort((a, b) => (a < b) ? 1 : -1).slice()
      this.setState({
        peliculas:json,
        peliculasBkp: json,
        anios: yearsUnrepeatedOrdered,
        loading:false //aca ya va en falso
      })
    } catch (error) {
      console.log("Error")
    }
  }

  handleFilter(payload){
    const {filter1} = payload
    const {peliculasBkp} = this.state
    const filteredPeliculas = peliculasBkp.filter(pelicula => {
        return pelicula.fechaEstreno === (filter1 !== 'select' ? filter1 : pelicula.fechaEstreno )
    })
    return filteredPeliculas
}


  handleFilterChange (event) {
    let payload = this.state.filters
    payload[event.target.name] = event.target.value
    const peliculasFiltered = this.handleFilter(payload)
    console.log(peliculasFiltered)
    this.setState({
      filters:payload,
      peliculas: peliculasFiltered
    })
    console.log(this.state.filters)
  }


  render(){
    return (
      <Container>
        <NavBar />
        <Header />
        <div className="inner">
          <Filters
          filters={this.state.filters}
          anios={this.state.anios}
          onFilterChange={this.handleFilterChange}/>
          {this.state.loading && <Loading />}
          {!this.state.loading && <Grilla peliculas={this.state.peliculas}/>}
        </div>
        <Footer />
      </Container>
    );
  }  
}

export default app;//hace q pueda ir a otro componente y exportarlo
