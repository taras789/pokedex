import React from 'react';
import PokemonCard from './Components/PokemonCard';
import PokemonDetails from './Components/PokemonDetails';
import axios from 'axios';

import { Container, Row, Col, Button } from 'react-bootstrap';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pokemons: [],
      pokemonsUrl: [],
      pokeComponent: [],
      showDetails: false,
      pokeDetails: [],
      limit: 6
    };
    this.getPokemonList = this.getPokemonList.bind(this);
  }

  getPokemonList(){
    this.setState({ limit: this.state.limit + 6 });
    const limit = this.state.limit;

    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
    .then(res => {
      const pokemons = res.data;

      this.setState({ pokemonsUrl: pokemons.results });
    });
  }

  moreDetails(pokemon){
    if(!this.state.showDetails){
      this.setState({ showDetails: true});
    }
    this.setState({ pokeDetails: pokemon });
  }

  componentWillMount(){
    this.getPokemonList();
  }

  render(){
    let details;
    if(this.state.showDetails){
      details = <PokemonDetails data={this.state.pokeDetails} />
    }
    // console.log(this.state.pokeDetails);
    return (
      <div className="App">
        <Container fluid>
          <Row>
            <Col xs sm="8" lg="9">
              <Container fluid>
                <Row>
                  {this.state.pokemonsUrl.map((pokemon, index) => {
                    return (
                      <PokemonCard data={pokemon} key={index} moreDetails={() => this.moreDetails(pokemon)}/>
                    );
                  }) }
                </Row>
              </Container>

              <Container fluid="true">
                <Button variant="primary" onClick={this.getPokemonList} className="w-100 d-block pt-3 pb-3 btn-lg">Load More</Button>
              </Container>
            </Col>

            <Col xs sm="4" lg="3">
              { details }
            </Col>
          </Row>
        </Container>
      </div>
    );
  };
}

export default App;
