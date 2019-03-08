import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CONSTANT from '../../constants/env' 

class ShowOneUser extends Component {


  constructor(props) {
    super(props);
    this.state = {
      user: []
    };
  }


  componentDidMount() {
    console.log(this.props);
    console.log(this.props.match.params.id);
    axios.get(CONSTANT.LOCAL_JSON_SERVER_USER + this.props.match.params.id)
      .then(res => {
        this.setState({ user: res.data });
        console.log(this.state.user);
      });
  }

  render() {
    return (
      <div >
        <table className="table table-striped" >

          <tbody>
            <tr >
              <th>First Name </th>
              <td>{this.state.user.firstName}</td>
            </tr>
            <tr >
              <th>Last Name </th>
              <td>{this.state.user.lastName}</td>
            </tr>


          </tbody>
        </table>
        <Link to="/users"><button type="button" className="btn btn-primary">back</button> </Link>
      </div>
    );
  }
}

export default ShowOneUser;
