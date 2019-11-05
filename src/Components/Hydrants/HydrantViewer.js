import React from 'react';
import {Card} from 'react-bootstrap';
import sample_hydrant from '../../common/old-johnny4.jpg';
import ReactStars from 'react-stars'
import FlexContainer from '../../common/FlexContainer';
import sampleMP4 from '../../common/sampleMP4.mp4';
import sampleOGG from '../../common/sampleOGG.ogv';

// component to display individual reviews
const ReviewBox = ({name, count, review}) => {
    return (
        <React.Fragment>
            <strong> {name} </strong>
            <ReactStars
                className="block-centered"
                count={count}
                edit={false}
                size={24}
                color2={'#ffd700'}
            />
            <div> {review} </div> 
            <br/>
        </React.Fragment>
    );
};

class HydrantViewer extends React.Component {
   render() {
    return (
        <React.Fragment>
            <h1 className="light"> Sample Hydrant Page </h1>
            <FlexContainer>
                <Card className="text-center">
                    <Card.Title> Old Johnny</Card.Title>
                    <Card.Text> Old Johnny is from San Juan, Puerto Rico. </Card.Text>
                    {/* <Card.Img variant="top" src={sample_hydrant} alt="old sample hydrant from Puerto Rico" /> */}
                </Card>
                <Card className="text-center">
                    <Card.Title> Image</Card.Title>
                    <Card.Img variant="top" src={sample_hydrant} alt="old sample hydrant from Puerto Rico" />
                </Card>
                <Card className="text-center">
                    <Card.Title> Reviews </Card.Title>
                    {/* <Card.Body>  */}
                    <ReviewBox name="John Smith" rating={5} review={"This hydrant saved my massive bourgeois mansion from a snowstorm!"}/>
                    <ReviewBox name="Steve Bennett" rating={2} review={"They put this in my parking spot! At least it looks vintage..."}/>
                    {/* </Card.Body> */}
                </Card>
            </FlexContainer>
            <FlexContainer>
                <Card className="text-center">
                    <Card.Title> Location </Card.Title>
                    <Card.Text> Old Johnny is from San Juan, Puerto Rico </Card.Text>
                    <Card.Body> 
                        <iframe title="sample-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876754.5708617107!2d-68.74076090957921!3d18.398354668289443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c03686fe268196f%3A0xad6b7f0f5c935adc!2sSan%20Juan%2C%20Puerto%20Rico!5e0!3m2!1sen!2sca!4v1570304557657!5m2!1sen!2sca" width="400" height="300" ></iframe> 
                    </Card.Body>
                </Card>
                <Card className="text-center">
                    <Card.Title> Video </Card.Title>
                    <Card.Body>
                    {/* HTML5 video, that renders either a sample mp4 or an ogg, as long as the browser supports it */}
                    <video controls>
                        <source src= {sampleMP4} type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
                        <source src={sampleOGG} type="video/ogg" />Your browser does not support the video tag. I suggest you upgrade your browser.
                    </video>
                    </Card.Body>
                </Card>

            </FlexContainer>
        </React.Fragment>
        );
   }
}
export default HydrantViewer;
