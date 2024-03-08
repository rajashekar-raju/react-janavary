import React, { createContext, useState } from 'react';

const initialUser = { name: 'Jane Doe', age: 25 };

const UserContext = createContext(initialUser);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(initialUser);

  const handleNameChange = (event) => {
    setUser({ ...user, name: event.target.value });
  };

  return (
    <UserContext.Provider value={{ user, handleNameChange }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
