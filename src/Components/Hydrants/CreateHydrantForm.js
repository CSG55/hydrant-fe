import React from 'react';
import {Button, FormControl, FormGroup, Form, FormLabel} from 'react-bootstrap';

class CreateHydrantForm extends React.Component {
   constructor() {
      super();
      this.state = {
        name: "",
        description: "",
        firstName: "",
      }
    console.log('Entered Reg form');
    this.updateName = this.updateName.bind(this);
    this.updateDescription = this.updateDescription.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.updateTerms = this.updateTerms.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
   }

   onSubmit(e) {
    e.preventDefault();
    // An api call will be added here to submit these values
    console.log(this.state);
   }
   updateName(e) {
    console.log('updateName', e.target.value);
    this.setState({
        name: e.target.value
    });
   }
   updateDescription(e) {
    console.log('updateDescription', e.target.value);
    this.setState({
        description: e.target.value
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
        const {name, description, email, firstName} = this.state;
        return (
        <Form className="hydrant-editor" onSubmit={this.onSubmit}>
            <FormGroup controlId="name">
                <FormLabel>Hydrant Name</FormLabel>
                <FormControl 
                    type="text"
                    placeholder="Name your hydrant..."
                    onChange={this.updateName}
                    defaultValue={name}
                />
            </FormGroup>
            <FormGroup controlId="descripton">
                <FormLabel>Hydrant Description</FormLabel>
                <FormControl 
                    as="textarea"
                    placeholder="Enter your Hydrant description..."
                    onChange={this.updateFirstName}
                    defaultValue={description}
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
export default CreateHydrantForm;
