import axios from 'axios';
import {TEST_TOKEN} from '../variables';

let axiosConfig = {
    headers: {
        'Content-Type': 'application/json',
        'authorization': TEST_TOKEN,
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