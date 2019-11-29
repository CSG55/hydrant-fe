import axios from 'axios';
import Cookies from 'universal-cookie';
import {BASE_URL} from '../variables';

const cookies = new Cookies();

let axiosConfig = {
    headers: {
        'Content-Type': 'application/json',
        'authorization': cookies.get('token') ? cookies.get('token') : '', // if no token present in cookie, don't use one
        // "Access-Control-Allow-Origin": "*",
    },
  };

  

function registerUser(data) {
    return axios.post(`${BASE_URL}/api/users/`, data, axiosConfig);
}
function loginUser(data) {
    return axios.post(`${BASE_URL}/api/authenticate/`, data, axiosConfig);
}

export {
    registerUser,
    loginUser
};