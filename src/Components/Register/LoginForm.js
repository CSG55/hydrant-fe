import React from 'react';
import {Button, FormControl, FormGroup, Form, FormLabel} from 'react-bootstrap';

// returns a boolean array "errors" of each field's validaton status
// In "errors", a field is true if it is invalid. 
const validateForm = (username, password) => {
    const errors = {
        username: !username,
        password: !password,
    };
    return errors;
}

class LoginForm extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
        username: "",
        password: "",
        errors: {},
      }
    this.updateUsername = this.updateUsername.bind(this);
    this.updatePassword = this.updatePassword.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
   }

    onSubmit(e) {
        const {username, password} = this.state;
        const errors = validateForm(username, password);
        const isInvalid = Object.values(errors).some(x => (x === true)); // if one form item has an error, the form is invalid

        e.preventDefault(); // prevent default behavior of onSubmit
        if (isInvalid){
            this.setState({errors}); // show predefined field errors 
        } else {
            this.props.handleSubmit({username, password});
        }
    }

    // update the state for username whenever a user edits the field.
    // this state is used when validating the field
    updateUsername(e) {
        this.setState({
            username: e.target.value
        });
    }
    updatePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

   render() {
        const {errors, username, password} = this.state;
        return (
        <Form className="registration-form" onSubmit={this.onSubmit}>
            {/* Upon Submission, all form data is sent to the parent component to CreateHydrantForm */}
            <FormGroup controlId="username">
                <FormLabel className="required">Username</FormLabel>
                <FormControl 
                    type="text"
                    placeholder="Enter your username..."
                    onChange={this.updateUsername}
                    defaultValue={username}
                    isInvalid={errors.username}
                    required
                />
                <FormControl.Feedback type="invalid">
                    Please enter your Username.
                </FormControl.Feedback>
            </FormGroup>
            <FormGroup controlId="password">
                <FormLabel className="required">Password</FormLabel>
                <FormControl 
                    type="password"
                    placeholder="Enter your password..."
                    onChange={this.updatePassword}
                    defaultValue={password}
                    isInvalid={errors.password}
                    required
                />
                <FormControl.Feedback type="invalid">
                    Please enter your Password.
                </FormControl.Feedback>

            </FormGroup>
            <Button type="submit">
            Login
            </Button>
        </Form>
        );
   }
}
export default LoginForm;
