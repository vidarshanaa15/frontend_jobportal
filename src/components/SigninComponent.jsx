import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SigninComponent = () => {
    const [name, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // perform authentication (api?)
        if (name && password) {
            // assuming successful authentication
            alert('Signin successful!');
            navigate('/home'); // redirect to home after successful signin
        } else {
            alert('Please fill in all fields');
        }
    };

    return (
        <div className="container d-flex align-items-center justify-content-center vh-100">
            <div className="card" style={{ width: '25rem' }}>
                <div className="card-body">
                    <h2 className="card-title text-center">Sign In</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Username:</label>
                            <input
                                type="text"
                                className="form-control"
                                value={name}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Password:</label>
                            <input
                                type="password"
                                className="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary mt-3">Sign In</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SigninComponent;
