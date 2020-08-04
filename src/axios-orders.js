import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-f952b.firebaseio.com'
});

export default instance;