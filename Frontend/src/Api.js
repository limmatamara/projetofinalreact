import axios from'axios';

const apiAxios = axios.create({
  baseURL: `https://api.nytimes.com/svc/topstories/v2`

});

export default apiAxios;