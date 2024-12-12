import React, { useState } from 'react';
import axios from 'axios';
// import { login } from './API';


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/login', { username, password });
            const { token } = response.data;
            localStorage.setItem('token', token);
            window.location.href = '/admin';
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="bg-zinc-100 flex items-center justify-center min-h-screen p-4">
            <div className="bg-white shadow-lg rounded-lg p-8 w-96">
                <h1 className="text-2xl font-extrabold text-center text-green-500">Admin Login</h1>
                {error && <p style={{ color: 'red' }}>{error}</p>}

                <form onSubmit={handleSubmit} className="mt-4 grid gap-4">
                    <input
                        type="text"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        id="email"
                        placeholder="Enter Your Username or Email"
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                        required
                    />

                    <input
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        id="password"
                        placeholder="Enter Your Password"
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                        required
                    />

                    <div className="flex items-center">
                        <input type="checkbox" id="remember" className="mr-2" />
                        <label htmlFor="remember" className="text-gray-600">Remember Me</label>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors"
                    >
                        <i className='fa fa-user'></i> Log In
                    </button>
                </form>
                <a href="/" className="block mt-2 text-blue-600">I forgot my password</a>
            </div>
        </div>



        // // <div>
        //     // <h1>Login</h1>
        //     <form onSubmit={handleSubmit}>
        //         <label>
        //             Username:
        //             <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
        //         </label>
        //         <br />
        //         <label>
        //             Password:
        //             <input type="password" value={password} onChange={(event) => setPassword(event.target.value)}  />
        //         </label>
        //         <br />
        //         <button type="submit">Login</button>
        //         {error && <div style={{ color: 'red' }}>{error}</div>}
        //     </form>
        // </div>
    );
};

export default Login;