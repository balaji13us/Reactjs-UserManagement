import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
class ShowUsers extends Component {


  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    axios.get('https://my-json-server.typicode.com/balaji13us/MOCK-JSON-REPO/users')
      .then(res => {
        this.setState({ users: res.data });
        console.log(this.state.users);
      });
  }

  render() {
    return (
      <div >
        <table  className="table table-striped" >
        <thead>
          <tr>
            <th>S.No </th>
            <th>First Name </th>
            <th>Last Name </th>
          </tr>
        </thead>
        <tbody>
          {
          this.state.users.map((user, index) => {
            return (
              <tr key= {user.id}> 
                <td>{index+1}</td> 
                <td><Link to={"/user/" + user.id}>{user.firstName}</Link></td>
                <td><Link to={"/user/" + user.id}>{user.lastName}</Link></td>
            </tr>
            )
          }
          )
          }
        </tbody>
        </table>
        <button type="button" class="btn btn-primary">Primary</button>
      </div>
    );
  }
}

export default ShowUsers;
