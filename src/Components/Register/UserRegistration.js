import React from 'react';
import Cookies from 'universal-cookie';
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
         const cookies = new Cookies();
         cookies.set('token', `TOKEN ${res.data.token}`, { path: '/', maxAge: 86400 }); // cookie expires in 24 hrs

         this.props.history.push('/'); // return to home after registration
      }).catch((err) => {
         console.log("AXIOS ERROR: ", err.response.data.username['0']); // show "duplicate username error" in console - temporarily
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
