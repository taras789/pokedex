import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import axios from 'axios';


export default class PokemonCard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: [],
      image: [],
      power: [],
      pokeType: []
    }
  }
  componentDidMount(){
    axios.get(`${this.props.data.url}`)
    .then(res => {
      const name = res.data.name;
      const image = res.data.sprites.front_default;
      const pokeType = res.data.types.map((types) => types.type['name']);
      this.setState({ name });
      this.setState({ image});
      this.setState({ pokeType });
    });
  }
  render(){

    return(
      <Col sm="6" md="4">
        <Card className="p-1 pb-5 mt-3 mb-3">
          <Card.Img variant="top" onClick={this.props.moreDetails} src={this.state.image} />
          <Card.Body className="p-0">
            <Card.Title className="text-center">{ this.state.name ? this.state.name : this.state.name } </Card.Title>
            { this.state.pokeType.map((type, index) => {
                return(
                  <button className={`m-1 inline-block btn-sm poke-type ${type}`} key={index}>{type}</button>
                );
              })
            }
          </Card.Body>
        </Card>
      </Col>
    );
  };
};
