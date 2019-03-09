import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Users from '../components/User/Users';
import Jumbotron from 'react-bootstrap/Jumbotron';
class MainPanel extends Component {
  render() {
    return (
      <div >
        <Jumbotron>
          <Route path="/" exact render={() => <h1>This is Home page</h1>} />
          <Route path="/user*" component={Users} />
        </Jumbotron>
      </div>
    );
  }
}

export default MainPanel;
