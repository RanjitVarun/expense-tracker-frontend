import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import UserList from './UserList';
import Adduser from './AddUser';

class UserManager extends Component {
  constructor() {
    super();
    this.state = {
      
    };


  }


  render() {
    return (
      <div className="container">
        <div className="Usermanager">
          <div className="row">
          <Col md={6}>
              <Adduser/>
            </Col>
            <Col md={6}>
              <UserList/>
            </Col>
           
          </div>
         
        </div>
      </div>
    );
  }
}

export default UserManager;
