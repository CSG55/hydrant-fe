import React from 'react';
import {Card} from 'react-bootstrap';
import sample_hydrant from '../../common/old-johnny4.jpg';


class HydrantViewer extends React.Component {
   constructor() {
      super();
    console.log('HydrantViewer')
   }

   render() {
    return (
        <Card>
        <Card.Img variant="top" src={sample_hydrant} />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk
            of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
        );
   }
}
export default HydrantViewer;
