import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const UserProfile = () => {
  const { user, handleNameChange } = useContext(UserContext);

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <input type="text" value={user.name} onChange={handleNameChange} />
    </div>
  );
};

export default UserProfile;
