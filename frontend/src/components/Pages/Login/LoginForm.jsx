import React, { useState } from 'react';
import { Lock, Mail } from 'lucide-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post('/api/user/login', { email, password });
            setMessage(response.data.message);
            setLoading(false);
            navigate('/profile'); // Redirect to profile page
        } catch (error) {
            setLoading(false);
            setMessage(error.response.data.message);
        }
    };

    return (
        <div className="w-full max-w-sm mx-auto mt-10">
            {loading && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-75">
                    <div className="loader">Loading...</div>
                </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative flex items-center">
                    <Mail className="absolute left-3 w-5 h-5 text-gray-400" />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="pl-10 w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                </div>

                <div className="relative flex items-center">
                    <Lock className="absolute left-3 w-5 h-5 text-gray-400" />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="pl-10 w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Sign In
                </button>

                <div className="text-center text-sm">
                    <a href="#" className="text-blue-600 hover:text-blue-800">
                        Forgot password?
                    </a>
                </div>

                {message && <p className="mt-4 text-center text-red-600">{message}</p>}
            </form>
        </div>
    );
}
