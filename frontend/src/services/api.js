// filepath: /c:/Users/Lenovo/OneDrive/Desktop/intellicampus/College-Management-System/frontend/src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:3000/api/v1';

export const fetchUsers = async () => {
    try {
        const response = await axios.get(`${API_URL}/users`);
        return response.data.data;
    } catch (error) {
        throw new Error('Error fetching users: ' + error.message);
    }
};

export const fetchCourses = async () => {
    try {
        const response = await axios.get(`${API_URL}/courses`);
        return response.data.data;
    } catch (error) {
        throw new Error('Error fetching courses: ' + error.message);
    }
};

export const fetchDepartments = async () => {
    try {
        const response = await axios.get(`${API_URL}/departments`);
        return response.data.data;
    } catch (error) {
        throw new Error('Error fetching departments: ' + error.message);
    }
};

export const fetchRoles = async () => {
    try {
        const response = await axios.get(`${API_URL}/roles`);
        return response.data.data;
    } catch (error) {
        throw new Error('Error fetching roles: ' + error.message);
    }
};

export const getUser = async (userId) => {
    try {
        const response = await axios.get(`${API_URL}/users/${userId}`);
        return response.data.data;
    } catch (error) {
        console.error("Error fetching user:", error);
        throw error;
    }
};

export const loginUser = async (credentials) => {
    try {
        const response = await axios.post(`${API_URL}/users/login`, credentials);
        return response.data.data;
    } catch (error) {
        throw new Error('Error logging in: ' + error.message);
    }
};