import React from 'react';
import Cookies from 'universal-cookie';
import LoginForm from './LoginForm';
import FormCard from '../../common/FormCard';


import { loginUser } from "../../api/users-api";

class UserLogin extends React.Component {
   constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
   }

    handleSubmit(registrationInfo) {
        loginUser(registrationInfo).then((res) => {
            const cookies = new Cookies();
            cookies.set('token', `TOKEN ${res.data.token}`, { path: '/', maxAge: 86400 }); // cookie expires in 24 hrs
            this.props.history.push('/'); // return to home after login
        }).catch((err) => {
            console.log("AXIOS ERROR: ", err);
        })
    }

   render() {
    return (
    <FormCard title ="Login">
        <LoginForm handleSubmit = {this.handleSubmit}/>
    </FormCard>
    );
   }
}
export default UserLogin;
