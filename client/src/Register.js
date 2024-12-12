// src/Register.js
import React, { useState } from 'react';
import { register } from './API';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('user');
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await register(username, password, role);
            const { message } = response;
            alert(message);
            window.location.href = '/login';
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="bg-zinc-100 flex items-center justify-center min-h-screen p-4">
            <div className="bg-white shadow-lg rounded-lg p-8 w-96">
                <h1 className="text-2xl font-extrabold text-center text-green-500">Admin Register</h1>
                {error && <p style={{ color: 'red' }}>{error}</p>}


                <form onSubmit={handleSubmit} className="mt-4 grid gap-4">
                    <label>
                        {/* Username: */}
                        <input
                            type="text"
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                            id="username"
                            placeholder="Enter Username or Email"
                            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                            required
                        />
                    </label>
                    <label>
                        {/* Password: */}
                        <input
                            type="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            id="password"
                            placeholder="Enter a Strong Password"
                            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                            required
                        />
                    </label>
                    <label>
                        {/* Role: */}
                        <select
                            value={role}
                            onChange={(event) => setRole(event.target.value)}
                            id="role"
                            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                            required>
                            <option value="role">Opt Out Your Role</option>
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                            <option value="super-admin">Super Admin</option>
                        </select>
                    </label>
                    <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors"
                    >Register</button>
                </form>
            </div>
        </div>
    );
};

export default Register;