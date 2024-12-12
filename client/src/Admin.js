// src/Admin.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const Admin = () => {
    const token = localStorage.getItem('token');

    if (!token) {
        return <Navigate to="/login" />;
    }

    return (
        <div>
            <h1 className='text-center text-4xl font-serif my-14'>Welcome to Admin Dashboard</h1>
            {/* <!-- Add admin dashboard components here --> */}
        </div>
    );
};

export default Admin;