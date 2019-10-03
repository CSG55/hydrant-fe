import React from 'react';
import {Button, FormControl, FormGroup, Form, FormLabel} from 'react-bootstrap';

class RegistrationForm extends React.Component {
   constructor() {
      super();
      this.state = {
        username: "",
        email: "",
        searchRating: 'No filter',
      }
    console.log('Entered Reg form');
    this.updateUsername = this.updateUsername.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
   }

   onSubmit(e) {
    e.preventDefault();
    // An api call will be added here to submit these values
    console.log(this.state.searchName, this.state.searchRating);
   }
   updateUsername(e) {
    console.log('updateUsername', e.target.value);
    this.setState({
        username: e.target.value
    });
   }
   updateEmail(e) {
    console.log('updateEmail', e.target.value);
    this.setState({
        email: e.target.value
    });
   }

   updateRating(e){
    console.log('updateRating', e.target.value);
    this.setState({
        searchRating: e.target.value
    });
}

   render() {
        const {username, email} = this.state;
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
            <Form.Check type="checkbox" label="I agree that fire hydrants are the greatest invention of all mankind." />
            {/* <FormLabel>Terms of Use</FormLabel>
            <FormControl 
                type="checkbox"
                label="You agree that fire hydrants are the greatest invention of all mankind."
                onChange={this.updateEmail}
                defaultValue={email}
            /> */}
            </FormGroup>
            <Button type="submit">
            Submit
            </Button>
        </Form>
        );
   }
}
export default RegistrationForm;
