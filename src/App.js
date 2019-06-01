import React from 'react';
import PokemonCard from './Components/PokemonCard';
import PokemonDetails from './Components/PokemonDetails';
import ButtonLoadMore from './Components/ButtonLoadMore';

import { Container, Row, Col } from 'react-bootstrap';


class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Container fluid>
          <Row>
            <Col xs sm="8" lg="9">
              <Container fluid>
                <Row>
                  <PokemonCard />
                  <PokemonCard />
                  <PokemonCard />
                  <PokemonCard />
                </Row>
              </Container>

              <ButtonLoadMore />

            </Col>

            <Col xs sm="4" lg="3">
              <PokemonDetails />
            </Col>
          </Row>
        </Container>
      </div>
    );
  };
}

export default App;
