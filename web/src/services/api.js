const axios = require('axios');

const api = axios.create({
    baseURL: 'http://'
});

export default api;