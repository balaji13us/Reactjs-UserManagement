import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CONSTANT from '../../constants/env'
import UIResponse from '../../components/generic/UIResponse'

class ShowOneUser extends Component {


  constructor(props) {
    super(props);
    this.state = {
      user: []
    };
  }

  deleteUserHandler = () => {

    axios.delete(CONSTANT.LOCAL_JSON_SERVER_USER + this.state.user.id)
      .then(res => {
        this.setState({ user: res.data });
        console.log(res);
        this.updateResponse(res);
        this.props.history.replace('/users/');
      }).catch(err => {
        console.log(err);
        this.updateResponse(err);
      });

  }

  componentDidMount() {
    console.log(this.props);
    console.log(this.props.match.params.id);
    if (this.props.match.params.id) {
      axios.get(CONSTANT.LOCAL_JSON_SERVER_USER + this.props.match.params.id)
        .then(res => {
          this.setState({ user: res.data });
          console.log(this.state.user);
        });
    }

  }

  updateResponse = (response) => {
    var code, message;
    switch (response.status) {
      case 200:
        code = 'Success';
        message = 'Successfully Updated';
        break;
      case 201:
        code = 'Success';
        message = 'Successfully Created';
        break;

      default:
        code = 'Unknown Error';
        message = 'Update Failed';
    }

    this.setState({
      result: {
        code: code
        , message: message
        , status: response.status
        , statusMessage: response.statusMessage
      }
    });
  }

  render() {
    return (
      <div >
        <div>
          <UIResponse result={this.state.result}></UIResponse>
        </div>
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
        <Link to="/users">
          <button type="button" className="btn btn-primary">back</button>
        </Link>
        <Link to={"/userEdit/" + this.state.user.id}>
          <button type="button" className="btn btn-primary">edit</button>
        </Link>
        <button type="button" className="btn btn-primary" onClick={this.deleteUserHandler}>delete</button>
      </div>
    );
  }
}

export default ShowOneUser;
