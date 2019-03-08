import React, { Component } from 'react';
import ShowUsers from '../User/ShowUsers';
import ShowOneUser from '../User/ShowOneUser';
import EditOneUser from '../User/EditOneUser';
import { Switch } from 'react-router-dom';


import { Route } from 'react-router-dom';

class Users extends Component {
  render() {
    return (
      <div >
        <Switch>
        <Route path="/userAdd" exact component={EditOneUser} />

        <Route path="/users" exact component={ShowUsers} />
        <Route path="/user/:id" exact component={ShowOneUser} />
        </Switch>
      </div>
    );
  }
}

export default Users;
