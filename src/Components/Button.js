import React, { useState } from 'react';
import axios from 'axios';
import UserData from './UserData';


function Button({color, text}) {
  const [users, setUsers] = useState([]);

  const fetchStringFromFlask = async () => {
    // Replace the URL with your Flask backend endpoint
    fetch('http://localhost:5000/get_users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error fetching data:', error));
  };

  return (
    <div className="Button">
      <button className = {color} onClick={fetchStringFromFlask} >{text}</button>
      <UserData users={users} />
    </div>
  );
}

export default Button;