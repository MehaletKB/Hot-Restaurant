import axios from 'axios';

// This is the DATABASE SERVER address
const BASE_URL = "http://localhost:3000";

export default {
    async index(type = "tables"){
        const {data} = await axios.get(`${BASE_URL}/${type}`);
    return data;
    },
    
    async add(newCustomer){
        const {data} = await axios.post(`${BASE_URL}/tables`, newCustomer, null, 2);
    return data;
    }
}
