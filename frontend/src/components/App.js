import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Users from './Users';
import Courses from './Courses';
import Departments from './Departments';
import Roles from './Roles';
import Login from './Login';
import '../App.css';

const App = () => {
    return (
        <Router>
            <div className="app">
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/users" element={<Users />} />
                        <Route path="/courses" element={<Courses />} />
                        <Route path="/departments" element={<Departments />} />
                        <Route path="/roles" element={<Roles />} />
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;