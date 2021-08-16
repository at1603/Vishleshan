import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
});

//---------------Authentication axios APIs------------//
export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);

//---------------Interview Analysis axios APIs------------//
export const joinZoomCall = (formData) => API.post('/analysis/interviewAnalysis', formData)
export const getAnalysis = (formData) => API.post('/analysis/interviewAnalysisResult', formData)
export const stopAnalysis = (connectionId) => API.get(`/analysis/stopInterviewAnalysis/${connectionId}`)

//---------------Pitch Analysis axios APIs------------//
export const sendVideoData = (formData) => API.post('/analysis/pitchAnalysis/sendVideoData', formData, {
    headers: {
        "Content-Type": "multipart/form-data"
    }
})
export const getComparisonData = (conversationId1, conversationId2) => API.get(`/analysis/pitchAnalysis/getComparisonData/${conversationId1}/${conversationId2}`)
export const getConversationList = () => API.get('/analysis/pitchAnalysis/getConversationList');
export const fetchAnalysisResult = (conversationId) => API.get(`/analysis/pitchAnalysis/fetchAnalysisResult/${conversationId}`);

