import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CONSTANT from '../../constants/env' 

class ShowUsers extends Component {


  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    axios.get(CONSTANT.LOCAL_JSON_SERVER_USER)
      .then(res => {
        this.setState({ users: res.data });
        console.log(this.state.users);
      });
  }

  render() {
    return (
      <div >
         <h3>Users Page</h3>
         <div align="right">
         <Link to="/userAdd">  <button type="button" className="btn btn-primary">Add</button></Link>
         </div>
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
        
      </div>
    );
  }
}

export default ShowUsers;
