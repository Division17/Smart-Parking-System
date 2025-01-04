import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

// Create AuthContext with a default value of false
export const AuthContext = createContext(false);

export function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const auth = async () => {
            try {
                const response = await axios.get('/api/user/auth');
                if (response.status === 200) {
                    setIsAuthenticated(true);
                } else {
                    setIsAuthenticated(false);
                }
            } catch (error) {
                setIsAuthenticated(false);

            }
        };

        auth();
    }, []);
    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
}

export default function useAuth() {
    return useContext(AuthContext);
}
