import axios from 'axios';

const baseUrl = 'http://recruitment01.vercel.app/api';

export const apiRequest = axios.create({
    baseURL: baseUrl,
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    }
});
