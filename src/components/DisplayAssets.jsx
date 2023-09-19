import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DisplayAssets() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Use the CORS Anywhere proxy to make the request
    axios
      .get('https://signbase.onrender.com/get-all', {
        headers: {
          'X-Requested-With': 'XMLHttpRequest', 
          'Authorization': 'Bearer YourAccessToken',  
          'Access-Control-Allow-Origin' : Content-type,
          'Access-Control-Allow-Methods':GET,PUT,POST,DELETE,PATCH,OPTIONS,
          'withCredentials': true,// Some servers require this header for CORS
        },
      })
      .then((response) => {
        const userdata = response.data;
        setUsers(userdata);
        console.log('userdata:', userdata);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="user-list">
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.char}</strong> ({user.image})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DisplayAssets;
