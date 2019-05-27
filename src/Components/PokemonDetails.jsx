import React from 'react';
import { Card, Table } from 'react-bootstrap';

export default class PokemonDeatils extends React.Component {
  

  render(){
    return(
      <div className="vh-100 p-fixed d-flex">
        <Card className="p-1 d-flex mt-auto mb-auto w-100">
          <Card.Img variant="top" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/4.png" />
          <Card.Body>
            <h3 className="text-center mb-4">Pokemon</h3>
              <Table bordered>
                <tbody>
                  <tr>
                    <td className="text-center">Type</td>
                    <td className="text-center w-25">Fire</td>
                  </tr>
                </tbody>
              </Table>
          </Card.Body>
        </Card>
      </div>
    );
  };
};
