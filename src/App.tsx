import React from 'react';
import { MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import Example from './Example';
import { defaultDragon } from './types';
import DisplayDragonAge from './component/DisplayDragonAge';
// import DisplayDragonName from './DisplayDragonName';

const App = () => {
  const dragon = defaultDragon();

  return (
    <div className="App">
      <MDBContainer fluid>
        <MDBRow>
          <MDBCol md="6">
            <DisplayDragonAge ageVar={dragon.age} />
            <DisplayDragonAge ageVar={dragon.age + 15000} />
          </MDBCol>
          <MDBCol md="6">
            <Example />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default App;
