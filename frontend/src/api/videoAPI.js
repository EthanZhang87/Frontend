import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
});

export const uploadVideo = (formData) => api.post('/upload', formData);
export const getAnalysis = (matchId) => api.get(`/analysis/${matchId}`);
