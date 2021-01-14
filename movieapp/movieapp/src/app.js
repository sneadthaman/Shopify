export const axios = require('axios').create({
    baseURL: 'http://www.omdbapi.com/',
    responseType: 'json'
})