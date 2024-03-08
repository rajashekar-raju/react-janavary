import React, { useState } from 'react';

const FormValidation = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = (inputEmail) => {
    // A simple email validation example
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(inputEmail);
  };

  const validatePassword = (inputPassword) => {
    // A simple password validation example (minimum 6 characters)
    return inputPassword.length >= 6;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset error messages
    setEmailError('');
    setPasswordError('');

    // Validate email
    if (!validateEmail(email)) {
      setEmailError('Invalid email address');
      return;
    }

    // Validate password
    if (!validatePassword(password)) {
      setPasswordError('Password must be at least 6 characters');
      return;
    }

    // If validations pass, you can proceed with form submission or other actions
    console.log('Form submitted successfully!');
  };

  return (
    <div className="bg-yellow-300 w-1/4 h-96 mx-auto mt-10 p-10 rounded-lg">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col my-5">
          <label htmlFor="name">Name</label>
          <input
            onChange={(e) => setName(e.target.value)}
            name="name"
            type="text"
            placeholder="Enter your name"
            className="px-4 py-2 rounded-lg"
            value={name}
            required
          />
        </div>
        <div className="flex flex-col my-5">
          <label>Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter email"
            className="px-4 py-2 rounded-lg"
            value={email}
            required
          />
          {emailError && <span className="text-red-500">{emailError}</span>}
        </div>
        <div className="flex flex-col my-5">
          <label>Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter password"
            className="px-4 py-2 rounded-lg"
            value={password}
            required
          />
          {passwordError && (
            <span className="text-red-500">{passwordError}</span>
          )}
        </div>
        <button type="submit" className="bg-red-600 rounded-md px-4 py-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormValidation;
