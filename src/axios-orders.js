import axios from 'axios';

const instance = axios.create({
    baseURL:'https://burger-builder-c72f3.firebaseio.com/'
});

export default instance;