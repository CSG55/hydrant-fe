import React from 'react';
import {Button, FormControl, FormGroup, Form, FormLabel} from 'react-bootstrap';

class RegistrationForm extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
        username: "",
        email: "",
        password: "",
      }
    console.log('Entered Reg form');
    this.updateUsername = this.updateUsername.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.updateTerms = this.updateTerms.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
   }

   onSubmit(e) {
    const {username, email, firstName} = this.state;
    e.preventDefault();
    // An api call will be added here to submit these values
    console.log(this.state);
    this.props.handleSubmit({username, email, firstName});
   }
   updateUsername(e) {
    console.log('updateUsername', e.target.value);
    this.setState({
        username: e.target.value
    });
   }
   updatePassword(e) {
    console.log('updatePassword', e.target.value);
    this.setState({
        password: e.target.value
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
        const {username, email, password} = this.state;
        return (
        <Form className="registration-form" onSubmit={this.onSubmit}>
            {/* Upon Submission, all form data is sent to the parent component to CreateHydrantForm */}
            <FormGroup controlId="username">
                <FormLabel>Username</FormLabel>
                <FormControl 
                    type="text"
                    placeholder="Enter a username..."
                    onChange={this.updateUsername}
                    defaultValue={username}
                    isInvalid
                />
                <FormControl.Feedback type="invalid">
                    Please provide a Username.
                </FormControl.Feedback>
            </FormGroup>
            <FormGroup controlId="password">
                <FormLabel>Password</FormLabel>
                <FormControl 
                    type="password"
                    placeholder="Enter a password..."
                    onChange={this.updatePassword}
                    defaultValue={password}
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
