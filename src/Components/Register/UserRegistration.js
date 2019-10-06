import React from 'react';
import RegistrationForm from './RegistrationForm';
import FormCard from '../../common/FormCard';

class UserRegistration extends React.Component {
   constructor(props) {
   super();
   console.log('Entered Registration view')
   this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleSubmit(registrationInfo) {
      console.log(registrationInfo);
      this.props.history.push('/'); // return to homepage after registration
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
