import React from 'react';
import {Card, Button} from 'react-bootstrap';
import HydrantSearchForm from './HydrantSearchForm';

class SearchView extends React.Component {
   constructor() {
      super();
    //   this.state = {}
    console.log('Entered Search view')
   }

   render() {
      return (
        <div className="hydrant-form-card">
            <Card className="text-center">
            <Card.Header>Hydrant Search</Card.Header>
            <Card.Body>
                <HydrantSearchForm/>
            </Card.Body>
            </Card>     
        </div> 
        );
   }
}
export default SearchView;
