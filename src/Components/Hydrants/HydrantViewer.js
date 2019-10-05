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
        <div>
        <Card className="text-center">
            <Card.Title> Old Johnny</Card.Title>
            <Card.Text> Old Johnny is from San Juan, Puerto Rico. </Card.Text>
            {/* <Card.Img variant="top" src={sample_hydrant} alt="sample hydrant" /> */}
        </Card>
        <Card className="text-center">
            <Card.Title> Image</Card.Title>
            <Card.Img variant="top" src={sample_hydrant} alt="sample hydrant" />
        </Card>
        <Card className="text-center">
            <Card.Title> Location </Card.Title>
            <Card.Text> Old Johnny is from San Juan, Puerto Rico </Card.Text>
            <Card.Body> 
                <iframe title="sample-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876754.5708617107!2d-68.74076090957921!3d18.398354668289443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c03686fe268196f%3A0xad6b7f0f5c935adc!2sSan%20Juan%2C%20Puerto%20Rico!5e0!3m2!1sen!2sca!4v1570304557657!5m2!1sen!2sca" width="400" height="300" frameborder="0" allowfullscreen=""></iframe> 
            </Card.Body>
        </Card>
        <Card className="text-center">
            <Card.Title> Reviews </Card.Title>
            <Card.Text> Old Johnny is from San Juan, Puerto Rico </Card.Text>
            <Card.Body> 
                <iframe title="sample-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876754.5708617107!2d-68.74076090957921!3d18.398354668289443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c03686fe268196f%3A0xad6b7f0f5c935adc!2sSan%20Juan%2C%20Puerto%20Rico!5e0!3m2!1sen!2sca!4v1570304557657!5m2!1sen!2sca" width="400" height="300" frameborder="0" allowfullscreen=""></iframe> 
            </Card.Body>
        </Card>
        </div>
        );
   }
}
export default HydrantViewer;
