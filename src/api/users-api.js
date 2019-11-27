import axios from 'axios';
import Cookies from 'universal-cookie';
import {TEST_TOKEN} from '../variables';

const cookies = new Cookies();

let axiosConfig = {
    headers: {
        'Content-Type': 'application/json',
        'authorization': cookies.get('token')
        // "Access-Control-Allow-Origin": "*",
    },
  };

  

function registerUser(data) {
    return axios.post('http://localhost:5000/users/', data, axiosConfig);
}
function loginUser(data) {
    return axios.post('http://localhost:5000/authenticate/', data, axiosConfig);
}

export {
    registerUser,
    loginUser
};