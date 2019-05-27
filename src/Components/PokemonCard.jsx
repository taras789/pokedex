import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';


export default class PokemonShortDetails extends React.Component {

  render(){
    return(
      <Col sm="6" md="4">
        <Card className="p-1 pb-5 mt-3 mb-3">
          <Card.Img variant="top" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/4.png" />
          <Card.Body className="p-0">
            <Card.Title className="text-center">Pokemon</Card.Title>
            <Button variant="warning" className="m-1 inline-block btn-sm">Warning</Button>
            <Button variant="primary" className="m-1 inline-block btn-sm">Primary</Button>
            <ul>

            </ul>
          </Card.Body>
        </Card>
      </Col>
    );
  };
};
