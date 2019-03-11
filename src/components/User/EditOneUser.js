import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CONSTANT from '../../constants/apiDetails' 
import UIResponse from '../../components/generic/UIResponse'
class EditOneUser extends Component {


  constructor(props) {
    super(props);
    this.state = {
      user: [],
      result: {
        showResult:false
        , action: "USER DISPLAY"
        , code: ""
        , message: ""
        , status: ""
        , statusText: ""
      }
    };
  }

  editUserHandler = () => {
    console.log(this.state.user);
    if (this.state.user.id) {
      axios.put(CONSTANT.LOCAL_JSON_SERVER_USER + this.state.user.id, this.state.user)
        .then(res => {
          this.setState({ user: res.data });
          console.log(res);
          var action = 'UPDATE USER';
          this.updateResponse(res, action);          
        }).catch(err => {
          console.log(err);
          this.updateResponse(err);
        });
    } else {
      axios.post(CONSTANT.LOCAL_JSON_SERVER_USER, this.state.user)
        .then(res => {
          this.setState({ user: res.data });
          console.log(res);
          var action = 'UPDATE USER';
          this.updateResponse(res,action);
        }).catch(err => {
          console.log(err);
          this.updateResponse(err);
        });
    }

  }

  updateResponse = (response, action) => {
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
        showResult:true
        , action: action
        , code: code
        , message: message
        , status: response.status
        , statusText: response.statusText
      }
    });
  }

  deleteUserHandler = () => {

    axios.delete(CONSTANT.LOCAL_JSON_SERVER_USER + this.state.user.id)
      .then(res => {
        this.setState({ user: res.data });
        console.log(res);
        var action = 'DELETE USER';
        this.updateResponse(res, action);
       // this.props.history.replace('/users/');
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

  dataChangeHandler = (event) => {
    var field = event.target.name;
    var value = event.target.value;
    //console.log('field =' + field + ' - value=' + value);
    var userData = []; 
    userData[field] = value;
    this.setState({
      user: { ...this.state.user, ...userData }
    }
    )
  };

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
              <td>
                {this.state.user.firstName}
                <input type="text" name="firstName" value={this.state.user.firstName} onChange={this.dataChangeHandler} />
              </td>
            </tr>
            <tr >
              <th>Last Name </th>
              <td>
                {this.state.user.lastName}
                <input type="text" name="lastName" value={this.state.user.lastName} onChange={this.dataChangeHandler} /></td>
            </tr>


          </tbody>
        </table>
        <Link to="/users"><button type="button" className="btn btn-primary">back</button> </Link>

        <button type="button" className="btn btn-primary" onClick={this.editUserHandler}>save</button>
        <button type="button" className="btn btn-primary" onClick={this.deleteUserHandler}>delete</button>

      </div>
    );
  }
}

export default EditOneUser;
