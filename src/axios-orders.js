import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-ece63.firebaseio.com/'
});

export default instance;