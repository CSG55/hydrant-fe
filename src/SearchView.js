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
        <Card className="text-center">
        <Card.Header>Hydrant Search</Card.Header>
        <Card.Body>
            {/* <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
            With supporting text below as a natural lead-in to additional content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button> */}
            <HydrantSearchForm/>
        </Card.Body>
        {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
        </Card>      
        );
   }
}
export default SearchView;
