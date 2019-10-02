import React from 'react';
import {Button, FormControl, FormGroup, Form, FormLabel} from 'react-bootstrap';

class SearchView extends React.Component {
   constructor() {
      super();
      this.state = {
          searchName: "",
          defaultRating: null,
      }
    console.log('Entered Search form');
    this.updateName = this.updateName.bind(this);
    this.updateRating = this.updateRating.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
   }

   onSubmit(e){
       e.preventDefault();
       console.log(this.state.searchName, this.state.searchRating);
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
        return (
        <Form onSubmit={this.onSubmit}>
            <FormGroup controlId="hydrantSearchName">
                <FormLabel>Name</FormLabel>
                <FormControl 
                    type="text"
                    placeholder="Enter Hydrant's name..."
                    onChange={this.updateName}
                    value={searchName}
                />
            </FormGroup>
            <FormGroup controlId="hydrantSearchRating">
                <FormLabel>Rating</FormLabel>
                {/* consider replacing with actual stars */}
                <FormControl 
                    as = "select"
                    onChange={this.updateRating}
                    value={searchRating}
                >
                        <option>5 stars</option>
                        <option>4 stars</option>
                        <option>3 stars</option>
                        <option>2 stars</option>
                        <option>1 star</option>
                </FormControl>
            </FormGroup>

            <Button type="submit">
            Submit
            </Button>
        </Form>
        );
   }
}
export default SearchView;
