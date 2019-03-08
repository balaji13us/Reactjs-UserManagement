import React, { Component } from 'react';

import Users from '../components/User/Users';
import Header from '../containers/Header';
import Navigation from '../containers/Navigation';
import { Route } from 'react-router-dom';
class Home extends Component {
  render() {
    return (
      <div >
        <div className="container">
          <div className="row">
            <div className="col-12"><Header /></div>
          </div>
          <div className="row">
          <div className="col-2"><Navigation /></div>

            <div className="col-10">
              <div className="jumbotron">
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
