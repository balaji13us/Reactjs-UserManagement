import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CONSTANT from '../../constants/env' 
import UIResponse from '../../components/generic/UIResponse'
class EditOneUser extends Component {


  constructor(props) {
    super(props);
    this.state = {
      user: [],
      result:{
        code:""
        ,message:""
        ,status:""
        ,statusMessage:""
      }
    };
  }

  addUserHandler = () => {
    console.log(this.state.user);
    axios.post(CONSTANT.LOCAL_JSON_SERVER_USER,this.state.user)
       .then(res => {
      this.setState({ user: res.data });
      console.log(res);
      this.updateResponse(res);
    }).catch(err => {
      console.log(err); 
    });
  }

  updateResponse =(response)=>{
    var code , message;
    switch(response.status)
    {
      case 200:
      code = 'Success';
      message='Successfully Updated';
      break;
      case 201:
      code = 'Success';
      message='Successfully Created';
      break;

      default:
      code = 'Unknown Error';
      message='Update Failed';
    }
    
    this.setState({ result: {
      code:code
      ,message:message
      ,status:response.status
      ,statusMessage:response.statusMessage} });
  }

 

  componentDidMount() {

  }

  dataChangeHandler = (event) => {
    var field = event.target.name;
    var value = event.target.value;
    //console.log('field =' + field + ' - value=' + value);
    var userData = [];
    userData[field] = value;
    this.setState({
      user: {...this.state.user, ...userData}
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
                <input type="text" name="firstName" onChange={this.dataChangeHandler} />
              </td>
            </tr>
            <tr >
              <th>Last Name </th>
              <td>
                {this.state.user.lastName}
                <input type="text" name="lastName" onChange={this.dataChangeHandler} /></td>
            </tr>


          </tbody>
        </table>
        <Link to="/users"><button type="button" className="btn btn-primary">back</button> </Link>
        <button type="button" className="btn btn-primary" onClick={this.addUserHandler}>Add</button> 
      </div>
    );
  }
}

export default EditOneUser;
