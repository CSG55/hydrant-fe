import React from 'react';
import {Button, FormControl, FormGroup, Form, FormLabel} from 'react-bootstrap';
import {isValidEmail} from '../../common/validators';


const validateForm = (username, email, password, acceptTerms) => {
    const errors = {
        username: !username,
        email: !isValidEmail(email), 
        password: !password,
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
    console.log('Entered Reg form');
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

        e.preventDefault();
        if (isInvalid){
            this.setState({errors});
        } else {
            console.log(this.state);
            this.props.handleSubmit({username, email, password});
        }

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
                    Please provide a Username.
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
                    Please provide a Password.
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
