import React, { useState } from 'react';
import axios from 'axios';

function Button() {
  const [message, setMessage] = useState('');

  const fetchStringFromFlask = async () => {
    try {
      const response = await axios.get('http://localhost:5000/nadia');
      setMessage(response.data.response);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching string:', error);
    }
  };

  return (
    <div className="Button">
      <button onClick={fetchStringFromFlask}>Get String from Flask</button>
      <p>{message}</p>
    </div>
  );
}

export default Button;