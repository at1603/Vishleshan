import axios from 'axios'

const url = 'http://localhost:5000/posts'

export const signIn = (formData) => axios.post('/signin', formData);
export const signUp = (formData) => axios.post('/signup', formData);