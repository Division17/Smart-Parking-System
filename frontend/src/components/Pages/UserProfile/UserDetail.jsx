import React, { useState, useEffect } from 'react';
import UserDetail from './UserDetail';
import axios from 'axios'

const fetchUserIdByEmail = async (email) => {
  try {
    const response = await axios.get('/api/user', {
      params: { email }
    });
    return response.data.data.id;
  } catch (error) {
    console.error('Error fetching user ID:', error.message);
    throw error;
  }
};

function App() {
  const [userId, setUserId] = useState(null);
  const [error, setError] = useState('');
  
  useEffect(() => {
    const getUserId = async () => {
      try {
        const email = response.data.email; 
        const id = await fetchUserIdByEmail(email);
        setUserId(id);
      } catch (error) {
        setError('Failed to fetch user ID');
      }
    };

    getUserId();
  }, []);

  return (
    <div className="App">
      {error && <p className="text-red-600">{error}</p>}
      {userId && <UserDetail userId={userId} />}
    </div>
  );
}

export default App;
