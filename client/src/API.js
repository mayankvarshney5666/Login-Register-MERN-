import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
});

export const login = async (username, password) => {
    try {
        const response = await api.post('/login', { username, password });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const register = async (username, password, role) => {
    try {
        const response = await api.post('/register', { username, password, role });
        return response.data;
    } catch (error) {
        throw error;
    }
};