import React from 'react';

import {
  Container,
  Image
} from 'react-bootstrap';

const App = () => (
  <>
    <Container>
      <div className="d-flex justify-content-center">
        <Image id="center-image" src={require('./favicon.png').default}/>
      </div>
      <h2 className="quote">"Diversification is the only free lunch."</h2>
      <h3 className="quote">- Harry Markowitz</h3>
    </Container>
  </>
);

export default App;
