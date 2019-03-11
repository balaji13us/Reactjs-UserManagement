import React, { Component } from 'react';
import ShowUsers from '../User/ShowUsers';
import ShowOneUser from '../User/ShowOneUser';
import EditOneUser from '../User/EditOneUser';
import { Switch, Route } from 'react-router-dom';
import UIResponse from '../../components/generic/UIResponse'


class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: {
        showResult:false
        ,action: "USER DISPLAY"
        , code: "00"
        , message: "00"
        , status: ""
        , statusText: ""
      }
    };
  }

  render() {
    return (
      <div >
        <Switch>
        <Route path="/userAdd" exact component={EditOneUser}  />
        <Route path="/userEdit/:id" exact component={EditOneUser} />

        <Route path="/users" exact component={ShowUsers} />
        <Route path="/user/:id" exact component={ShowOneUser} result={this.state.result}/>
        </Switch>
      </div>
    );
  }
}

export default Users;
