import React, { useState } from 'react';

const UserCreationForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Validate inputs
    if (!username || !password) {
      console.error('Please fill in all fields');
      return;
    }

    // Create a new user object
    const newUser = {
      username,
      password,
    };

    try {
      // Send the new user data to the server
      console.log('Sending user data to the server:', newUser);
      const response = await fetch('http://localhost:3000/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Clear form inputs
      setUsername('');
      setPassword('');

      console.log('User created successfully:', newUser);
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <button type="submit">Create User</button>
    </form>
  );
};

export default UserCreationForm;
