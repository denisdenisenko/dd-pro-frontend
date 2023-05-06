import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

function Cookie() {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const storedUsername = Cookies.get('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSaveClick = () => {
    Cookies.set('username', username, { expires: 7 });
  };

  const handleClearClick = () => {
    Cookies.remove('username');
    setUsername('');
  };

  return (
    <div>
      <input className ="myInput" type="text" value={username} onChange={handleInputChange} />
      <button className ="save" onClick={handleSaveClick}>Save</button>
      <button className = "clear" onClick={handleClearClick}>Clear</button>
    </div>
  );
}

export default Cookie;