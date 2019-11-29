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
  

function createHydrant(data) {
    return axios.post(`${BASE_URL}/api/hydrants/`, data, axiosConfig);
}
function fetchHydrant(data) {
    return axios.get(`${BASE_URL}/api/hydrants/`,
     {...axiosConfig,
        params: {
            id:data.id,
            name:data.searchName,
            rating: data.searchRating,
            long: data.long,
            lat: data.lat }
        });      
}

function createReview(data) {
    return axios.post(`${BASE_URL}/api/reviews/`, data, axiosConfig);
}

export {
    createHydrant,
    fetchHydrant,
    createReview,
};