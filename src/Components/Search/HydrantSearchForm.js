import React from 'react';
import {Button, FormControl, FormGroup, Form, FormLabel, Col} from 'react-bootstrap';
// import { Map, GoogleApiWrapper } from 'google-maps-react';
  
class HydrantSearchForm extends React.Component {
   constructor() {
      super();
        this.state = {
          searchName: null,
          searchRating: null,
          lat:null,
          long:null,
      }
    this.updateName = this.updateName.bind(this);
    this.updateRating = this.updateRating.bind(this);
    this.updateLong = this.updateLong.bind(this);
    this.updateLat = this.updateLat.bind(this);

    this.getUserLocation = this.getUserLocation.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
   }

    onSubmit(e) {
        const {searchName, searchRating, long, lat} = this.state;
        e.preventDefault();
        this.props.onSubmit({ searchName, avg_rating: searchRating, long, lat });
    }

    //fetch the user's browser location
    getUserLocation() {
        navigator.geolocation.getCurrentPosition((location) => {
            this.setState({lat:location.coords.latitude, long: location.coords.longitude});
        });
    }

    updateName(e) {
        this.setState({
            searchName: e.target.value
        });
    }

    updateLong(e) {
        this.setState({
            long: e.target.value
        });
    }

    updateLat(e) {
        this.setState({
            lat: e.target.value
        });
    }

    updateRating(e){
        this.setState({
            searchRating: e.target.value
        });
    }

   render() {
        const {searchName, searchRating, lat, long} = this.state;
          
        return (
        <Form onSubmit={this.onSubmit}>
            <FormGroup controlId="hydrantSearchName">
            {/* Upon Submission, all form data is sent to the parent component to CreateHydrantForm */}
                <FormLabel>Name</FormLabel>
                <FormControl 
                    type="text"
                    placeholder="Enter Hydrant's name..."
                    onChange={this.updateName}
                    defaultValue={searchName}
                />
            </FormGroup>
            <FormGroup controlId="hydrantSearchRating">
                <FormLabel>Filter by Rating</FormLabel>
                {/* consider replacing with actual stars */}
                <FormControl 
                    as = "select"
                    onChange={this.updateRating}
                >
                        <option  value={null} defaultValue>No filter</option>
                        <option value={5}>5 stars</option>
                        <option value={4}>4 stars</option>
                        <option value={3}>3 stars</option>
                        <option value={2}>2 stars</option>
                        <option value={1}>1 star</option>

                </FormControl>
            </FormGroup>
            <FormGroup controlId="location">
                <FormLabel>Filter by Location</FormLabel>
                <Form.Row>
                    <Col xs={6} md={4}> {/* On mobile, this column is half the row width. On desktop, it is 1/3 */}
                    <Button onClick={this.getUserLocation}>
                        Use Your Location
                    </Button>
                    </Col>
                    <Col xs={6} md={8}> {/* On mobile, this column is half the row width. On desktop, it is 2/3 */}
                    <FormControl 
                        type="number"
                        step="any"
                        placeholder="Enter Latitude..."
                        onChange={this.updateLat}
                        value={lat}
                    />
                    <FormControl 
                        type="number"
                        step="any"
                        placeholder="Enter Longitude..."
                        onChange={this.updateLong}
                        value={long}
                    />
                    </Col>
                </Form.Row>
            </FormGroup>


            <Button type="submit">
                Submit
            </Button>
        </Form>
        );
   }
}
export default HydrantSearchForm;
