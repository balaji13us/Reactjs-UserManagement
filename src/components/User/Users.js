import React, { Component } from 'react';
import ShowUsers from '../User/ShowUsers';
import ShowOneUser from '../User/ShowOneUser';

import { Route } from 'react-router-dom';

class Users extends Component {
  render() {
    return (
      <div >
        Users Page
        <Route path="/users" exact component={ShowUsers} />
        <Route path="/user/:id" exact component={ShowOneUser} />
        
      </div>
    );
  }
}

export default Users;
