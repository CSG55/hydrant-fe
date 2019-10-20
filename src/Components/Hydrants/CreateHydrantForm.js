import React from 'react';
import {Button, FormControl, FormGroup, Form, FormLabel, Col} from 'react-bootstrap';
// import ImageUploader from 'react-images-upload';

const validateForm = (name, lat, long) => {
    const errors = {
        name: !name,
        lat: !lat,
        long: !long,
    };
    console.log(errors);
    return errors;
   }
class CreateHydrantForm extends React.Component {
   constructor() {
      super();
      this.state = {
        name: "",
        description: "",
        lat: "",
        long:"",
        pictures: [],
        video: [],

      }
    this.updateName = this.updateName.bind(this);
    this.updateDescription = this.updateDescription.bind(this);
    this.updateLat = this.updateLat.bind(this);
    this.updateLong = this.updateLong.bind(this);
    this.updatePhoto = this.updatePhoto.bind(this);
    this.updateVideo = this.updateVideo.bind(this);
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
        const {name, description, lat, long, pictures, video} = this.state;
        const errors = validateForm(name, lat, long);
        const isInvalid = Object.values(errors).some(x => (x === true)); // if one form item has an error, the form is invalid

        e.preventDefault();
        if (isInvalid){
            this.setState({errors});
        } else {
        console.log(this.state);
        this.props.handleSubmit({name, description, lat, long, pictures, video})
        }
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
    updateLat(e) {
        console.log('updateLat', e.target.value);
        this.setState({
            lat: e.target.value
        });
    }
    updateLong(e) {
        console.log('updateLong', e.target.value);
        this.setState({
            long: e.target.value
        });
    }
    updatePhoto(e){
            console.log('updatePhoto', e.target.value);
            this.setState({
                pictures: e.target.files
            });
        }
    updateVideo(e){
        console.log('updatevideo', e.target.value);
        this.setState({
            video: e.target.files
        });
    }

   render() {
        const {name, description, lat, long} = this.state;
        return (
        <Form className="hydrant-editor" onSubmit={this.onSubmit}>
        {/* Upon Submission, all form data is sent to the parent component to CreateHydrantForm */}
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

            <FormGroup controlId="location">
                <Form.Row>
                    <Col>
                        <FormControl 
                            type="number"
                            placeholder="Enter Latitude..."
                            onChange={this.updateLat}
                            value={lat}
                        />
                    </Col>
                    <Col>
                        <FormControl 
                            type="number"
                            placeholder="Enter Longitude..."
                            onChange={this.updateLong}
                            value={long}
                        />
                    </Col>
                </Form.Row>
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
            <FormGroup controlId="video">
                <FormLabel>Video</FormLabel>
                <FormControl name="videos[]" type="file" onChange={this.updateVideo}/>
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
            <Button type="submit">
            Submit
            </Button>
        </Form>
        );
   }
}
export default CreateHydrantForm;
