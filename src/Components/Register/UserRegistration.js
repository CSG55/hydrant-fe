import React from 'react';
import RegistrationForm from './RegistrationForm';
import FormCard from '../../common/FormCard';

import { registerUser } from "../../api/users-api";

class UserRegistration extends React.Component {
   constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleSubmit(registrationInfo) {
      registerUser(registrationInfo).then((res) => {
         this.props.history.push('/'); // return to home after registration
      }).catch((err) => {
         console.log("AXIOS ERROR: ", err);
     })

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
