import React, { Component } from 'react';
import { FormControl, FormGroup, Button,label } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class AddUser extends Component {
  constructor() {
    super();
   
  }

  
  render() {
    return (
      <div >
        <h3>Create New user</h3>
        <form onSubmit={this.handleFormSubmit}>
        <FormGroup
          >
           
           <label>User Name</label>
            <FormControl
              type="text"
          
              placeholder="Type something that describes the department"
            
            />
            <FormControl.Feedback />
           
          </FormGroup>
      
          <FormGroup
            
          >
        
        <label>Password</label>
            <FormControl
              type="text"
             
              placeholder="Type something that describes the expense"
          
            />
            <FormControl.Feedback />
           
          </FormGroup>

          <FormGroup
            
          >
              <label>Department</label>
          
            <FormControl
              type="text"
         
              placeholder="Insert value"
              
            />
            <FormControl.Feedback />
           
          </FormGroup>
         
         

          <Button
            type="submit"
          >
            ADD
          </Button>
          <Link to="/tracker"><Button  >Back</Button>  </Link>

        </form>

      </div>
    );
  }
}

export default AddUser;
