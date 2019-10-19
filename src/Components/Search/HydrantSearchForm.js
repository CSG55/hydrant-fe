import React from 'react';
import {Button, FormControl, FormGroup, Form, FormLabel, Row, Col} from 'react-bootstrap';
// import { Map, GoogleApiWrapper } from 'google-maps-react';
  
class HydrantSearchForm extends React.Component {
   constructor() {
      super();
        this.state = {
          searchName: "",
          searchRating: 'No filter',
          lat:"",
          long:"",
      }
    console.log('Entered Search form');
    this.updateName = this.updateName.bind(this);
    this.updateRating = this.updateRating.bind(this);
    this.updateLong = this.updateLong.bind(this);
    this.updateLat = this.updateLat.bind(this);

    this.getUserLocation = this.getUserLocation.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
   }

    onSubmit(e) {
        const {searchName, searchRating} = this.state;
        e.preventDefault();
        console.log(searchName, searchRating);
        this.props.onSubmit({ searchName, searchRating });
    }

    getUserLocation() {
        navigator.geolocation.getCurrentPosition((location) => {
            this.setState({lat:location.coords.latitude, long: location.coords.longitude});
            console.log({lat:location.coords.latitude, long: location.coords.longitude});
        });
    }

    updateName(e) {
        console.log('updateName', e.target.value);
        this.setState({
            searchName: e.target.value
        });
    }

    updateLong(e) {
        console.log('updateLong', e.target.value);
        this.setState({
            long: e.target.value
        });
    }

    updateLat(e) {
        console.log('updateLat', e.target.value);
        this.setState({
            lat: e.target.value
        });
    }

    updateRating(e){
        console.log('updateRating', e.target.value);
        this.setState({
            searchRating: e.target.value
        });
    }

   render() {
        const {searchName, searchRating, lat, long} = this.state;
        console.log(lat, long);
          
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
                        <option defaultValue>No filter</option>
                        <option>5 stars</option>
                        <option>4 stars</option>
                        <option>3 stars</option>
                        <option>2 stars</option>
                        <option>1 star</option>

                </FormControl>
            </FormGroup>
            <FormGroup controlId="hydrantSearchRating">
                <FormLabel>Filter by Location</FormLabel>
                <Row>
                    <Col xs={6} md={4}> {/* On mobile, this column is half the row width. On desktop, it is 1/3 */}
                    <Button onClick={this.getUserLocation}>
                        Use Your Location
                    </Button>
                    </Col>
                    <Col xs={6} md={8}> {/* On mobile, this column is half the row width. On desktop, it is 2/3 */}
                    <FormControl 
                        type="number"
                        placeholder="Enter Latitude..."
                        onChange={this.updateLat}
                        value={lat}
                    />
                    <FormControl 
                        type="number"
                        placeholder="Enter Longitude..."
                        onChange={this.updateLong}
                        value={long}
                    />
                    </Col>
                </Row>
            </FormGroup>


            <Button type="submit">
                Submit
            </Button>
        </Form>
        );
   }
}
export default HydrantSearchForm;
