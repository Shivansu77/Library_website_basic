import axios from 'axios';

export const LibraryApplicationbackend = axios.create({
    baseURL: `http://localhost:8000/api`
});

// Login user function
export const loginUser = async (credentials) => {
    try {
        const response = await LibraryApplicationbackend.post('/users/login', credentials);
        localStorage.setItem('authToken', response.data.token);
        return response.data.user;
    } catch (error) {
        console.error('Login error:', error);
        throw error;
    }
};
