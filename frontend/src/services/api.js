import axios from 'axios';
const api=axios.create({baseURL:import.meta.env.VITE_API_URL||'http://localhost:5000/api',timeout:8000});
export const getProjects=()=>api.get('/projects').then(r=>r.data.data);export const getProject=id=>api.get(`/projects/${id}`).then(r=>r.data.data);export const getSkills=()=>api.get('/skills').then(r=>r.data.data);export const getServices=()=>api.get('/services').then(r=>r.data.data);export const getExperiences=()=>api.get('/experiences').then(r=>r.data.data);export const sendContact=data=>api.post('/contact',data).then(r=>r.data);export default api;
