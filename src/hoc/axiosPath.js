import axios from 'axios';


const instance = axios.create({
    baseURL:('https://movie-app-mojito.firebaseio.com/')
});

export default instance;