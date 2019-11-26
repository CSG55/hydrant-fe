import axios from 'axios';
import {TEST_TOKEN} from '../variables';

let axiosConfig = {
    headers: {
        'Content-Type': 'application/json',
        'authorization': TEST_TOKEN,
        // "Access-Control-Allow-Origin": "*",
    },
    params: {id:1}
  };
  

function createHydrant(data) {
    return axios.post('http://localhost:5000/hydrants/', data, axiosConfig);
}
function fetchHydrant(hydrant_id) {
    return axios.get('http://localhost:5000/hydrants/', {...axiosConfig, params: {id:hydrant_id}})      
}

export {
    createHydrant,
    fetchHydrant,
};