import React from 'react';
import {Card} from 'react-bootstrap';

class FormCard extends React.Component {
   constructor() {
      super();
    console.log('FormCard')
   }

   render() {
    const {title, mainText, formSubText} = this.props;
    return (
    <div className="hydrant-form-card">
        <Card className="text-center">
        <Card.Header>{title}</Card.Header>
        <Card.Body>
            <Card.Title> {mainText} </Card.Title> 
            <Card.Text> {formSubText} </Card.Text>
            {this.props.children}
        </Card.Body>
        </Card>     
    </div> 
    );
   }
}
export default FormCard;
