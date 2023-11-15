import axios from 'axios';

const apiMain = axios.create({
   baseURL: 'urlhttp'
});

export default apiMain;