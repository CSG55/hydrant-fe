import React from 'react';
import {Button, FormControl, FormGroup, Form, FormLabel, Col} from 'react-bootstrap';
import {isValidLong, isValidLat} from '../../common/validators';
import MapContainer from '../../common/MapContainer'
// import ImageUploader from 'react-images-upload';

    const validateForm = (name, lat, long) => {
        const errors = {
            name: !name,
            lat: !isValidLat(lat), // use validator function to determine if coordinate is invalid
            long: !isValidLong(long),
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
            errors:{},
        }
        this.updateName = this.updateName.bind(this);
        this.updateDescription = this.updateDescription.bind(this);
        this.updateLat = this.updateLat.bind(this);
        this.updateLong = this.updateLong.bind(this);
        this.updatePhoto = this.updatePhoto.bind(this);
        this.updateVideo = this.updateVideo.bind(this);
        this.onMapMarkerPlace = this.onMapMarkerPlace.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }


    onSubmit(e) {
        const {name, description, lat, long, pictures, video} = this.state;
        const errors = validateForm(name, lat, long);
        const isInvalid = Object.values(errors).some(x => (x === true)); // if one form item has an error, the form is invalid
        console.log(this.state);

        e.preventDefault();
        if (isInvalid){
            this.setState({errors});
        } else {
            this.props.handleSubmit({name, description, lat, long, pictures, video})
        }
    }
    updateName(e) {
        this.setState({
            name: e.target.value
        });
    }
    updateDescription(e) {
        this.setState({
            description: e.target.value
        });
    }
    updateLat(e) {
        this.setState({
            lat: e.target.value
        });
    }
    updateLong(e) {
        this.setState({
            long: e.target.value
        });
    }
    updatePhoto(e){
            this.setState({
                pictures: e.target.files
            });
    }
    updateVideo(e){
        this.setState({
            video: e.target.files
        });
    }

    onMapMarkerPlace(coords){
        // console.log('updateMarker', coords);
        this.setState({
            lat:coords.lat,
            long:coords.long,
        });
    }

    render() {
            const {errors, name, description, lat, long} = this.state;
            return (
            <Form className="hydrant-editor" onSubmit={this.onSubmit}>
            {/* Upon Submission, all form data is sent to the parent component to CreateHydrantForm */}
                <FormGroup controlId="name">
                    <FormLabel className="required">Hydrant Name</FormLabel>
                    <FormControl 
                        type="text"
                        placeholder="Name your hydrant..."
                        onChange={this.updateName}
                        defaultValue={name}
                        isInvalid={errors.name}
                        required
                    />
                <FormControl.Feedback type="invalid">
                    Please enter a name.
                </FormControl.Feedback>


                </FormGroup>
                <FormGroup controlId="description">
                    <FormLabel>Description</FormLabel>
                    <FormControl 
                        as="textarea"
                        placeholder="Enter your Hydrant description..."
                        onChange={this.updateFirstName}
                        defaultValue={description}
                    />
                </FormGroup>

                <FormGroup controlId="location">
                <FormLabel className="required">Location</FormLabel>
                    <Form.Row>
                        <Col>
                            <FormControl 
                                type="number"
                                placeholder="Enter Latitude..."
                                onChange={this.updateLat}
                                value={lat}
                                isInvalid={errors.lat}
                                required
                            />
                            <FormControl.Feedback type="invalid">
                                Please enter a valid latitude (between -90 and 90).
                            </FormControl.Feedback>
                        </Col>
                        <Col>
                            <FormControl 
                                type="number"
                                placeholder="Enter Longitude..."
                                onChange={this.updateLong}
                                value={long}
                                isInvalid={errors.long}
                                required
                            />
                            <FormControl.Feedback type="invalid">
                                Please enter a valid longitude (between -180 and 180).
                            </FormControl.Feedback>
                        </Col>
                    </Form.Row>
                    <br/>
                    <Form.Row>
                        <div className="create-hydrant-map">
                            <MapContainer onMarkerDragEnd={this.onMapMarkerPlace} editing={true}/>
                        </div> 
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
