import React from 'react';
import {Button, FormControl, FormGroup, Form, FormLabel, Col, Row} from 'react-bootstrap';
import ReactStars from 'react-stars'

// import ImageUploader from 'react-images-upload';

// returns a boolean array "errors" of each field's validaton status
// In "errors", a field is true if it is invalid. 
const validateForm = (title, reviewText, rating) => {
        const errors = {
            title: !title,
            reviewText: !reviewText,
            rating: !rating,
        };
        console.log(errors);
        return errors;
    }
    
class CreateReviewForm extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "",
            reviewText: "",
            rating: null,
            errors:{},
        }
        this.updateTitle = this.updateTitle.bind(this);
        this.updateReviewText = this.updateReviewText.bind(this);
        this.updateRating = this.updateRating.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }


    onSubmit(e) {
        const {title, reviewText, rating} = this.state;
        const errors = validateForm(title, reviewText, rating);
        const isInvalid = Object.values(errors).some(x => (x === true)); // if one form item has an error, the form is invalid

        e.preventDefault(); // prevent default behavior of onSubmit
        if (isInvalid){
            this.setState({errors}); // show predefined field errors 
        } else {
            this.props.handleSubmit({title, rating, review_text: reviewText});
            this.setState({title: "", reviewText: "", reviews: null, errors:{} }); // reset form values
        }
    }

    // update the state for name whenever a user edits the field.
    // this state is used when validating the field
    updateTitle(e) {
        this.setState({
            title: e.target.value
        });
    }
    updateReviewText(e) {
        this.setState({
            reviewText: e.target.value
        });
    }
    updateRating(e) {
        console.log(e);
        this.setState({
            rating: e
        });
    }

    render() {
            const {errors, title, reviewText, rating} = this.state;
            console.log(errors.rating);

            return (
            <Form className="review-editor" onSubmit={this.onSubmit}>
                <FormGroup controlId="title">
                    <FormLabel className="required">Title</FormLabel>
                    <FormControl 
                        type="text"
                        placeholder="Review Title..."
                        onChange={this.updateTitle}
                        defaultValue={title}
                        isInvalid={errors.title}
                    />
                    <FormControl.Feedback type="invalid">
                        Please enter a title.
                    </FormControl.Feedback>
                </FormGroup>

                <FormGroup controlId="rating">
                    <FormLabel className="required">Rating</FormLabel>
                    <Row>
                        <ReactStars
                            className="block-centered"
                            value={rating}
                            count={5}
                            edit={true}
                            size={24}
                            color2={'#ffd700'}
                            half={false} // disable half star ratings
                            onChange={this.updateRating}
                        />   
                    </Row>
                    {errors.rating && 
                        <div className="invalid-feedback custom-invalid-feedback">
                            Please enter your rating.
                        </div>}
                </FormGroup>

                <FormGroup controlId="reviewText">
                    <FormLabel className="required">Review</FormLabel>
                    <FormControl 
                        as="textarea"
                        placeholder="Your Review..."
                        onChange={this.updateReviewText}
                        defaultValue={reviewText}
                        isInvalid={errors.reviewText}
                    />
                    <FormControl.Feedback type="invalid">
                        Please enter your review.
                    </FormControl.Feedback>

                </FormGroup>
                <Button type="submit">
                Submit
                </Button>
            </Form>
            );
    }
}
export default CreateReviewForm;
