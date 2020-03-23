import React, { Component } from 'react';
import { Table, Label, Alert, Nav, NavItem } from 'react-bootstrap';





class ExpenseTable extends Component {
  constructor() {
    super();
    this.state = {
     
    };

  }

 
  render() {
   

    return (
      <div className="expense-table">
        <h3>Expense List</h3>
        <Table responsive bordered>
          <thead>
            <tr>
            <th>Name</th>
              <th>Department</th>
              <th>Category</th>
              <th >Amount</th>
              <th>Date</th>
              <th>Approved by</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            
          </tbody>
        </Table>
      </div>
    );
  }
}

export default ExpenseTable;
