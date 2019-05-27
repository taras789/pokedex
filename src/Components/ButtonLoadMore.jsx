import React from 'react';
import { Button, Container } from 'react-bootstrap';

export default class ButtonLoadMore extends React.Component {
  render(){
    return(
      <Container fluid="true">
        <Button variant="primary" className="w-100 d-block pt-3 pb-3 btn-lg">Load More</Button>
      </Container>
    );
  };
};
