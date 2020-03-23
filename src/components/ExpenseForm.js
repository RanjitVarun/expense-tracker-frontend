import React, { Component } from 'react';
import { FormControl, FormGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class ExpenseForm extends Component {
  constructor() {
    super();
   
  }

  
  render() {
    return (
      <div className="expense-form">
        <h3>Add Expense</h3>
        <form onSubmit={this.handleFormSubmit}>
        <FormGroup
          >
           
           <label>Department</label>
            <FormControl
              type="text"
          
              placeholder="Type something that describes the department"
            
            />
            <FormControl.Feedback />
           
          </FormGroup>
      
          <FormGroup
            
          >
        
        <label> Category</label>
            <FormControl
              type="text"
             
              placeholder="Type something that describes the expense"
          
            />
            <FormControl.Feedback />
           
          </FormGroup>

          <FormGroup
            
          >
              <label> Amount</label>
          
            <FormControl
              type="text"
         
              placeholder="Insert value"
              
            />
            <FormControl.Feedback />
           
          </FormGroup>

          <Button
            type="submit"
          >
            Save
          </Button>
          <Link to="/tracker"><Button  >Back</Button>  </Link>
          

        </form>

      </div>
    );
  }
}

export default ExpenseForm;
