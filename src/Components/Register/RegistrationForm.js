import React from 'react';
import {Button, FormControl, FormGroup, Form, FormLabel} from 'react-bootstrap';
import {isValidEmail, isValidUsername, isValidPassword} from '../../common/validators';

// returns a boolean array "errors" of each field's validaton status
// In "errors", a field is true if it is invalid. 
const validateForm = (username, email, password, acceptTerms) => {
    const errors = {
        username: !username || !isValidUsername(isValidUsername),
        email: !isValidEmail(email), 
        password: !password || !isValidPassword(password),
        acceptTerms: !acceptTerms,
    };
    return errors;
}

class RegistrationForm extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
        username: "",
        email: "",
        password: "",
        acceptTerms: false,
        errors: {},
      }
    this.updateUsername = this.updateUsername.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.updateTerms = this.updateTerms.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
   }

    onSubmit(e) {
        const {username, email, password, acceptTerms} = this.state;
        const errors = validateForm(username, email, password, acceptTerms);
        const isInvalid = Object.values(errors).some(x => (x === true)); // if one form item has an error, the form is invalid

        e.preventDefault(); // prevent default behavior of onSubmit
        if (isInvalid){
            this.setState({errors}); // show predefined field errors 
        } else {
            this.props.handleSubmit({username, email, password});
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

    updateEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    updateTerms(e){
        this.setState({
            acceptTerms: e.target.checked
        });
    }

   render() {
        const {errors, username, email, password} = this.state;
        return (
        <Form className="registration-form" onSubmit={this.onSubmit}>
            {/* Upon Submission, all form data is sent to the parent component to CreateHydrantForm */}
            <FormGroup controlId="username">
                <FormLabel className="required">Username</FormLabel>
                <FormControl 
                    type="text"
                    placeholder="Enter a username..."
                    onChange={this.updateUsername}
                    defaultValue={username}
                    isInvalid={errors.username}
                    required
                />
                <FormControl.Feedback type="invalid">
                    Please provide an alphanumeric Username.
                </FormControl.Feedback>
            </FormGroup>
            <FormGroup controlId="password">
                <FormLabel className="required">Password</FormLabel>
                <FormControl 
                    type="password"
                    placeholder="Enter a password..."
                    onChange={this.updatePassword}
                    defaultValue={password}
                    isInvalid={errors.password}
                    required
                />
                <FormControl.Feedback type="invalid">
                    Please provide an alphanumeric Password of at least 6 digits.
                </FormControl.Feedback>

            </FormGroup>
            <FormGroup controlId="email">
                <FormLabel className="required">Email</FormLabel>
                <FormControl 
                    type="email"
                    placeholder="Enter your email..."
                    onChange={this.updateEmail}
                    defaultValue={email}
                    isInvalid={errors.email}
                    required
                />
                <FormControl.Feedback type="invalid">
                    Please provide a valid email.
                </FormControl.Feedback>

            </FormGroup>
            <FormGroup controlId="agreement">
                <Form.Check
                    type="checkbox"
                    onChange={this.updateTerms}
                    label="I agree that hydrants are the greatest invention of all mankind."
                    isInvalid={errors.acceptTerms}
                    required
                />
            </FormGroup>

            <Button type="submit">
            Submit
            </Button>
        </Form>
        );
   }
}
export default RegistrationForm;
