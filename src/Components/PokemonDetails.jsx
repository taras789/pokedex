import React from 'react';
import { Card, Table } from 'react-bootstrap';
import axios from 'axios';

export default class PokemonDeatils extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      details: {}
    }
  }
  getDetails(){
    axios.get(`${this.props.data.url}`)
    .then(res => {
      const details = res.data;
      this.setState({ details });
    });
  }
  componentDidUpdate(prevProps){
    if(prevProps.data.name != this.props.data.name){
      this.getDetails();
    }
  }


  componentDidMount(){

  this.getDetails();
  }


  render(){
    let img_path = "";
    let p_types = [];
    let p_state = [];
    let p_moves = [];
    if( this.state.details.types ){
      p_types = this.state.details.types;
      img_path = this.state.details.sprites.front_default;
      p_state = this.state.details.stats;
      p_moves = this.state.details.moves;
    }

    return(
      <div className="vh-100 ">
        <Card className="p-1 d-flex mt-auto mb-auto w-100">
          <Card.Img variant="top" src={ img_path } />
          <Card.Body>
            <h3 className="text-center mb-4"></h3>
              <Table bordered>
                <tbody>
                  <tr>
                    <td className="text-center">Type</td>
                      <td className="text-center w-25">{ p_types.map( ( p_type ) => {
                          return ( `${p_type.type.name} ` )
                        }) }</td>
                  </tr>
                    { p_state.map( ( p_stat, index ) => {
                      return (
                        <tr key={index}>
                          <td className="text-center">{ p_stat.stat.name }</td>
                          <td className="text-center w-25">{ p_stat.base_stat }</td>
                        </tr>
                      )
                    }) }

                  <tr>
                    <td className="text-center">Total moves</td>
                    <td className="text-center w-25">{ p_moves.length }</td>
                  </tr>
                </tbody>
              </Table>
          </Card.Body>
        </Card>
      </div>
    );
  };
};
