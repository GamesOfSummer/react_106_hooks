import React, { Component } from 'react';
import { MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import { Example } from './Example';
import { defaultDragon } from './types';
import DisplayDragonColor from './DisplayDragonColor';
import DisplayDragonName from './DisplayDragonName';

class App extends Component {
    render() {
        const dragon = defaultDragon();

        return (
            <div className="App">
                <MDBContainer fluid>
                    <MDBRow>
                        <MDBCol md="6">
                            <DisplayDragonColor dragon={dragon} />
                            <DisplayDragonName dragon={dragon} />
                        </MDBCol>
                        <MDBCol md="6">
                            <Example />
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        );
    }
}

export default App;
