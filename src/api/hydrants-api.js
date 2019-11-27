import axios from 'axios';
import {TEST_TOKEN} from '../variables';

let axiosConfig = {
    headers: {
        'Content-Type': 'application/json',
        'authorization': TEST_TOKEN,
        // "Access-Control-Allow-Origin": "*",
    },
  };
  

function createHydrant(data) {
    return axios.post('http://localhost:5000/hydrants/', data, axiosConfig);
}
function fetchHydrant(data) {
    return axios.get('http://localhost:5000/hydrants/', {...axiosConfig, params: {id:data.id, name:data.searchName, rating: data.searchRating, long: data.long, lat: data.lat }})      
}

function createReview(data) {
    return axios.post('http://localhost:5000/reviews/', data, axiosConfig);
}

export {
    createHydrant,
    fetchHydrant,
    createReview,
};