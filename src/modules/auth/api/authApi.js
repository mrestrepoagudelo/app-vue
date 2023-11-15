
import axios from 'axios';

const authApi = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts',
    params: {
        key: 'AIzaSyD_HkR9ye0qSQodcTX4lsZP-tt4faukaNw'
    }
})

export default authApi


