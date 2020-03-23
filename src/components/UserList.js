import React, { Component } from 'react';
import { Table, Label, Alert, Nav, NavItem } from 'react-bootstrap';





class UserList extends Component {
  constructor() {
    super();
    this.state = {
     
    };

  }

 
  render() {
   

    return (
      <div>
        <h3>User List</h3>
        <Table responsive bordered>
          <thead>
            <tr>
              <th>User Name</th>
              <th>Password</th>
              <th >Department</th>
              <th>Expense</th>
            
            </tr>
          </thead>
          <tbody>
            
          </tbody>
        </Table>
      </div>
    );
  }
}

export default UserList;
