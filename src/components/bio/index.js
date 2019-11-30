import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Temp = (props) => {
  return (
    <div>
      <Jumbotron className="bg-transparent">
        <Container fluid>
          <h1 className="display-3">Fluid jumbotron</h1>
          <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Temp;