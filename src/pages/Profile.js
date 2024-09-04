import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('/api/profile');
        setUser(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchUser();
  }, []);

  return (
    <div className="container">
      {user && (
        <div>
          <h2>Profile</h2>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Gender: {user.gender}</p>
        </div>
      )}
    </div>
  );
}

export default Profile;
