import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({ baseURL: API_URL, timeout: 8000, headers: { 'Content-Type': 'application/json' } });

const unwrap = (response) => response.data.data;

export const getProjects = () => api.get('/projects').then(unwrap);
export const getProject = (id) => api.get(`/projects/${id}`).then(unwrap);
export const getSkills = () => api.get('/skills').then(unwrap);
export const getServices = () => api.get('/services').then(unwrap);
export const getExperiences = () => api.get('/experiences').then(unwrap);
export const sendContact = (data) => api.post('/contact', data).then((response) => response.data);
export const getHealth = () => api.get('/health').then(unwrap);

export default api;
