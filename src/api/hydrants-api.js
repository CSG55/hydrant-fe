import axios from 'axios';
import {TEST_TOKEN} from '../variables';

let axiosConfig = {
    headers: {
        'Content-Type': 'application/json',
        'authorization': TEST_TOKEN,
        // "Access-Control-Allow-Origin": "*",
    }
  };
  

  function createHydrant(data) {
    axios.post('http://localhost:5000/hydrants/', data, axiosConfig)
    .then(res => {
        console.log(res.data);
        return res.data;
    })
    .catch((err) => {
        // fetchHydrant();
        console.log("AXIOS ERROR: ", err);
    })
      
}
function fetchHydrant() {
    axios.get('http://localhost:5000/hydrants/?id=1/', axiosConfig)
    .then(res => {
        console.log(res);
        return res;
    })
    .catch((err) => {
        console.log("AXIOS ERROR: ", err);
    })
      
}

export {
    createHydrant,
    fetchHydrant,
};