import React from 'react';
import {Button, FormControl, FormGroup, Form, FormLabel} from 'react-bootstrap';

class RegistrationForm extends React.Component {
   constructor() {
      super();
      this.state = {
        username: "",
        email: "",
        firstName: "",
      }
    console.log('Entered Reg form');
    this.updateUsername = this.updateUsername.bind(this);
    this.updateFirstName = this.updateFirstName.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.updateTerms = this.updateTerms.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
   }

   onSubmit(e) {
    e.preventDefault();
    // An api call will be added here to submit these values
    console.log(this.state);
   }
   updateUsername(e) {
    console.log('updateUsername', e.target.value);
    this.setState({
        username: e.target.value
    });
   }
   updateFirstName(e) {
    console.log('updateFirstName', e.target.value);
    this.setState({
        firstName: e.target.value
    });
   }

   updateEmail(e) {
    console.log('updateEmail', e.target.value);
    this.setState({
        email: e.target.value
    });
   }

   updateTerms(e){
    console.log('updateTerms', e.target.checked);
    this.setState({
        acceptTerms: e.target.checked
    });
}

   render() {
        const {username, email, firstName} = this.state;
        return (
        <Form className="registration-form" onSubmit={this.onSubmit}>
            <FormGroup controlId="username">
                <FormLabel>Username</FormLabel>
                <FormControl 
                    type="text"
                    placeholder="Enter a username..."
                    onChange={this.updateUsername}
                    defaultValue={username}
                />
            </FormGroup>
            <FormGroup controlId="firstName">
                <FormLabel>First Name</FormLabel>
                <FormControl 
                    type="text"
                    placeholder="Enter your First Name..."
                    onChange={this.updateFirstName}
                    defaultValue={firstName}
                />
            </FormGroup>
            <FormGroup controlId="email">
                <FormLabel>Email</FormLabel>
                <FormControl 
                    type="email"
                    placeholder="Enter your email..."
                    onChange={this.updateEmail}
                    defaultValue={email}
                />
            </FormGroup>
            <FormGroup controlId="agreement">
                <Form.Check
                    type="checkbox"
                    onChange={this.updateTerms}
                    label="I agree that hydrants are the greatest invention of all mankind." />
            </FormGroup>
            <Button type="submit">
            Submit
            </Button>
        </Form>
        );
   }
}
export default RegistrationForm;
