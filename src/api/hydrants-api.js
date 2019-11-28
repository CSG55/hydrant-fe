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
  

function createHydrant(data) {
    return axios.post('http://localhost:5000/api/hydrants/', data, axiosConfig);
}
function fetchHydrant(data) {
    return axios.get('http://localhost:5000/api/hydrants/', {...axiosConfig, params: {id:data.id, name:data.searchName, rating: data.searchRating, long: data.long, lat: data.lat }})      
}

function createReview(data) {
    return axios.post('http://localhost:5000/api/reviews/', data, axiosConfig);
}

export {
    createHydrant,
    fetchHydrant,
    createReview,
};