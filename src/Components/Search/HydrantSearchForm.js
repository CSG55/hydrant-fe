import React from 'react';
import {Button, FormControl, FormGroup, Form, FormLabel} from 'react-bootstrap';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import MapContainer from './MapContainer';
  
class HydrantSearchForm extends React.Component {
   constructor() {
      super();
      this.state = {
          searchName: "",
          searchRating: 'No filter',
      }
    console.log('Entered Search form');
    this.updateName = this.updateName.bind(this);
    this.updateRating = this.updateRating.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
   }

   onSubmit(e) {
    const {searchName, searchRating} = this.state;
    e.preventDefault();
    console.log(searchName, searchRating);
    this.props.onSubmit({ searchName, searchRating });
   }
   updateName(e) {
    console.log('updateName', e.target.value);
    this.setState({
        searchName: e.target.value
    });
   }

   updateRating(e){
    console.log('updateRating', e.target.value);
    this.setState({
        searchRating: e.target.value
    });
}

   render() {
        const {searchName, searchRating} = this.state;

        const mapStyles = {
            width: '100%',
            height: '100%'
          };
          
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
                {/* <FormControl> */}
                    <FormLabel>Filter by Location</FormLabel>
                    <MapContainer
                    />
                {/* </FormControl> */}

            </FormGroup>


            <Button type="submit">
                Submit
            </Button>
        </Form>
        );
   }
}
export default HydrantSearchForm;
