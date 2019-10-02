import React from 'react';
import {Card, Button} from 'react-bootstrap';
import HydrantSearchForm from './HydrantSearchForm';

class FormCard extends React.Component {
   constructor() {
      super();
    console.log('Entered Search view')
   }

   render() {
    const {formMainText, formSubText} = this.props;
    return (
    <div className="hydrant-form-card">
        <Card className="text-center">
        <Card.Header>Hydrant Search</Card.Header>
        <Card.Body>
            <Card.Title> {formMainText} </Card.Title> 
            <Card.Text> {formSubText} </Card.Text>
            {this.props.children}
        </Card.Body>
        </Card>     
    </div> 
    );
   }
}
export default FormCard;
