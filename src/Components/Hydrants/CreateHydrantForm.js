import React from 'react';
import {Button, FormControl, FormGroup, Form, FormLabel} from 'react-bootstrap';
// import ImageUploader from 'react-images-upload';

class CreateHydrantForm extends React.Component {
   constructor() {
      super();
      this.state = {
        name: "",
        description: "",
        latLong: "",
        pictures: [],

      }
    this.updateName = this.updateName.bind(this);
    this.updateDescription = this.updateDescription.bind(this);
    this.updateLatLong = this.updateLatLong.bind(this);
    this.updatePhoto = this.updatePhoto.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    // this.updatePhotos = this.updatePhotos.bind(this);
   }

//    updatePhotos(picture) {
//     console.log(picture);
//     this.setState({
//         pictures: this.state.pictures.concat(picture),
//     });
// }

   onSubmit(e) {
    e.preventDefault();
    // An api call will be added here to submit these values
    console.log(this.state);
   }
   updateName(e) {
    console.log('updateName', e.target.value);
    this.setState({
        name: e.target.value
    });
   }
   updateDescription(e) {
    console.log('updateDescription', e.target.value);
    this.setState({
        description: e.target.value
    });
   }

   updateLatLong(e) {
    console.log('updateLatLong', e.target.value);
    this.setState({
        latLong: e.target.value
    });
   }

   updatePhoto(e){
    console.log('updatePhoto', e.target.value);
    this.setState({
        pictures: e.target.files
    });
}

   render() {
        const {name, description, latLong} = this.state;
        return (
        <Form className="hydrant-editor" onSubmit={this.onSubmit}>
            <FormGroup controlId="name">
                <FormLabel>Hydrant Name</FormLabel>
                <FormControl 
                    type="text"
                    placeholder="Name your hydrant..."
                    onChange={this.updateName}
                    defaultValue={name}
                />
            </FormGroup>
            <FormGroup controlId="image">
                <FormLabel>Image</FormLabel>
                <FormControl 
                    as="textarea"
                    placeholder="Enter your Hydrant description..."
                    onChange={this.updateFirstName}
                    defaultValue={description}
                />
            </FormGroup>
            <FormGroup controlId="latLong">
                <FormLabel>Latitude and Logitude</FormLabel>
                <FormControl 
                    type="text"
                    placeholder="Enter the coordinates of your Hydrant..."
                    onChange={this.updateLatLong}
                    defaultValue={latLong}
                />
            </FormGroup>
            <FormGroup controlId="photos">
                <FormLabel>Photos</FormLabel>
                <FormControl name="images[]" type="file" onChange={this.updatePhoto}/>
                {/* <ImageUploader
                    singleImage={true}
                    withIcon={true}
                    buttonText='Choose images'
                    onChange={this.updatePhotos}
                    imgExtension={['.jpg', '.gif', '.png', '.gif']}
                    maxFileSize={5242880}
                    withPreview={true}
            /> */}
            </FormGroup>
            <FormGroup controlId="latlong">
                <FormLabel>Location</FormLabel>
            </FormGroup>

            <Button type="submit">
            Submit
            </Button>
        </Form>
        );
   }
}
export default CreateHydrantForm;
