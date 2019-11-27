import React from 'react';
import {Card} from 'react-bootstrap';
import sample_hydrant from '../../common/old-johnny4.jpg';
import ReactStars from 'react-stars'
import FlexContainer from '../../common/FlexContainer';
import CreateReviewForm from './CreateReviewForm';
import sampleMP4 from '../../common/sampleMP4.mp4';
import sampleOGG from '../../common/sampleOGG.ogv';
import {fetchHydrant, createReview} from '../../api/hydrants-api';
import MapContainer from '../../common/MapContainer';


// component to display individual reviews
const HydrantViewerCard = (props) => {
    return (
            <Card className={"hydrant-viewer-card"}>
                {props.children}
            </Card>
        );
};

// component to display individual reviews
const ReviewBox = ({name, rating, review}) => {
    return (
        <React.Fragment>
            <strong> {name} </strong>
            <ReactStars
                className="block-centered"
                count={rating}
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
    constructor(props){
        super(props);
        this.state = {
            reviews: [],
            name: "",
            image_url:"",
            description:"",
            long: null,
            lat: null,
        }
        this.handleReviewCreate = this.handleReviewCreate.bind(this);
    }

    componentDidMount(){
        const hydrant_id = this.props.match.params.id;
        fetchHydrant({id: hydrant_id}).then(res => {
            const {data: {0: {reviews, name, image_url, description, long, lat}}} = res;
            this.setState({hydrant: res.data, reviews, name, image_url, description, long, lat});
        })
        .catch((err) => {
            console.log("AXIOS ERROR: ", err);
        })
    }

    handleReviewCreate(newReview){
        console.log(newReview);
        const  {reviews} = this.state; 
        const updatedReviewList = reviews; // create a client copy of the review list so that we could append a new review after submission
        createReview({ 
            ...newReview,
            hydrant_id:this.state.hydrant['0'].id,
        }).then((res) => {
            updatedReviewList.push(res.data)
            this.setState({reviews: updatedReviewList});
        }).catch((err) => {
            console.log("AXIOS ERROR: ", err);
        });
    }


   render() {
    const {reviews, name, image_url, description, long, lat} = this.state;
    
    return (
        <React.Fragment>
            <h1 className="light"> {name} </h1>
            <FlexContainer>
                <HydrantViewerCard>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text> {description} </Card.Text>
                </HydrantViewerCard>
                <HydrantViewerCard>
                    <Card.Title> Image</Card.Title>
                    <Card.Img variant="top" src={sample_hydrant} alt="old sample hydrant from Puerto Rico" />
                </HydrantViewerCard>
                <HydrantViewerCard>
                    <Card.Title> Reviews </Card.Title>
                    <CreateReviewForm handleSubmit={this.handleReviewCreate}/>
                    {reviews.map(review => <ReviewBox name={review.title} rating={review.rating} review={review.review_text} />)}
                </HydrantViewerCard>
            </FlexContainer>
            <FlexContainer>
                <HydrantViewerCard>
                    <Card.Title> Location </Card.Title>
                    <Card.Text> {name} is from <br/> ({lat}, {long}) </Card.Text>
                    <Card.Body> 
                    {this.state.hydrant && 
                        <div className="hydrant-viewer-map">
                            <MapContainer history={this.props.history} hydrantList={this.state.hydrant}/>
                        </div>
                    }
                    </Card.Body>
                </HydrantViewerCard>
                <HydrantViewerCard>
                    <Card.Title> Video </Card.Title>
                    <Card.Body>
                    {/* HTML5 video, that renders either a sample mp4 or an ogg, as long as the browser supports it */}
                    <video controls>
                        <source src= {sampleMP4} type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
                        <source src={sampleOGG} type="video/ogg" />Your browser does not support the video tag. I suggest you upgrade your browser.
                    </video>
                    </Card.Body>
                </HydrantViewerCard>

            </FlexContainer>
        </React.Fragment>
        );
   }
}
export default HydrantViewer;
