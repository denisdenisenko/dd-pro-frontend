import React from 'react';

const UserData = ({ users }) => {
  return (
    <div>
      <h1 className = "h1_users">Users from DB</h1>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserData;
