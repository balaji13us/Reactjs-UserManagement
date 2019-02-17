import React, { Component } from 'react';

import Users from '../components/User/Users';
import Header from '../containers/Header';
import Navigation from '../containers/Navigation';
import { Route } from 'react-router-dom';
class Home extends Component {
  render() {
    return (
      <div >
        <div class="container">
          <div class="row">
            <div class="col-12"><Header /></div>
          </div>
          <div class="row">
          <div class="col-2"><Navigation /></div>

            <div class="col-10">
              <div class="jumbotron">
                <Route path="/" exact render={() => <h1>This is Home page</h1> } />
                <Route path="/user*"  component={Users} />
                
              </div>
            </div>
          </div>

        </div>

      </div>
    );
  }
}

export default Home;
