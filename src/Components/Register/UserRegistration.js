import React from 'react';
import RegistrationForm from './RegistrationForm';
import FormCard from '../../common/FormCard';

class UserRegistration extends React.Component {
   constructor(props) {
   super(props);
   this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleSubmit(registrationInfo) {
      console.log(registrationInfo);
      this.props.history.push('/'); // return to home after registration
   }

   render() {
    return (
    <FormCard title ="User Registration">
        <RegistrationForm handleSubmit = {this.handleSubmit}/>
    </FormCard>
    );
   }
}
export default UserRegistration;
