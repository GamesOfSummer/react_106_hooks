import React, { Component } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBNavbar, MDBNavbarBrand } from "mdbreact";
import RestaurantList from './RestaurantList';
import { Example } from './Example';
import { restaurant, defaultResturant } from './types';

export interface AppProps { restaurants: [restaurant]; }
export interface AppState { restaurants: [restaurant]; }

class App extends Component<AppProps, AppState> {

  render() {
    return (
      <div className="App">
        <MDBContainer fluid>
          <MDBRow>
            <MDBCol md="1">
            </MDBCol>
            <MDBCol md="10">
              <Example />
            </MDBCol>
            <MDBCol md="1"></MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default App;
