import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const Navigate = useNavigate();

    const handleLogin = () => {
        if (username === 'admin' && password === 'password') {
            onLogin();
            Navigate('/betting-matches');
        } else {
            setError('Invalid credentials. Please try again.');
        }
    };

    return (
        <div style={{position:'relative',top:'36vh'}}>
            <h2>Login</h2>
            <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default Login;
