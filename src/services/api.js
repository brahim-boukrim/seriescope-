import axios from "https://cdn.jsdelivr.net/npm/axios@1.7.9/+esm"

export const api= axios.create({ 
    baseURL: 'https://seriescope-api.vercel.app/api',
    timeout: 8000,
    headers: { 'X-Learner': 'b.boukrim' } 
    })
