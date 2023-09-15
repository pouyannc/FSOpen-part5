import React, { useState } from 'react';

const Login = ({ login }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    login({ username, password });

    setUsername('');
    setPassword('');
  };

  return (
    <>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <div>
          Username:
          <input type="text" value={username} name="username" onChange={(e) => { setUsername(e.target.value); }} />
        </div>
        <div>
          Password:
          <input type="password" value={password} name="password" onChange={(e) => { setPassword(e.target.value); }} />
        </div>
        <button type="submit">login</button>
      </form>
    </>
  );
};

export default Login;
