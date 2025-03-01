// filepath: /c:/Users/Lenovo/OneDrive/Desktop/intellicampus/College-Management-System/frontend/src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import { loginUser } from '../services/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch user data if needed
        setLoading(false);
    }, []);

    const login = async (email, password) => {
        try {
            const userData = await loginUser({ email, password });
            setUser(userData);
        } catch (error) {
            throw new Error('Login failed');
        }
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};